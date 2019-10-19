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

When(/^I fill all required account’s information$/, () => {
  // Write the text "Juanito Alimaña" in the "first name" form
  this.FacePage.WriteForm("Juanito Alimaña","first name");
  // Write the text "Lavoe" in the "last name" form
  this.FacePage.WriteForm("Lavoe","last name");
  // Write the text "migan701@gmail.com" in the "email" form
  this.FacePage.WriteForm("migan701@gmail.com","email");
  // Write the text "migan701@gmail.com" in the "re-enter email" form
  this.FacePage.WriteForm("migan701@gmail.com","re-enter email");
  // Write the text "Pas_123456" in the "password" form
  this.FacePage.WriteForm("Pas_123456","password");
  // Select "Aug" in the "month" control
  this.FacePage.SetValControl("Aug","month");
  // Select "21" in the "day" control
  this.FacePage.SetValControl("21","day");
  // Select "1989" in the "year" control
  this.FacePage.SetValControl("1989","year");
  // Select Male in the Gender option
  return this.FacePage.SelMaleGender(); 
});

Then(/^I can create a new account$/, () => {
  // click the Sing-In button  
  return this.FacePage.ClickSingUp();
});