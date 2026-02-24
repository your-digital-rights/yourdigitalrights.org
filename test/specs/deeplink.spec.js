import {test, expect} from '@playwright/test';
import {setupPageInDesktopView} from '../pageobjects/page';

test.describe('When I visit an org page', () => {
  test('displays the org name in the page', async ({page}) => {
    const p = await setupPageInDesktopView(page, '/d/slack.com', false);

    await expect(p.companyName).toHaveText('Slack.com');
    await expect(p.heading).toHaveText(
      'Delete your slack.com account or request your data.'
    );
  });
});
