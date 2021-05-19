package com.steps;

import org.junit.Assert;
import com.pages.ReadPage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class ReadPageSteps extends TestBase {
	ReadPage readpage = new ReadPage();

	@Given("go to readpage and validate the page")
	public void user_is_already_on_readpage() {
		readpage.readpage();
		Assert.assertTrue("Not a Readpage", readpage.is_Read_Page());
	}

	@Then("user should be able to see five filters")
	public void user_should_be_able_to_see_filters() {
		Assert.assertTrue("Filters count is not equal to 5", readpage.filters_Count());
	}

	@Then("user should be able to click on any filter and should be able to see all the options in the dropdown")
	public void user_should_be_able_to_see_the_options() throws Exception {
		readpage.verify_Filters();
	}

	@When("user clicks on Sort By")
	public void user_clicks_on_Sort_By() {
		readpage.click_Sort_By();
	}

	@Then("there should be five options in the dropdown")
	public void there_should_be_options_in_the_dropdown() {
		Assert.assertTrue("Sort By options are not equal to 5", readpage.verify_Sort_By_Count());
	}

	@Then("user should be able to see all the options")
	public void user_should_be_able_to_see_all_the_options() {
		readpage.verify_SortBy_Options();
	}

	@Given("user is already on readpage")
	public void go_to_readpage_and_validate_the_readpage() {
		Assert.assertTrue("Not a Readpage", readpage.is_Read_Page());
	}

	@When("user clicks on first story in readpage")
	public void user_clicks_on_first_story_in_readpage() {
		readpage.select_First_Story_Card();
	}

	@Then("user should be navigated to story details page")
	public void user_should_be_navigated_to_story_details_page() {
		Assert.assertTrue("Not a Story details page", readpage.is_Story_Details_Page());
	}

	@Then("user should be able to read the story")
	public void user_should_be_able_to_read_the_story() throws Exception {
		readpage.read_a_Story(ReadPage.Read_Story_Button);
	}

	@When("user read the story")
	public void user_read_the_story() throws Exception {
		readpage.read_a_Story(ReadPage.Read_Story_Button);
	}

	@Then("read count of the story should be increased with one count")
	public void read_count_of_the_story_should_be_increased_with_one_count() throws Exception {
		Assert.assertTrue("Read count is not getting increased", readpage.verify_Read_Count());
	}

}
