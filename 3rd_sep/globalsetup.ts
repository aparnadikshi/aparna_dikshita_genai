import { chromium } from "@playwright/test";
import loginData from './testData/testData.json';


async function globalSetup(){
    console.log('Global Setup started');
    let browser = await chromium.launch();
    let page = await browser.newPage();
    await page.goto('https://playwrightpad.in/sandbox/banking');
    await page.fill('input[name="username"]',loginData.login.username);
    await page.fill('input[name="password"]',loginData.login.password);
    await page.click('#login-btn');

    await page.context().storageState({

        path:
        'auth.json'

});
console.log('Global Setup Completed');

}

export default globalSetup;