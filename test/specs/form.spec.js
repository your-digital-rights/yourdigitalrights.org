import {test, expect} from '@playwright/test';
import {
  setupPageInDesktopView,
  setDataOpenUrlAttributeOnWindowOpen,
  initializeWindowPaqArray,
} from '../pageobjects/page';

test.describe('Form: select organization and submit', () => {
  test.describe.configure({mode: 'serial'});

  let p;
  let sharedPage;

  test.beforeAll(async ({browser}) => {
    sharedPage = await browser.newPage();
    await sharedPage.setViewportSize({width: 1200, height: 823});
    p = await setupPageInDesktopView(sharedPage, '/', false);
    await setDataOpenUrlAttributeOnWindowOpen(sharedPage);
    await initializeWindowPaqArray(sharedPage);
    await sharedPage.evaluate(() => {
      window.open = function (url) {
        document.body.setAttribute('data-open-url', url);
      };
      if (!(window._paq instanceof Array)) {
        window._paq = [];
      }
    });

    // Select an organization
    await p.searchForm.fillInSearch('Slack');
    const searchResult = sharedPage.locator('li:has-text("Slack (slack.com)")');
    await searchResult.waitFor({state: 'visible', timeout: 60_000});
    await searchResult.click();
  });

  test.afterAll(async () => {
    await sharedPage.close();
  });

  test('tracks site search', async () => {
    expect(await p.hasTracked('trackSiteSearch', 'slack.com')).toBe(true);
  });

  test('updates the url', async () => {
    await expect
      .poll(() => sharedPage.url(), {timeout: 30_000})
      .toMatch(/d\/slack.com/);
  });

  test('focuses the name field', async () => {
    const nameField = await p.personalInfoForm.selectElementByLabel('Full name');
    await expect(nameField).toBeFocused();
  });

  test('does not open a mailto url with invalid data', async () => {
    await p.personalInfoForm.fillIn('Full name', '');
    await p.personalInfoForm.fillIn('Additional identifying information', '');
    await p.personalInfoForm.submit();
    const mailTo = await sharedPage.locator('body').getAttribute('data-open-url');
    expect(mailTo).toBeNull();
  });

  test('opens correct mailto with valid data', async () => {
    // Reset the data-open-url attribute
    await sharedPage.evaluate(() => {
      document.body.removeAttribute('data-open-url');
    });

    await p.personalInfoForm.fillIn('Full name', 'Rob');
    await p.personalInfoForm.fillIn(
      'Additional identifying information',
      '10 Downing Street'
    );
    await p.personalInfoForm.select('Regulation', 'European Union (GDPR)');
    await p.personalInfoForm.submit();

    const mailToUrl = await sharedPage.locator('body').getAttribute('data-open-url');
    const mailTo = p.parsedMailTo(mailToUrl);

    expect(mailTo.to).toBe('feedback@slack.com');
    expect(mailTo.subject).toBe('Data deletion request - slack.com');
    expect(mailTo.body).toMatch(/Rob/);
    expect(mailTo.body).toMatch(/10 Downing Street/);
    expect(mailTo.body).toMatch(/To the Attention of the Privacy Department/);
    expect(mailTo.body).toContain('GDPR');

    expect(
      await p.hasTracked(
        'trackEvent',
        'Erasure Request',
        'Send GDPR Request',
        'slack.com'
      )
    ).toBe(true);
  });

  test('shows a thank you message', async () => {
    await expect(sharedPage.locator('#ThanksMessage')).toBeVisible();
    expect(await p.thanksMessage.title).toBe('Thank You!');
    expect(await p.thanksMessage.text).toContain(
      'request email should have opened in your email application'
    );
  });
});

