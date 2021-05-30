@tag8
Feature: Storyweaver Create page

Scenario: Go to create page and validate
	Given go to create page and validate the page
	Then "Create New Book" popup should be displayed in create page
	Then user should be able to select "Langauge,Level and Orientation" on "Create New Book" popup
	Then user should be able to select "start with images/start with words" button
	
Scenario: Add images to pages
	When user clicks on "add an image" button in editor
	Then image drawer should be opened
	Then user should be able to add the image 
	Then added image should be displayed in the page
	
Scenario: Publish the story
	When user clicks on "publish" button in editor menu
	Then "Edit your Story Card image" popup should be displayed in editor
	When user clicks on "Done" button in "Edit your Story Card image" popup
	Then user should see "Your Final Story Card"
	When user clicks on "publish" button on "Story Card"
	Then "Publish Form" should be opened
	Then user should be able to enter "Story Title,Synopsis,Category and Copyright Year"
	When user clicks on "next" button in "Publish Form"
	Then "Preview the book cover" popup should be displayed
	Then user should be able to publish the story by clicking on "publish" button
	Then user should be able to see "Your Story has been published" Notification
	Then user should be able to see published story in "New Arrivals"
	
	

	
	
	
	
		