import { setupPageInDesktopView } from "../pageobjects/page";

describe("When I submit a request via gmail", () => {
  it("form should submit and gmail shoul open in a new tab", async () => {
    const page = await setupPageInDesktopView("/d/example.com", true);
    // Fill in the form
    await page.personalInfoForm.fillIn("Full name", "Rob");
    await page.personalInfoForm.select("Regulation", "European Union (GDPR)");
    await page.personalInfoForm.fillIn(
        "Additional identifying information",
        "10 Downing Street"
    );
    await page.personalInfoForm.selectRadio("Yes, email me follow-up instructions");
  });
}); 