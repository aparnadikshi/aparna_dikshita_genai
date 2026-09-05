import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { FundTransferPage } from '../pages/fundTransferPage';
import data from '../testData/testData.json';

test('Fund Transfer', async ({ page }) => {
  await page.goto('https://playwrightpad.in/sandbox/banking');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    data.login.username,
    data.login.password
  );

  const fundTransfer = new FundTransferPage(page);

  await fundTransfer.fundTransfer(
    data.transfer.transferType,
    data.transfer.fromAccount,
    data.transfer.toAccount,
    data.transfer.amount
  );
  await fundTransfer.verifying();
});