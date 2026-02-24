import {test, expect} from '@playwright/test';
import {
  setupPageInDesktopView,
  setDataOpenUrlAttributeOnWindowOpen,
} from '../pageobjects/page';

test.describe('E2E request flow', () => {
  test('should create API record and allow deletion', async ({page}) => {
    test.setTimeout(120_000);

    const p = await setupPageInDesktopView(page, '/d/example.com', false);
    await setDataOpenUrlAttributeOnWindowOpen(page);

    // Fill in the form
    await p.personalInfoForm.fillIn('Full name', 'Rob');
    await p.personalInfoForm.select('Regulation', 'European Union (GDPR)');
    await p.personalInfoForm.fillIn(
      'Additional identifying information',
      '10 Downing Street'
    );
    await p.personalInfoForm.selectRadio('Yes, email me follow-up instructions');

    // Wait for form to update after selecting follow-up option
    await page.waitForTimeout(1000);

    // Submit the form
    await p.personalInfoForm.submit();

    // Get the mailto URL
    const mailtoUrl = await p.dataOpenUrlAttribute;
    expect(mailtoUrl).toBeTruthy();

    // Parse the mailto URL to get the request ID from cc parameter
    const urlParams = new URL(mailtoUrl.replace('mailto:', 'http://dummy?'))
      .searchParams;
    const cc = urlParams.get('cc');
    expect(cc).toBeTruthy();
    const requestId = cc.split('.request@')[0];

    // Get base URL
    const baseUrl = new URL(page.url()).origin;

    // Retry navigating to the request page until it loads successfully
    const maxRetries = 10;
    const retryDelay = 1000;
    let referenceText;

    for (let i = 0; i < maxRetries; i++) {
      await page.goto(`${baseUrl}/r/${requestId}`);
      const referenceElement = page.locator(
        '//strong[contains(text(), "Reference:")]/..'
      );

      try {
        await referenceElement.waitFor({state: 'visible', timeout: 5000});
        referenceText = await referenceElement.textContent();
        break;
      } catch (e) {
        if (i === maxRetries - 1) {
          throw new Error(
            `Failed to load /r/${requestId} page after ${maxRetries} retries`
          );
        }
        await page.waitForTimeout(retryDelay);
      }
    }

    const referenceValue = referenceText.split('Reference:')[1].split('\n')[0].trim();
    expect(requestId).toContain(referenceValue);

    // Go to delete page
    await page.goto(`${baseUrl}/r/${requestId}/delete`);

    // Click the delete all button
    const deleteAllButton = page.locator(
      '//button[contains(text(), "All requests")]'
    );
    await deleteAllButton.waitFor({state: 'visible', timeout: 10_000});
    await deleteAllButton.click();

    // Verify the success message
    const successMessage = page.locator('#deletePII > p');
    await successMessage.waitFor({state: 'visible', timeout: 10_000});
    const messageText = await successMessage.textContent();
    expect(messageText).toContain(
      'We have successfully deleted the personal data associated with all of your requests'
    );
  });
});
