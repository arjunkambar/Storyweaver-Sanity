Feature: Storyweaver login page 

Scenario: Test Login page with valid credentials 
	Given Open Chrome browser 
	When User enters valid  username and password 
	Then User should be successfully login in storyweaver
	And User should see login successfull notification
	
 