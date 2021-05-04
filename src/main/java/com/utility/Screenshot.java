package com.utility;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;



public class Screenshot extends TestBase{
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
			scenario.embed(data,"Image/png");
		}
	}
}
