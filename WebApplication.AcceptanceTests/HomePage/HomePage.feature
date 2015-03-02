@browser
Feature: HomePage
	In order to avoid missconfiguration
	As a DevOps
	I want to be able to see application up and running

Scenario: About Page displays angularjs version number
	Given I am in '/#/about' page
	Then I should see: 'app version 1.0.1'
	And I should see: 'api version 1.0.0'
