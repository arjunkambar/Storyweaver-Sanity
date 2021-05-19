package com.steps;

import org.junit.Assert;
import com.pages.ReadPage;
import com.pages.ReadalongPage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class ReadalongPageSteps extends TestBase {
	ReadalongPage readalong = new ReadalongPage();
	ReadPage readpage = new ReadPage();

	@Given("go to readalong page and validate the page")
	public void go_to_readalong_page_and_validate_the_page() {
		readalong.go_To_Readalongpage();
		Assert.assertTrue("Not a readalong page", readalong.is_Readalong_Page());
	}

	@Then("user should be able to see five filters in readalong page")
	public void user_should_be_able_to_see_five_filters_in_readalong_page() {
		Assert.assertTrue("Filters count is not equal to 5", readpage.filters_Count());
	}

	@Then("user should be able to click on any filter and should be able to see all the options in the dropdown of readalong page")
	public void user_should_be_able_to_click_on_any_filter_and_should_be_able_to_see_all_the_options_in_the_dropdown_of_readalong_page()
			throws Exception {
		readpage.verify_Filters();
	}

	@When("user clicks on Sort By in readalong page")
	public void user_clicks_on_Sort_By_in_readalong_page() {
		readpage.click_Sort_By();
	}

	@Then("there should be five options in the dropdown of Sort By")
	public void there_should_be_five_options_in_the_dropdown_of_readalong_page() {
		Assert.assertTrue("Sort By options are not equal to 5", readpage.verify_Sort_By_Count());
	}

	@Then("user should be able to see all the options in the dropdown")
	public void user_should_be_able_to_see_all_the_options_in_the_dropdown() {
		readpage.verify_SortBy_Options();
	}

	@Given("user is already on readalong page")
	public void user_is_already_on_readalong_page() {
		Assert.assertTrue("Not a readalong page", readalong.is_Readalong_Page());
	}

	@When("user clicks on first story in readalong page")
	public void user_clicks_on_first_story_in_readalong_page() {
		readpage.select_First_Story_Card();
	}

	@Then("user should be navigated to story details page of readalong story")
	public void user_should_be_navigated_to_story_details_page_of_readalong_story() {
		Assert.assertTrue("Not a Story details page", readpage.is_Story_Details_Page());
	}

	@Then("user should be able to read the readalong story")
	public void user_should_be_able_to_read_the_readalong_story() throws Exception {
		readpage.read_a_Story(ReadPage.Readalong_story_Button);
	}

	@When("user read the readalong story")
	public void user_read_the_readalong_story() throws Exception {
		readpage.read_a_Story(ReadPage.Readalong_story_Button);
	}

	@Then("read count of the readalong story should be increased with one count")
	public void read_count_of_the_readalong_story_should_be_increased_with_one_count() throws Exception {
		Assert.assertTrue("Read count is not getting increased", readpage.verify_Read_Count());
	}
}
