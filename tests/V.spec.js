import { test, expect } from '@playwright/test';

test('click', async ({ page }) => {
// Open the login page
await page.goto('http://partner-dev.bimaguide.com/');
// await page.goto("http://partner-dashboard-dev.bimaguide.com/dashboard")

// Click login
await page.getByText('Login').click();

// Fill contact 
await page.locator('#contactNumber').fill('8295147142');
await page.locator('xpath=//button\[@class="modal\_btn"]').click();

//Fill OTP and value add manualy 
const otpInputs = page.locator('.otp\_input\_container input');
for (let i = 0; i < 4; i++) {
await otpInputs.nth(i).fill((i + 4).toString());
}

// Submit OTP
await page.locator('.modal\_btn.mt-3').click();

// Wait for page content to load after login
await page.waitForLoadState('networkidle');

//  Wait for sidebar load
const sidebarButton = page.locator("button.sidenav\_btn span");
await sidebarButton.waitFor({ state: 'visible', timeout: 10000 });
await sidebarButton.click();

// Click 
await page.locator("div.menu\_item.menu\_bottom span.menu\_heading").click();

// Fill customer details
await page.locator("input\[placeholder='Customer Name']").fill("Suman");
await page.locator("input\[placeholder='Customer Mobile No.']").fill("9898909009");
await page.locator("input\[placeholder='Customer Email Id']").fill("suman@gmail.com");
await page.locator("input\[placeholder='Enter RTO Code \*']").fill("hr16");

// Select year of manufacture
const yearInput = page.locator('#react-select-2-input');
await yearInput.click();
await yearInput.fill('1990');
await page.keyboard.press('Enter');

// Select insurer
const insurerInput = page.locator('#react-select-3-input');
await insurerInput.waitFor({ state: 'visible' });
await insurerInput.click();

const insurerOption = page
.locator('div\[id^="react-select-3-option"]')
.getByText('HDFC Ergo General Insurance Company Ltd', { exact: true });
await insurerOption.waitFor({ state: 'visible' });
await insurerOption.click();

// Fill IDV
const idvInput = page.locator("input\[placeholder='Enter IDV']");
await idvInput.click();
await idvInput.fill('29');
await page.waitForTimeout(4000);

// Upload file
const fileInput = page.locator("input[type='file']");
// "C:\Users\sumoc\Downloads\blank.pdf"
await fileInput.setInputFiles("C:\\Users\\sumoc\\Downloads\\blank.pdf");

// Submit form
await page.waitForTimeout(3000);

await page.locator("button\[type='submit']").click();
await page.waitForTimeout(1000);
// now we write code for Mapping policy

});

