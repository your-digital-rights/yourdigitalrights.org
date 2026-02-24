import {test, expect} from '@playwright/test';
import {setupPageInDesktopView, setupPageInMobileView} from '../pageobjects/page';

test.describe('Desktop navigation', () => {
  test('shows the navigation bar and all of the items', async ({page}) => {
    const p = await setupPageInDesktopView(page, '/', false);

    await expect(p.navigationBar.nav).toBeVisible();
    expect(await p.navigationBar.linkText(1)).toBe('How it works');
    expect(await p.navigationBar.linkText(2)).toBe('FAQ');
    expect(await p.navigationBar.linkText(3)).toBe('Data Brokers');
    expect(await p.navigationBar.linkText(4)).toBe('Blog');
    expect(await p.navigationBar.linkText(5)).toBe('Contribute');
    expect(await p.navigationBar.linkText(6)).toBe('About');
    expect(await p.navigationBar.linkLangSelect).toBe('English');
    expect(await p.navigationBar.linkButtonText).toBe('Make a Donation');
  });

  test('focuses the Search input field', async ({page}) => {
    const p = await setupPageInDesktopView(page, '/', false);
    await p.searchIsFocused();
  });
});

test.describe('Mobile navigation', () => {
  test('shows mobile navigation', async ({page}) => {
    const p = await setupPageInMobileView(page, '/', true);

    await p.navigationBar.triggerMobileMenuToggle();

    expect(await p.navigationBar.mobLinkText(1)).toBe('How it works');
    expect(await p.navigationBar.mobLinkText(2)).toBe('FAQ');
    expect(await p.navigationBar.mobLinkText(3)).toBe('Data Brokers');
    expect(await p.navigationBar.mobLinkText(4)).toBe('Blog');
    expect(await p.navigationBar.mobLinkText(5)).toBe('About');
    expect(await p.navigationBar.mobLangSelect).toBe('English');
    expect(await p.navigationBar.mobButtonText).toBe('Make a Donation');
    expect(await p.navigationBar.mobLinkText(8)).toBe('Contribute');
    expect(await p.navigationBar.mobLinkText(9)).toBe('Stats');
    expect(await p.navigationBar.mobLinkText(10)).toBe('Make a Donation');
    expect(await p.navigationBar.mobLinkText(11)).toBe('Privacy Policy');
    expect(await p.navigationBar.mobLinkText(12)).toBe('Contact Us');
    expect(await p.navigationBar.mobLinkText(13)).toBe('#ownyourdata');
  });

  test('removes focus from Search after interacting with page', async ({page}) => {
    const p = await setupPageInMobileView(page, '/', true);

    await p.navigationBar.triggerMobileMenuToggle();
    await p.navigationBar.mobLink(2).click();
    await p.ownYourData.scrollIntoViewIfNeeded();
    await p.ownYourData.dblclick();

    await p.searchIsNotFocused();
  });

  test('focuses the Search input field', async ({page}) => {
    const p = await setupPageInMobileView(page, '/', false);
    await p.searchIsFocused();
  });
});
