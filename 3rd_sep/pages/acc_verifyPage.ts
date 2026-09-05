import { Page, Locator, expect } from '@playwright/test';

export class AccountBalancePage {
  readonly acc:Locator;
  readonly checkingBalance: Locator;
  readonly savingsBalance: Locator;
  readonly net_worth:Locator;

  constructor(private page: Page) {
    this.checkingBalance = page.locator("div[data-account='checking'] div[class='balance']");
    this.savingsBalance = page.locator("div[data-account='checking'] div[class='balance']");
    this.acc=page.locator("#tab-dashboard");
    this.net_worth=page.locator(".net-worth-val");
  }

  async verifyCheckingBalance(expectedBalance: string) {
    await expect(this.checkingBalance).toContainText(expectedBalance);
  }

  async verifySavingsBalance(expectedBalance: string) {
    await expect(this.savingsBalance).toContainText(expectedBalance);
  }
  
  async verifynetworth(expectedBalance: string) {
    await expect(this.net_worth).toContainText(expectedBalance);
  }

  async printBalances() {
    await this.acc.click();
    const checking = await this.checkingBalance.textContent();
    const savings = await this.savingsBalance.textContent();
    const networth=await this.net_worth.textContent()

    console.log('Checking Balance:', checking);
    console.log('Savings Balance:', savings);
    console.log("net worth",networth);
  }
}
