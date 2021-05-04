package com.runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature",
	glue = "com.steps", 
	dryRun = false, 
	monochrome = true, 
	strict = true,
	plugin = {"pretty","io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm",
				"html:target"})
public class Runner {
}
