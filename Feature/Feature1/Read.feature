@tag3
Feature: Storyweaver Read page 


Scenario: Test readpage to verify the filters 
	Given go to readpage and validate the page 
	Then user should be able to see five filters 
	Then user should be able to click on any filter and should be able to see all the options in the dropdown 
	
Scenario: Test readpage to verify the Sort By 
	When  user clicks on Sort By 
	Then  there should be five options in the dropdown 
	Then  user should be able to see all the options 
	
Scenario: Test readpage for story reader 
	Given  user is already on readpage 
	When  user clicks on first story in readpage 
	Then  user should be navigated to story details page 
	Then  user should be able to read the story 
	
	
Scenario: Test readpage for story's read count 
	When  user read the story 
	Then  read count of the story should be increased with one count 
	
	
	
	
	
	
	
	
	
	
