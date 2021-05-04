package com.steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import com.pages.LoginPage;
import com.utility.Screenshot;
import com.utility.TestBase;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.*;


public class LoginPageSteps extends TestBase {
	LoginPage login = new LoginPage();
	Screenshot screenshot = new Screenshot();
	Scenario scenario;

	@Before
	public void setUp(Scenario scenario) {
		this.scenario = scenario;
	}

	@After
	public void teardown() {
		if (scenario.isFailed()) {
			TakesScreenshot screehshot = (TakesScreenshot) driver;
			byte[] data = screehshot.getScreenshotAs(OutputType.BYTES);
			scenario.embed(data, "image/png");
		}
	}

	@Given("Open Chrome browser")
	public void open_chrome_browser() {
		TestBase.initialization();
		scenario.write("Chrome browser is invoked and opened " + prop.getProperty("baseURL"));
	}

	@When("User enters valid  username and password")
	public void user_enters_valid_username_and_password() throws InterruptedException {
		login = new LoginPage();
		login.Login_Page();
		scenario.write("User is entered username as: " + prop.getProperty("username") + " and password as: "
				+ prop.getProperty("password"));
	}

	@Then("^User should be successfully login in storyweaver$")
	public void user_should_be_successfully_login_sw() throws InterruptedException {
		login = new LoginPage();
		login.verify_username();
	}

	@Then("^User should see login successfull notification$")
	public void user_should_see_login_successfull_notification() {
		login = new LoginPage();
		login.notification_Verify_and_Close();
	}
}
