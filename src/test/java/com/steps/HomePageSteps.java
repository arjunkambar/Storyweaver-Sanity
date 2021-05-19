package com.steps;

import org.junit.Assert;
import com.pages.HomePage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class HomePageSteps extends TestBase {

	HomePage homepage;

	@Given("open chrome browser")
	public void open_chrome_browser() {
		TestBase.initialization();
	}

	@When("user enters the url")
	public void user_enters_the_url() {
		TestBase.enter_baseURL();
	}

	@Then("user should be navigated to the home page")
	public void user_should_be_navigated_to_the_home_page() {
		homepage = new HomePage();
		Assert.assertTrue("Not a home page", homepage.is_Home_Page());
	}

	@Then("user should be able to see the footer notice")
	public void user_should_be_able_to_see_the_footer_notice() {
		homepage = new HomePage();
		Assert.assertTrue("Footer notice/Sign Up is not displaying", homepage.is_Guest_User());
	}
}
