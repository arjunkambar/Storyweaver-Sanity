@tag6
Feature: Storyweaver Offline library page 

Scenario: Add story to offline library 
	Given go to story details page 
	When user clicks on Save to Offline Library button 
	Then user should be able to see This story has been saved in your Offline Library notification 
	Then user should be able to see Delete from Offline Library button 
	
Scenario: Verify saved story in offline library 
	When user clicks on Offline Library button 
	Then user should be navigated to Offline Library page 
	Then user should be able to see Read,Reading Programme and Translate tabs 
	Then user should be able to see saved story in "Read" tab 
	
Scenario: Delete story from Offline Library
	When user deletes saved story from "Offline Library"
	Then user should not see saved story in "Read" tab	
	
	
