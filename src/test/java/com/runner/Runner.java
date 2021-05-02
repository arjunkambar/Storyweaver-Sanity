package com.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", 
	glue = "com.steps", 
	dryRun = false, 
	monochrome = true, 
	format = { "pretty",
		"html:target" })
public class Runner {
}
