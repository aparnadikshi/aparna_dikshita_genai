import { test, expect } from '@playwright/test';
import { BeneficiaryPage  } from '../pages/benificiaryPage';
import bData from '../testData/testData.json';
import { LoginPage } from '../pages/loginPage';
test('addBeneficiary', async ({ page }) => {
  await page.goto('https://playwrightpad.in/sandbox/banking');
  const bp = new BeneficiaryPage(page);
  await bp.openFundTransfer();
  await bp.add_beneficiary(bData.beneficiaryadd.name,bData.beneficiaryadd.acc,bData.beneficiaryadd.drop);


});