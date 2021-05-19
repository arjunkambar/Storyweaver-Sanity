package com.steps;

import org.junit.Assert;
import com.pages.BookshelfPage;
import com.pages.ReadPage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class BookshelfPageSteps extends TestBase {

	ReadPage readpage = new ReadPage();
	BookshelfPage bookshelf = new BookshelfPage();
	String Bookshelf_Name1 = prop.getProperty("bookshelf_name");

	@When("user clicks on {string} button")
	public void user_clicks_on_button(String Bookshelf) {
		bookshelf.click_On_Bookshelf_Button();
	}

	@Then("user should be able to see {string} popup")
	public void user_should_be_able_to_see_popup(String Bookshelf) {
		Assert.assertTrue("Bookshelf poup is not showing up", bookshelf.verify_Bookshelf_Popup());
	}

	@When("user clicks on any bookshelf in {string} popup")
	public void user_clicks_on_any_bookshelf_in_popup(String string) {
		bookshelf.add_Story_to_Bookshelf();
	}

	@Then("user should be able to see {string} notification")
	public void user_should_be_able_to_see_notification(String string) {
		Assert.assertTrue("Story added to Bookshelf notification is not displaying",
				bookshelf.bookshelf_notification());
	}

	@Then("user should be able to see {string} button")
	public void user_should_be_able_to_see_button(String string) {
		Assert.assertTrue("Delete from My Bookshelf button is not displaying",
				bookshelf.verify_Delete_from_My_Bookshelf_button());
	}

	@Then("user should be able to see added story in the respective bookshelf under Bookshelf tab")
	public void user_should_be_able_to_see_added_story_in_the_respective_bookshelf_under_Bookshelf_tab() {
		bookshelf.go_to_bookshelf_list(Bookshelf_Name);
		Assert.assertTrue("Added story is not displaying in Bookshelf list",
				bookshelf.verify_Story_in_Bookshelf_List());
	}

	@When("user enters bookshelf name in {string} textbox")
	public void user_enters_bookshelf_name_in_textbox(String string) {
		bookshelf.enter_Bookshelf_Name();
	}

	@And("clicks on Add button")
	public void clicks_on_Add_button() {
		bookshelf.click_On_Add_Button();
	}

	@Then("user should be able to see added story in the newly created bookshelf under Bookshelf tab")
	public void user_should_be_able_to_see_added_story_in_the_newly_created_bookshelf_under_Bookshelf_tab() {
		bookshelf.go_to_bookshelf_list(Bookshelf_Name1);
		Assert.assertTrue("Added story is not displaying in the newly created Bookshelf list",
				bookshelf.verify_Story_in_Bookshelf_List());
	}

	@When("user deletes added story from the bookshelf list")
	public void uuser_deletes_the_added_story_from_the_bookshelf_list() throws Exception {
		bookshelf.delete_Story_from_Bookshelf_Lists();
	}

	@Then("user should not see the added story in the respective bookshelf list")
	public void user_should_not_see_the_added_story_in_the_respective_bookshelf_list() {
		Assert.assertFalse("Deleted story is still displaying in Bookshelf list",
				bookshelf.verify_Story_in_Bookshelf_List());
	}
}
