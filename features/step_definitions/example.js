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

Given(/^I open Facebook's page$/, () => {
  //Open Facebook page
  this.FacePage = client.page.facebook();
  return this.FacePage.navigate();
});

Then(/^the title is "([^"]*)"$/, title_ => {
  // Verify the form's title
  return this.FacePage.assert.title(title_);
});

Then(/^I write the text "([^"]*)" in the "([^"]*)" form$/, (text,form) => {
  // Insert the text in the form
  return this.FacePage.WriteForm(text,form);
});

Then(/^I select "([^"]*)" in the "([^"]*)" control$/, (_value,_control) => {
  // Insert the text in the form
  return this.FacePage.SetValControl(_value,_control);
});

Then(/^I select Male in the Gender option$/, () => {
  // Select Male in the gender control
  return this.FacePage.SelMaleGender();
});

Then(/^I click the Sing-In button$/, () => {
  // click the Sing-In button  
  return this.FacePage.ClickSingUp();
});