@tag4
Feature: Storyweaver Readalong Page 

Scenario: Test readalong page to verify the filters 
	Given go to readalong page and validate the page 
	Then user should be able to see five filters in readalong page 
	Then user should be able to click on any filter and should be able to see all the options in the dropdown of readalong page 
	
Scenario: Test readalong page to verify the Sort By 
	When  user clicks on Sort By in readalong page 
	Then  there should be five options in the dropdown of Sort By 
	Then  user should be able to see all the options in the dropdown 
	
Scenario: Test readalong page for story reader 
	Given  user is already on readalong page 
	When  user clicks on first story in readalong page 
	Then  user should be navigated to story details page of readalong story 
	Then  user should be able to read the readalong story 
	
	
Scenario: Test readalong page for story's read count 
	When  user read the readalong story 
	Then  read count of the readalong story should be increased with one count 