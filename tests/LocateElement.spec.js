// import{test,expect} from '@playwright/test'
// test('locateElement', async ({ page }) => {
//   await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
// //   by id.......
//   await page.locator('id=name').fill('sumabb');
// });
// import { test, expect } from '@playwright/test';

// test('locateElement', async ({ page }) => {
//   await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
//   firstly with the help of attribute 
//   const dropdown=await page.locator('[name="country"]')

//   by label,index and value we locate element
// await dropdown.selectOption({label:'Angola'})
// await dropdown.selectOption({index:5})
// await dropdown.selectOption({value:'BR'})

// await page.waitForTimeout(5000)
// const dropdownlist=await page.$$("//select[@name='country']/option")
// for(const droplist of dropdownlist){
//     const dropname=await droplist.textContent();
//     console.log(dropname);
// }
// });


// ***************For Checkbox ******************
import {test,expect} from '@playwright/test';
test('Checkbox',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    await page.locator("id=isAgeSelected").check();
    
    await page.waitForTimeout(3000);

})
