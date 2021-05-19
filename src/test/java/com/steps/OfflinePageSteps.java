package com.steps;

import org.junit.Assert;
import com.pages.OfflinePage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class OfflinePageSteps extends TestBase {
	OfflinePage offlinepage = new OfflinePage();

	@Given("go to story details page")
	public void go_to_story_details_page() {
		Assert.assertTrue("Not a story details page", offlinepage.go_To_Story_Details_Page());
	}

	@When("user clicks on Save to Offline Library button")
	public void user_clicks_on_Save_to_Offline_Library_button() {
		offlinepage.click_On_Save_to_OL();
	}

	@Then("user should be able to see This story has been saved in your Offline Library notification")
	public void user_should_be_able_to_see_This_story_has_been_saved_in_your_Offline_Library_notification() {
		Assert.assertTrue("This story has been saved in your Offline Library, notification is not displaying ",
				offlinepage.notification());
	}

	@Then("user should be able to see Delete from Offline Library button")
	public void user_should_see_Delete_from_Offline_Library_button() {
		Assert.assertTrue("Delete from Offline Library button is not displaying", offlinepage.Delete_from_OL_button());
	}

	@When("user clicks on Offline Library button")
	public void user_clicks_on_Offline_Library_button() {
		offlinepage.click_on_OL();
	}

	@Then("user should be navigated to Offline Library page")
	public void user_should_be_navigated_to_page() {
		Assert.assertTrue("Not a Offline Library page", offlinepage.verify_Offline_Library_Page());
	}

	@Then("user should be able to see Read,Reading Programme and Translate tabs")
	public void user_should_be_able_to_see_tabs() {
		Assert.assertTrue("Read,RP and Translate Tabs are not displaying", offlinepage.verify_Tabs_In_OL());
	}

	@Then("user should be able to see saved story in {string} tab")
	public void user_should_be_able_to_see_saved_story_in_tab(String string) {
		Assert.assertTrue("Saved story is not displaying in OL", offlinepage.verify_Story_in_offline_library());
	}

	@When("user deletes saved story from {string}")
	public void user_deletes_saved_story_from(String string) {
		offlinepage.delete_Story_From_OL();
	}

	@Then("user should not see saved story in {string} tab")
	public void user_should_not_see_saved_story_in_tab(String string) {
		Assert.assertFalse("Deleted story is still displaying in OL", offlinepage.verify_Story_in_offline_library());
	}
}
