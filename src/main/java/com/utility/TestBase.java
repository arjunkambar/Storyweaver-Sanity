package com.utility;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestBase {
	public static WebDriver driver;
	public static Properties prop;

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
		driver.manage().window().maximize();
		// driver.manage().timeouts().pageLoadTimeout(TestUtil.PageTimeOut,
		// TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.ImpliciteWaitTime, TimeUnit.SECONDS);
		driver.get(prop.getProperty("baseURL"));
	}

	public static void clickable_wait(int time_in_seconds, WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, time_in_seconds);
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}

}
