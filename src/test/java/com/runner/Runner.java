package com.runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"Feature"},
	glue = {"com.steps","com.utility"},
	dryRun = false, 
	monochrome = true, 
	strict = true,
	tags = {"@tag1 or @tag2 or @tag3 or @tag4 or @tag5 or @tag6 or @tag7"},
	plugin = {"pretty","io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm",
				"html:target"})
public class Runner {
}
 