package com.steps;

import org.junit.Assert;
import com.pages.CreatePage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class CreatePageSteps extends TestBase {
	CreatePage createpage = new CreatePage();

	@Given("go to create page and validate the page")
	public void go_to_create_page_and_validate_the_page() {
		createpage.go_to_Create_Page();
		Assert.assertTrue("Not a create page", createpage.is_Create_Page());
	}

	@Then("{string} popup should be displayed in create page")
	public void popup_should_be_displayed_in_create_page(String string) {
		Assert.assertTrue("Create New Book popup is not displaying", createpage.Create_New_Book_Ppopup_is_Displayed());
	}

	@Then("user should be able to select {string} on {string} popup")
	public void user_should_be_able_to_select_on_popup(String string, String string2) throws Exception {
		createpage.enter_Book_Details();
	}

	@Then("user should be able to select {string} button")
	public void user_should_be_able_to_select_button(String string) throws Exception {
		createpage.start_With_Buttons();
	}

	@When("user clicks on {string} button in editor")
	public void user_clicks_on_button_in_editor(String string) {
		createpage.add_Image_to_Page();
	}

	@Then("image drawer should be opened")
	public void image_drawer_should_be_opened() throws Exception {
		Assert.assertTrue("Image Drawer is not displaying", createpage.verify_Image_Drawer());
	}

	@Then("user should be able to add the image")
	public void user_should_be_able_to_add_the_image() {
		createpage.add_Image_to_Page();
	}

	@Then("added image should be displayed in the page")
	public void added_image_should_be_displayed_in_the_page() {
		Assert.assertFalse("Added image is not displaying in the editor", createpage.is_Image_Added_to_Page());
	}

	@When("user clicks on {string} button in editor menu")
	public void user_clicks_on_button_in_editor_menu(String string) throws Exception {
		createpage.click_Publish_Button_in_Editor();
	}

	@Then("{string} popup should be displayed in editor")
	public void popup_should_be_displayed_in_editor(String string) {
		Assert.assertTrue("Edit Your Story Card Image Popup is not displaying",
				createpage.edit_Your_Story_Card_Image_Popup_is_Opened());
	}

	@When("user clicks on {string} button in {string} popup")
	public void user_clicks_on_button_in_popup(String string, String string2) {
		createpage.click_Done_Button();
	}

	@Then("user should see {string}")
	public void user_should_see(String string) {
		Assert.assertTrue("Your Final Story Card Popup is not displaying",
				createpage.your_Final_Story_Card_Popup_is_Opened());
	}

	@When("user clicks on {string} button on {string}")
	public void user_clicks_on_button_on(String string, String string2) {
		createpage.click_Publish_Button();
	}

	@Then("{string} should be opened")
	public void should_be_opened(String string) {
		Assert.assertTrue("Publish Form is not getting opened", createpage.is_Publish_Form_Opened());
	}

	@Then("user should be able to enter {string}")
	public void user_should_be_able_to_enter(String string) throws Exception {
		createpage.Publish_a_Story();
	}

	@When("user clicks on {string} button in {string}")
	public void user_clicks_on_button_in(String string, String string2) {
		createpage.click_Next_Button();
	}

	@Then("{string} popup should be displayed")
	public void popup_should_be_displayed(String string) {
		createpage.get_Story_Title();
		Assert.assertTrue("Preview Book Cover Popup is not getting opened",
				createpage.Preview_Book_Cover_Popup_is_opened());
	}

	@Then("user should be able to publish the story by clicking on {string} button")
	public void user_should_be_able_to_publish_the_story_by_clicking_on_button(String string) {
		createpage.click_Publish_Story_Button();
	}

	@Then("user should be able to see {string} Notification")
	public void user_should_be_able_to_see_Notification(String string) {
		Assert.assertTrue("Published Story notification is not dipplaying", createpage.is_Notification_Displayed());
	}

	@Then("user should be able to see published story in {string}")
	public void user_should_be_able_to_see_published_story_in(String string) throws Exception {
		Assert.assertTrue("Published story: " + createpage.Story_Name + " is taking time to display in New Arrivals",
				createpage.verify_Published_Story_in_NewArrivals());
	}

}
