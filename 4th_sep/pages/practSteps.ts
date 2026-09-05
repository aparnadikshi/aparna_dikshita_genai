import { Given, When, Then } from '@cucumber/cucumber';
import { PracticePage } from '../../pages/practPage';
import { CustomWorld } from '../../support/world';

let registerPage: PracticePage;

Given('the user is on the register page', async function (this: CustomWorld) {
  registerPage = new PracticePage(this.page);
  await registerPage.openApp();
});

When('the user enters {string} and {string}',async function (firstName: string, email: string) {
    await registerPage.enterNameAndEmail(firstName,email);
  }
);

When('the user selects {string}', async function (gender: string) {
  await registerPage.selectGender(gender);
});

When('the user enters {string}, {string} and {string}',async function (mobileNumber: string,dateOfBirth: string,subject: string
  ) {
    await registerPage.enterMobileDobAndSubjects(mobileNumber, dateOfBirth, subject);
  }
);

When('the user selects {string} and uploads {string}',async function (hobby: string, picture: string) {
await registerPage.selectHobbiesAndUploadPicture(hobby, picture);
  }
);

When('the user enters {string}', async function (address: string) {
  await registerPage.enterAddress(address);
});

When('the user selects {string} and {string}',async function (state: string, city: string) {
await registerPage.selectStateAndCity(state,city);
  }
);

When('clicks the register button', async function () {
console.log("register button clicked");
});

Then('the registration should be completed successfully',async function () {
    await registerPage.clickSubmitButton();
    console.log("correct inputs");
  }
);
Then('the registration should not be completed successfully',async function () {
    console.log("wrong inputs");
  }
);