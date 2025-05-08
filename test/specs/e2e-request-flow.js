import { setupPageInDesktopView, setDataOpenUrlAttributeOnWindowOpen } from "../pageobjects/page";

describe("When I submit a request via gmail", () => {
  it("form should submit and gmail should open in a new tab", async () => {
    const page = await setupPageInDesktopView("/d/example.com", true);
    await setDataOpenUrlAttributeOnWindowOpen();
    
    // Fill in the form
    await page.personalInfoForm.fillIn("Full name", "Rob");
    await page.personalInfoForm.select("Regulation", "European Union (GDPR)");
    await page.personalInfoForm.fillIn(
        "Additional identifying information",
        "10 Downing Street"
    );
    await page.personalInfoForm.selectRadio("Yes, email me follow-up instructions");

    // Click the dropdown menu and open Gmail
    await page.personalInfoForm.openGmailDropdown();
    
    // Get the Gmail URL from the data-open-url attribute
    const gmailUrl = await page.dataOpenUrlAttribute;
    expect(gmailUrl).to.exist;

    // Parse the Gmail URL to get the request ID from cc parameter
    const urlParams = new URLSearchParams(new URL(gmailUrl).search);
    const cc = urlParams.get('cc');
    const requestId = cc.split('.request@')[0];
    console.log('Request ID:', requestId);

    // Navigate to the request page using the same base URL
    const currentUrl = await browser.getUrl();
    const baseUrl = new URL(currentUrl).origin;
    await browser.url(`${baseUrl}/r/${requestId}`);

    // Get the Reference value from the hero section
    const referenceElement = await $('//strong[contains(text(), "Reference:")]/following-sibling::text()');
    const referenceValue = await referenceElement.getText();
    
    // Verify that the Reference value is contained within the request ID
    expect(requestId).to.include(referenceValue.trim());
  });
}); 