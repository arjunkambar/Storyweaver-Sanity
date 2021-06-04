package com.utility;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Screenshot extends TestBase{
	
	@Before
	public void setUp(Scenario scenario) {
		TestBase.scenario = scenario;
	}

	@SuppressWarnings("deprecation")
	@After
	public void teardown() {
		if (scenario.isFailed()) {
			TakesScreenshot screehshot = (TakesScreenshot) driver;
			byte[] data = screehshot.getScreenshotAs(OutputType.BYTES);
			scenario.embed(data,"Image/png");
		}
	}


}
