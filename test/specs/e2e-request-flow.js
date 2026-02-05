import { setupPageInDesktopView, setDataOpenUrlAttributeOnWindowOpen } from "../pageobjects/page";

describe("When I submit a follow-up request", function() {
  this.timeout(120000); // 2 minutes - needs extra time for API to create DynamoDB record

  it("should create API record and allow deletion", async function() {
    const page = await setupPageInDesktopView("/d/example.com", false);
    await setDataOpenUrlAttributeOnWindowOpen();
    
    // Fill in the form
    await page.personalInfoForm.fillIn("Full name", "Rob");
    await page.personalInfoForm.select("Regulation", "European Union (GDPR)");
    await page.personalInfoForm.fillIn(
        "Additional identifying information",
        "10 Downing Street"
    );
    await page.personalInfoForm.selectRadio("Yes, email me follow-up instructions");

    // Wait for form to update after selecting follow-up option
    await browser.pause(1000);

    // Submit the form (will open mailto link)
    await page.personalInfoForm.submit();

    // Get the mailto URL from the data-open-url attribute set by window.open override
    const mailtoUrl = await page.dataOpenUrlAttribute;
    expect(mailtoUrl).to.exist;

    // Parse the mailto URL to get the request ID from cc parameter
    const urlParams = new URL(mailtoUrl.replace('mailto:', 'http://dummy?')).searchParams;
    const cc = urlParams.get('cc');
    expect(cc).to.exist;
    const requestId = cc.split('.request@')[0];

    // Navigate to the request page using the same base URL
    const currentUrl = await browser.getUrl();
    const baseUrl = new URL(currentUrl).origin;

    // Retry navigating to the request page until it loads successfully
    // (API call may take time to create the DynamoDB record)
    const maxRetries = 10;
    const retryDelay = 1000;
    let referenceElement;

    for (let i = 0; i < maxRetries; i++) {
      await browser.url(`${baseUrl}/r/${requestId}`);
      referenceElement = await $('//strong[contains(text(), "Reference:")]/..');

      try {
        await referenceElement.waitForDisplayed({ timeout: 5000 });
        break; // Element found, exit retry loop
      } catch (e) {
        if (i === maxRetries - 1) {
          throw new Error(`Failed to load /r/${requestId} page after ${maxRetries} retries`);
        }
        await browser.pause(retryDelay);
      }
    }
    const referenceText = await referenceElement.getText();
    const referenceValue = referenceText.split('Reference:')[1].split('\n')[0].trim();
    
    // Verify that the Reference value is contained within the request ID
    expect(requestId).to.include(referenceValue);

    // go to delete page
    await browser.url(`${baseUrl}/r/${requestId}/delete`);

    // Click the delete all button
    const deleteAllButton = await $('//button[contains(text(), "All requests")]');
    await deleteAllButton.waitForDisplayed({ timeout: 10000 });
    await deleteAllButton.waitForClickable({ timeout: 10000 });
    await deleteAllButton.click();

    // Verify the success message appears
    const successMessage = await $('#deletePII > p');
    await successMessage.waitForDisplayed({ timeout: 10000 });
    const messageText = await successMessage.getText();
    expect(messageText).to.include("We have successfully deleted the personal data associated with all of your requests");
  });
}); 