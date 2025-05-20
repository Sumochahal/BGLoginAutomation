import{test,expect} from '@playwright/test';
test('Mapping_policy', async ({ page }) => {
  await page.goto('http://partner-dev.bimaguide.com/');

  await page.getByText('Login').click();
  await page.locator('#contactNumber').fill('8295147142');
  await page.locator('xpath=//button[@class="modal_btn"]').click();

  const otpInputs = page.locator('.otp_input_container input');
  await otpInputs.nth(0).fill('4');
  await otpInputs.nth(1).fill('5');
  await otpInputs.nth(2).fill('6');
  await otpInputs.nth(3).fill('7');

  await page.locator('.modal_btn.mt-3').click();
  await page.waitForTimeout(2000);
  //sidebar
  const sidebarButton = page.locator("button.sidenav_btn span");
  await expect(sidebarButton).toBeVisible({ timeout: 10000 });

  await sidebarButton.click();
  await page.waitForTimeout(2000);

  // for selecting mapping 
 await page.locator("div[class='menu_item'] span[class='menu_heading']").click();
 await page.waitForTimeout(5000);

 await page .locator("input[placeholder='Enter RTO Code *']").fill("Hr16");
await page .locator("input[placeholder='Enter Policy Number *']").fill("299898");
await page.locator('input[name="contactNumber"]').fill("8295147142");
// select docs
const fileInput = page.locator("input[type='file']");
await fileInput.setInputFiles("C:\\Users\\sumoc\\Downloads\\blank.pdf");

await page.waitForTimeout(2000);

await page.locator("//body/div[@id='root']/div[@id='layout_wrapper']/div[@class='layout_sidebar']/div[@class='requestMappingModalContainer']/div[contains(@class,'newQuoteRequestFormContainer')]/form[@class='min_height_form']/div[@class='form_data']/div[@class='form_body']/div[@class='divider mt_16']/div[3]/div[1]").click();
await page.setInputFiles("C:\\Users\\sumoc\\Downloads\\blank.pdf");
await page.waitForTimeout(2000);
// finally submit or (cancel=write to need code/locator)
// await page.locator("button[type='submit']").click();
});