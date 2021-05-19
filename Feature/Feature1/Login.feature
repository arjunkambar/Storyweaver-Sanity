@tag2
Feature: Storyweaver login page 

Scenario: Test Login page with valid credentials 
	Given User is already on login page 
	When User enters valid  username and password 
	Then User should be successfully login in storyweaver 
	Then User should see login successful notification 
	
 