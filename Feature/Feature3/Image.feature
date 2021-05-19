@tag7
Feature: Storyweaver image page

Scenario: Test image page to verify filters 
	Given go to image page and validate the page
	Then user should be able to see 3 filters in image page
	Then user should be able to click on any filter and should be able to see all the options in the dropdown of image page
	
Scenario: Test image page to verify Sort By
	When  user clicks on Sort By in image page
	Then  there should be 4 options in the dropdown of image page
	Then  user should be able to see all the options in image page
	
Scenario: Test image page to verify images
	When user is on image page
	Then user should be able to see 24 images
	When user clicks on "Load More" button in image page
	Then user should be able to see another 24 images
	
Scenario: Test image details page
	When user clicks on first image on image page
	Then user should be navigated to image details page
	When user refreshes the page 
	Then image views count should be increased with 1 count
	
Scenario: Test create story button on image details page
	When user clicks on "Create Story" button in image details page
	Then user should be navigated to create page 
	Then image should be added to to the page in create page
	
	
	
	
		
	
		