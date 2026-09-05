import { Page, Locator } from '@playwright/test';

export class BeneficiaryPage {
  readonly fundTransfer: Locator;
   readonly add: Locator;
   readonly user:Locator
   readonly acc:Locator;
   readonly drop:Locator;
   readonly save:Locator;

  constructor(private page: Page) {
    this.fundTransfer = page.locator("//button[@id='tab-transfers']");
    this.add=page.locator("//button[@id='add-beneficiary']");
    this.user=page.locator("//input[@id='bene-name']");
    this.acc=page.locator("//input[@id='bene-account']");
    this.drop=page.locator("//select[@id='bene-bank']");
    this.save=page.locator("//button[@id='save-bene']");
  }
  async openFundTransfer() {
    await this.fundTransfer.click();
  }
  async add_beneficiary(user:string,acc:string,bank:string){
    await this.add.click();
    await this.user.fill(user);
    await this.acc.fill(acc)
    await this.drop.selectOption(bank)
    await this.save.click();
  }
}
