@tag5 
Feature: Storyweaver bookshelf 

Scenario: Open bookshelf popup and validate 
	When user clicks on "My Bookshelf" button 
	Then user should be able to see "Add this book to your bookshelf!" popup 
	
Scenario: Add story to bookshelf 
	When user clicks on any bookshelf in "Add this book to your bookshelf!" popup 
	Then user should be able to see "Yay! This book has been added to your bookshelf!" notification 
	Then user should be able to see "Delete from My Bookshelf" button 
	Then user should be able to see added story in the respective bookshelf under Bookshelf tab 
	
	#Scenario: Create a new bookshelf
	#		When user enters bookshelf name in "Find or create new bookshelf" textbox
	#		And clicks on Add button
	#		Then user should be able to see added story in the newly created bookshelf under Bookshelf tab	
	
Scenario: Delete story from the bookshelf list 
	When user deletes added story from the bookshelf list 
	Then user should not see the added story in the respective bookshelf list 
	
	
	
	
	
	
	
	
	
	
	
