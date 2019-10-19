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
  And the title is "Sign up for Facebook | Facebook"
  When I fill all required account’s information
  Then I can create a new account