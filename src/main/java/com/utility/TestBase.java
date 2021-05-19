package com.utility;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.Scenario;

public class TestBase {
	public static WebDriver driver;
	public static Properties prop;
	public static Scenario scenario;
	public static String Title_on_storydetail_page;
	public static String Bookshelf_Name;

	public TestBase() {
		try {
			prop = new Properties();
			FileInputStream f = new FileInputStream("H:/Java/Eclipse/Eclipse Photon"
					+ "/Workspace/StoryweaverSanity/src/main/java/com/configuration/config.properties");
			prop.load(f);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void initialization() {
		String browser = prop.getProperty("browser");
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.silentOutput", "true");
			System.setProperty("webdriver.chrome.driver",
					"H:\\Java\\Eclipse\\" + "Eclipse Photon\\Workspace\\StoryweaverSanity\\Drivers\\chromedriver.exe");
			driver = new ChromeDriver();
		} else if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.driver.geckodriver",
					"H:\\Java\\Eclipse\\" + "Eclipse Photon\\Workspace\\StoryweaverSanity\\Drivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
	}

	public static void enter_baseURL() {
		driver.manage().window().maximize();
		// driver.manage().timeouts().pageLoadTimeout(TestUtil.PageTimeOut,
		// TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.ImpliciteWaitTime, TimeUnit.SECONDS);
		driver.get(prop.getProperty("baseURL"));
		driver.navigate().refresh();
	}

}
