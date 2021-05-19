@tag1
Feature: Storyweaver Home page 

Scenario: Open browser and validate home page
	Given open chrome browser
	When user enters the url
	Then user should be navigated to the home page
	Then user should be able to see the footer notice
	
	