/**
  *
*/

/**
 * @author 
 * @file example.js
 * @description file with the code to execute the feature´s instructions
 */

//Definition of the constants that we are going to use to manage standardization and good practices 
const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const {sumar} = require ('../../utilities/helper.js');


const {NumberMonth} = require ('../../utilities/helper.js');
const { IdFristNameForm } = require ('../../Config.js');
const { IdLastNameForm } = require ('../../Config.js');
const { IdEmailForm } = require ('../../Config.js');
const { IdConfirmEmailForm } = require ('../../Config.js');
const { IdPassForm } = require ('../../Config.js');
const { IdMonthControl } = require ('../../Config.js');
const { IdDateControl } = require ('../../Config.js');
const { IdYearControl } = require ('../../Config.js');
const { IdGenderOption } = require ('../../Config.js');
const { IdSingUpButton } = require ('../../Config.js');

Given(/^I open Facebook's page$/, () => {
  //Example using constant to calculate the queue time of an element. The constant "sumar", is a function created in the file helper.js 
  const waitMiliseconds = sumar(500,500);
  //You can also see that the URL works with a configuration variable, defined in the Config.js file.
  //return client.url( APP_URL ).waitForElementVisible('body', waitMiliseconds);
  this.FacePage = client.page.facebook();
  return this.FacePage.navigate();
});

Then(/^the title is "([^"]*)"$/, title_ => {
  // Verify the form's title
  //return client.assert.title(title);
  return this.FacePage.assert.title(title_);
});

Then(/^I write the text "([^"]*)" in the first name form$/, text => {
  // Insert the text in the First name's form
  return client
    .setValue(IdFristNameForm, text)
    .pause(2000);
});

Then(/^I write the text "([^"]*)" in the last name form$/, text => {
  // Insert the text in the Last name's form
  return client
    .setValue(IdLastNameForm, text)
    .pause(2000);
});

Then(/^I write the text "([^"]*)" in the email form$/, text => {
  // Insert the text in the email's form 
  return client
    .setValue(IdEmailForm, text)
    .pause(2000);
});

Then(/^I write the text "([^"]*)" in the re-enter email form$/, text => {
  // Insert the text in the re-enter email's form
  return client
    .setValue(IdConfirmEmailForm, text)
    .pause(2000);
});

Then(/^I write the text "([^"]*)" in the password form$/, text => {
  // Insert the text in the password's form
  return client
    .setValue(IdPassForm, text)
    .pause(2000);
});

Then(/^I write the text "([^"]*)" in the "([^"]*)" form$/, (text,form) => {
  // Insert the text in the form
  return this.FacePage.WriteForm(text,form);
});

Then(/^I select "([^"]*)" in the month control$/, month_ => {
  // Select month in the month control
  return client
    .setValue(IdMonthControl, NumberMonth(month_))
    .pause(2000);
});

Then(/^I select "([^"]*)" in the day control$/, date_ => {
  // Select day in the month control
  return client
    .setValue(IdDateControl, date_)
    .pause(2000);
});

Then(/^I select "([^"]*)" in the year control$/, year_ => {
  // Select year in the month control
  return client
    .setValue(IdYearControl, year_)
    .pause(2000);
});

Then(/^I select "([^"]*)" in the "([^"]*)" control$/, (_value,_control) => {
  // Insert the text in the form
  return this.FacePage.SetValControl(_value,_control);
});

Then(/^I select Male in the Gender option$/, () => {
  // Select Male in the gender control
  //return client.click(IdGenderOption).pause(2000);
  return this.FacePage.SelMaleGender();
});

Then(/^I click the Sing-In button$/, () => {
  // click the Sing-In button  
  //return client.click(IdSingUpButton).pause(2000);
    return this.FacePage.ClickSingUp();
})