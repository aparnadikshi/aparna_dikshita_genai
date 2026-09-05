import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    // Locators
    username = 'input[name="username"]';
    password = 'input[type="password"]';
    loginButton = '#login-btn';

    async open() {
        await this.page.goto('https://playwrightpad.in/sandbox/banking');
    }

    async login(user: string, pass: string) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginButton);
    }
}