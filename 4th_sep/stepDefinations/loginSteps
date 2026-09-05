import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/loginPage';
import { CustomWorld } from '../../support/world';

let login: LoginPage;

Given('the user is on the login page', async function () {
  login = new LoginPage(this.page);
  await login.openApp();
});

When('the user enters valid username and password', async function () {
  await login.login();
});

When('clicks the login button', async function () {
  console.log('Login button clicked');
});

When('user enters {string} and {string}',async function (username: string, password: string) {
    await login.loginwithmultipleusers(username, password);
  }
);

Then('the user should be redirected to the dashboard page', async function () {
  console.log('User is redirected to dashboard');
});
Then('the user should be login unsucessfull', async function () {
  console.log('Login unsuccessful');
});

Then('the user should be login sucessfull', async function () {
  console.log('Login successful');
});


When('the user enters invalid username or password', async function () {
  await login.loginwithinvalidCredentials();
});

Then('an error message should be displayed indicating invalid credentials',async function () {
    await login.errormsg();
    console.log('Error message displayed');
  }
);
