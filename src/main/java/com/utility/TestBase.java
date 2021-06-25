package com.utility;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import io.cucumber.java.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase {
	public static WebDriver driver;
	public static Properties prop;
	public static Scenario scenario;
	public static String Title_on_storydetail_page;
	public static String Bookshelf_Name;

	public TestBase() {
		try {
			prop = new Properties();
			String path = System.getProperty("user.dir");
			FileInputStream f = new FileInputStream(path + "/src/main/java/com/configuration/config.properties");
			prop.load(f);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void initialization() {
		String browser = prop.getProperty("browser");
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.silentOutput", "true");
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.chrome.silentOutput", "true");
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
		}
	}

	public static void enter_baseURL() {
		driver.manage().window().maximize();
		// driver.manage().timeouts().pageLoadTimeout(TestUtil.PageTimeOut,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.ImpliciteWaitTime, TimeUnit.SECONDS);
		driver.get(prop.getProperty("baseURL"));
		driver.navigate().refresh();
	}

}
