import {test, expect} from '@playwright/test';
import {
  setupPageInDesktopView,
  setDataOpenUrlAttributeOnWindowOpen,
} from '../pageobjects/page';

test.describe('When I view social sharing', () => {
  test('should show facebook, twitter, email and linkedin share links', async ({page}) => {
    const p = await setupPageInDesktopView(page, '/contribute', false);
    await setDataOpenUrlAttributeOnWindowOpen(page);

    await p.socialShare.linkedIn.click();
    expect(await p.dataOpenUrlAttribute).toContain(
      'https://linkedin.com/shareArticle?url=https%3A%2F%2Fyourdigitalrights.org'
    );

    await p.socialShare.twitter.click();
    expect(await p.dataOpenUrlAttribute).toContain(
      'https://twitter.com/intent/tweet?url=https%3A%2F%2Fyourdigitalrights.org'
    );

    await p.socialShare.email.click();
    expect(await p.dataOpenUrlAttribute).toContain(
      'mailto:?body=Check%20out%20YourDigitalRights.org'
    );

    await p.socialShare.facebook.click();
    expect(await p.dataOpenUrlAttribute).toContain(
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyourdigitalrights.org'
    );
  });
});
