import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../testData/testData.json';
test('Login', async ({ page }) => {
  await page.goto('https://playwrightpad.in/sandbox/banking');
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(loginData.login.username,loginData.login.password);
  await page.waitForTimeout(3000);
  await expect (page.getByRole('heading', { name: 'Welcome back, Apex User' }))
  console.log("asserted")

});
``