#
# All Rights Reserved.
#

#
 # @Miguel Angel Lozano
 # @file example.feature
 # @description: file with the features to execute the test
#

Feature: Facebook's Sing Up

@Example
Scenario: Sing Up
  Given I open Facebook's page
  Then the title is "Facebook - Entrar o registrarse"
  Then I write the text "Juanito Alimaña" in the first name form
  Then I write the text "Lavoe" in the last name form
  Then I write the text "migan703@gmail.com" in the email form
  Then I write the text "Pas_123456" in the password form
  Then I select the month "Aug" in the month control
  Then I select the day "21" in the day control
  Then I select the year "1989" in the year control
  Then I select Male in the Gender option
  Then I click the "Sing Up" button