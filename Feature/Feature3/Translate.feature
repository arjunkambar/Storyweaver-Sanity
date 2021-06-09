@tag9
Feature: Storyweaver Translate page

Scenario: Go to translate page and validate
	Given go to translate page
	Then validate translate page
	Then user should be able to see "From and To" languages dropdowns
	Then user should be able to see "24" stories
	
Scenario: Verify stories in translate page	
	When user clicks on "View All Translation Suggestions" button
	Then user should be able to see "Load More" button
	When user clicks on "Load More" button
	Then user should be able to see another 24 stories
	
Scenario: Verify filters in translate page
	When user clicks on any filter
	Then user should be able
		
	
	
	