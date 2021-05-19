package com.steps;

import org.junit.Assert;

import com.pages.ImagePage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class ImagePageSteps extends TestBase {

	ImagePage imagepage = new ImagePage();

	@Given("go to image page and validate the page")
	public void go_to_image_page_and_validate_the_page() {
		imagepage.go_To_Image_Page();
		Assert.assertTrue("Not an Image page", imagepage.is_Image_Page());
	}

	@Then("user should be able to see {int} filters in image page")
	public void user_should_be_able_to_see_filters_in_image_page(Integer int1) {
		Assert.assertTrue("Filters count is not 3", imagepage.filters_Count());
	}

	@Then("user should be able to click on any filter and should be able to see all the options in the dropdown of image page")
	public void user_should_be_able_to_click_on_any_filter_and_should_be_able_to_see_all_the_options_in_the_dropdown_of_image_page() {
		imagepage.verify_Filters();
	}

	@When("user clicks on Sort By in image page")
	public void user_clicks_on_Sort_By_in_image_page() {
		imagepage.click_On_sort_By();
	}

	@Then("there should be {int} options in the dropdown of image page")
	public void there_should_be_options_in_the_dropdown_of_image_page(Integer int1) {
		Assert.assertTrue("Sort By options are not 4", imagepage.verify_Sort_By_Count());
	}

	@Then("user should be able to see all the options in image page")
	public void user_should_be_able_to_see_all_the_options_in_image_page() {
		imagepage.verify_Sort_By_Options();
	}

	@When("user is on image page")
	public void user_is_on_image_page() {
		Assert.assertTrue("Not an Image page", imagepage.is_Image_Page());
	}

	@Then("user should be able to see {int} images")
	public void user_should_be_able_to_see_images(Integer int1) {
		Assert.assertTrue("24 images are not displaying", imagepage.images_Count());
	}

	@When("user clicks on {string} button in image page")
	public void user_clicks_on_button_in_image_page(String string) throws Exception {
		imagepage.click_On_Load_More();
	}

	@Then("user should be able to see another {int} images")
	public void user_should_be_able_to_see_another_images(Integer int1) {
		Assert.assertTrue("48 images are not displaying", imagepage.images_Count_After_Load_More());
	}

	@When("user clicks on first image on image page")
	public void user_clicks_on_first_image_on_image_page() {
		imagepage.click_On_First_Image();
	}

	@Then("user should be navigated to image details page")
	public void user_should_be_navigated_to_image_details_page() {
		Assert.assertTrue("Not a Image Details page", imagepage.verify_Image_Details_Page());
	}

	@When("user refreshes the page")
	public void user_refreshes_the_page() {
		imagepage.refersh_Image_Page();
	}

	@Then("image views count should be increased with {int} count")
	public void image_views_count_should_be_increased_with_count(Integer int1) {
		Assert.assertTrue("Views count is not getting increased", imagepage.verify_Views_Count());
	}

	@When("user clicks on {string} button in image details page")
	public void user_clicks_on_button_in_image_details_page(String string) {
		imagepage.click_on_Create_Story();
	}

	@Then("user should be navigated to create page")
	public void user_should_be_navigated_to_create_page() {
		Assert.assertTrue("Not navigated to create page", imagepage.verify_Create_Page());
	}

	@Then("image should be added to to the page in create page")
	public void image_should_be_added_to_to_the_page_in_create_page() {
		Assert.assertTrue("Image is not added to the page in create page", imagepage.is_Image_added());
	}

}
