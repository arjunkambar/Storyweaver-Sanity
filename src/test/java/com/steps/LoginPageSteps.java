package com.steps;

import org.junit.Assert;

import com.pages.LoginPage;
import com.utility.TestBase;
import io.cucumber.java.en.*;

public class LoginPageSteps extends TestBase {
	LoginPage login = new LoginPage();

	@Given("User is already on login page")
	public void open_chrome_browser() {
		Assert.assertTrue("Login popup is not displaying", login.is_Login_Page());
	}

	@When("User enters valid  username and password")
	public void user_enters_valid_username_and_password() throws InterruptedException {
		login.Login_Page();
	}

	@Then("User should be successfully login in storyweaver")
	public void user_should_be_successfully_login_sw() throws InterruptedException {
		Assert.assertFalse("Not signed-in", login.verify_username());
	}

	@Then("User should see login successful notification")
	public void user_should_see_login_successfull_notification() {
		login.notification_Verify_and_Close();
	}
}
