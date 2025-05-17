import { test, expect } from '@playwright/test';

test('click', async ({ page }) => {
  await page.goto('http://partner-dev.bimaguide.com/');

  await page.getByText('Login').click();
  await page.locator('#contactNumber').fill('8295147142');
  await page.locator('xpath=//button[@class="modal_btn"]').click();

  const otpInputs = page.locator('.otp_input_container input');
  await otpInputs.nth(0).fill('0');
  await otpInputs.nth(1).fill('0');
  await otpInputs.nth(2).fill('0');
  await otpInputs.nth(3).fill('0');

  await page.locator('.modal_btn.mt-3').click();
  await page.waitForTimeout(2000);

  // sidebar
  const sidebarButton = page.locator("button.sidenav_btn span");
  await expect(sidebarButton).toBeVisible({ timeout: 10000 });

  await sidebarButton.click();
  await page.waitForTimeout(2000);


  await page.locator("div[class='menu_item menu_bottom'] span[class='menu_heading']").click()


  await page.waitForTimeout(5000);


 await page.locator("input[placeholder='Customer Name']").fill("Suman");
   await page.waitForTimeout(2000);

 await page.locator("input[placeholder='Customer Mobile No.']").fill("9898909009");
   await page.waitForTimeout(2000);

 await page.locator("input[placeholder='Customer Email Id']").fill("suman@gmail.com");
   await page.waitForTimeout(2000);

 await page.locator("input[placeholder='Enter RTO Code *']").fill("hr16");
 await page.waitForTimeout(1000);


  await page.locator('#react-select-2-input').click();
  
  await page.locator('#react-select-2-input').fill('1990');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);
// for insurers dropdown
await page.locator('#react-select-3-input').waitFor({ state: 'visible' });
await page.locator('#react-select-3-input').click();
const insurerOption = page.locator('div[id^="react-select-3-option"]').getByText('HDFC Ergo General Insurance Company Ltd', { exact: true });
await insurerOption.waitFor({ state: 'visible' });
await insurerOption.click();


const idvInput = page.locator("input[placeholder='Enter IDV']");
await idvInput.click();     
await idvInput.fill('29'); // fill any integers value   
// await page.waitForTimeout(30000);

const fileChooser = await page.setInputFiles("C:\\Users\\sumoc\\Downloads\\blank.pdf");

await page.waitForTimeout(30000);

await page.locator("button[type='submit']").click()
await page.waitForTimeout(10000);



});






