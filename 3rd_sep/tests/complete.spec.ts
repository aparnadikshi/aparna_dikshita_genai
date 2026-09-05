import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { FundTransferPage } from '../pages/fundTransferPage';
import { AccountBalancePage } from '../pages/acc_verifyPage';
import data from '../testData/testData.json';

test('Complete Banking Workflow', async ({ page }) => {

  // Login
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    data.login.username,
    data.login.password
  );

  // Fund Transfer
  const fundTransfer = new FundTransferPage(page);

  await fundTransfer.fundTransfer(
    data.transfer.transferType,
    data.transfer.fromAccount,
    data.transfer.toAccount,
    data.transfer.amount
  );

  await fundTransfer.verifying();

  // Verify Account Balance
  const accountBalancePage = new AccountBalancePage(page);
  await accountBalancePage.printBalances();
//   await accountBalancePage.verifyCheckingBalance(
//     data.accountBalance.checkingBalance
//   );
//   await accountBalancePage.verifySavingsBalance(
//     data.accountBalance.savingsBalance
//   );
  console.log('Workflow Completed Successfully');
  await page.locator("button[class='btn-unique']").click();
  console.log("signned out");
});