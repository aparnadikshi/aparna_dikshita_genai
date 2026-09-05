import { Page ,expect} from '@playwright/test';

export class LoginPage {

constructor(private page: Page) {}


// locators 

private txtUser = '#user-name';

private txtPass = '#password';

private btnLogin ='#login-button';

async openApp() {
await this.page.goto('https://www.saucedemo.com/');
}

async login() {console.log('Entering credentials');
await this.page.fill('input[name="user-name"]','standard_user');
await this.page.fill("//input[@id='password']",'secret_sauce');
await this.page.click('input[name="login-button"]');
}

async loginwithinvalidCredentials(){
    await this.page.waitForTimeout(3000);
    console.log('Entering invalid credentials');
    await this.page.fill('input[name="user-name"]','invalid');
    await this.page.fill("//input[@id='password']",'invalid');
    await this.page.click(this.btnLogin);
    await expect(this.page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
}

async loginwithmultipleusers(username:string,password:string){
    await this.page.fill(this.txtUser,username);
    await this.page.fill(this.txtPass,password);
    await this.page.click(this.btnLogin);
}

async errormsg(){
    await expect(this.page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
}

}
