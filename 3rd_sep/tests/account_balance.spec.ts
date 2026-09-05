import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AccountBalancePage } from '../pages/acc_verifyPage';
import testData from '../testData/testData.json';

test('Verify Account Balance', async ({ page }) => {
  await page.goto('https://playwrightpad.in/sandbox/banking');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    testData.login.username,
    testData.login.password
  );
  const accountBalancePage = new AccountBalancePage(page);
  await accountBalancePage.printBalances();
  // await accountBalancePage.verifyCheckingBalance(testData.accountBalance.checkingBalance);
  // await accountBalancePage.verifySavingsBalance(testData.accountBalance.savingsBalance);
});