test.describe('Form: add new organization', () => {
  test.describe.configure({mode: 'serial'});

  let p;
  let sharedPage;

  test.beforeAll(async ({browser}) => {
    sharedPage = await browser.newPage();
    await sharedPage.setViewportSize({width: 1200, height: 823});
    p = await setupPageInDesktopView(sharedPage, '/', false);
    await setDataOpenUrlAttributeOnWindowOpen(sharedPage);

    // Search with no results and click add org
    await p.searchForm.fillInSearch('abcxyz123');
    const addOrgResult = sharedPage.locator("li:has-text(\"Can't find an organization?\")");
    await addOrgResult.waitFor({state: 'visible', timeout: 60_000});
    await addOrgResult.click();
    await sharedPage.waitForURL('**/d/add');
  });

  test.afterAll(async () => {
    await sharedPage.close();
  });

  test('opens correct mailto with valid custom org data', async () => {
    await p.personalInfoForm.fillIn('Organization name', 'abcxyz123');
    await p.personalInfoForm.fillIn('Organization domain', 'abcxyz123.com');
    await p.personalInfoForm.fillIn('Organization email', 'dpo@abcxyz123.com');
    await p.personalInfoForm.fillIn('Full name', 'Rob');
    await p.personalInfoForm.select('Regulation', 'California (CCPA)');
    await p.personalInfoForm.fillIn(
      'Additional identifying information',
      '10 Downing Street'
    );
    await p.personalInfoForm.submit();

    const mailToUrl = await sharedPage.locator('body').getAttribute('data-open-url');
    const mailTo = p.parsedMailTo(mailToUrl);

    expect(mailTo.to).toBe('dpo@abcxyz123.com');
    expect(mailTo.subject).toBe('Data deletion request - abcxyz123.com');
    expect(mailTo.body).toMatch(/Rob/);
    expect(mailTo.body).toMatch(/10 Downing Street/);
    expect(mailTo.body).toMatch(/To the Attention of the Privacy Department/);
  });

});

// People paste whatever is in their address bar. The domain has to be reduced to
// a bare hostname, because that is the form the domains dataset is keyed on, and
// anything else leaves the request page unable to find the organization.
test.describe('Form: organization domain normalization', () => {
  async function openAddOrgForm(page) {
    await page.setViewportSize({width: 1200, height: 823});
    const p = await setupPageInDesktopView(page, '/', false);

    await p.searchForm.fillInSearch('abcxyz123');
    const addOrgResult = page.locator("li:has-text(\"Can't find an organization?\")");
    await addOrgResult.waitFor({state: 'visible', timeout: 60_000});
    await addOrgResult.click();
    await page.waitForURL('**/d/add');

    return p;
  }

  test('reduces a pasted address to a bare domain', async ({page}) => {
    const p = await openAddOrgForm(page);
    const domainField = await p.personalInfoForm.selectElementByLabel(
      'Organization domain'
    );

    await p.personalInfoForm.fillIn(
      'Organization domain',
      'https://WWW.AbcXyz123.com/privacy?x=1'
    );
    await domainField.blur();

    await expect(domainField).toHaveValue('abcxyz123.com');
  });

  test('refuses a value that is not a domain', async ({page}) => {
    const p = await openAddOrgForm(page);
    const domainField = await p.personalInfoForm.selectElementByLabel(
      'Organization domain'
    );

    await p.personalInfoForm.fillIn('Organization domain', 'not a domain');
    // Wait for the 300ms debounced validation to fire.
    await page.waitForTimeout(500);
    await domainField.blur();

    expect(
      await domainField.evaluate(el => el.validationMessage)
    ).toMatch(/domain only/i);
  });
});

test.describe('Form: invalid organization email', () => {
  test('focuses the organization email field and does not show thank you', async ({page}) => {
    await page.setViewportSize({width: 1200, height: 823});
    const p = await setupPageInDesktopView(page, '/', false);
    await setDataOpenUrlAttributeOnWindowOpen(page);

    // Search with no results and click add org
    await p.searchForm.fillInSearch('abcxyz123');
    const addOrgResult = page.locator("li:has-text(\"Can't find an organization?\")");
    await addOrgResult.waitFor({state: 'visible', timeout: 60_000});
    await addOrgResult.click();
    await page.waitForURL('**/d/add');

    // Fill in form with invalid org email
    await p.personalInfoForm.fillIn('Organization name', 'abcxyz123');
    await p.personalInfoForm.fillIn('Organization domain', 'abcxyz123.com');
    await p.personalInfoForm.fillIn('Organization email', 'notanemail');
    // Wait for the 300ms debounced email validation to fire
    await page.waitForTimeout(500);
    await p.personalInfoForm.fillIn('Full name', 'Rob');
    await p.personalInfoForm.select('Regulation', 'California (CCPA)');
    await p.personalInfoForm.fillIn(
      'Additional identifying information',
      '10 Downing Street'
    );
    await p.personalInfoForm.submit();

    // Check that the form is still displayed (validation prevented submission)
    await expect(page.locator('#personalInfoForm')).toBeVisible();

    const emailField = await p.personalInfoForm.selectElementByLabel(
      'Organization email'
    );
    await expect(emailField).toBeFocused();

    // Should not show thank you message
    expect(await p.thanksMessage.isVisible).toBe(false);
  });
});
