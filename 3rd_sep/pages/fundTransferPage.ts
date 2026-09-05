import { Page, Locator,expect } from '@playwright/test';

export class FundTransferPage {
  readonly fundTransferTab: Locator;
  readonly transferType: Locator;
  readonly fromAccount: Locator;
  readonly toAccount: Locator;
  readonly amount: Locator;
  readonly transferBtn: Locator;
  readonly verify:Locator

  constructor(private page: Page) {
    this.fundTransferTab = page.locator('#tab-transfers');
    this.transferType = page.locator('#transfer-type');
    this.fromAccount = page.locator('#from-acc');
    this.toAccount = page.locator('#to-acc');
    this.amount = page.locator("//input[@id='transfer-amount']");
    this.transferBtn = page.getByRole('button', {name: 'Execute Transfer'});
    this.verify=page.locator("//div[@class='transfer-success-msg']")
  }

  async fundTransfer(transferType: string,fromAccount: string,toAccount: string,amount: string
  ) {
    await this.fundTransferTab.click();
    await this.transferType.selectOption(transferType);
    await this.fromAccount.selectOption(fromAccount);
    await this.toAccount.selectOption(toAccount);
    await this.amount.fill(amount);
    await this.transferBtn.click();
  }
  async verifying(){
    await expect(this.verify).toBeVisible();
    console.log(await this.verify.textContent());
  }
}
