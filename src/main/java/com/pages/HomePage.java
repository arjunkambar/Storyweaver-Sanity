package com.pages;

import java.util.List;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.utility.TestBase;

public class HomePage extends TestBase {

	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//div[@class='pb-site-header__nav-primary']//descendant::a[2]//span")
	static WebElement Signin_Button;
	@FindBy(xpath = "//div[@class='pb-site-footer-notice']")
	static WebElement Footer_Notice;

	public boolean is_Home_Page() {
		return driver.getCurrentUrl().equals(TestBase.prop.getProperty("baseURL"));
	}

	public static boolean is_Guest_User() {
		String text = Signin_Button.getText();
		return (text.equals("Sign Up/Log In") && Footer_Notice.isDisplayed());
	}

	public static boolean is_Guest_User_Footer_Notice() {
		return Footer_Notice.isDisplayed();
	}

	public static void clickable_wait(int time_in_seconds, WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, time_in_seconds);
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}

	public static void Visibility_wait(WebDriver driver, WebElement Element, int time_in_seconds) {
		WebDriverWait wait = new WebDriverWait(driver, time_in_seconds);
		wait.until(ExpectedConditions.visibilityOf(Element));
	}

	public static void scroll_Down(int Vertical_Pexel) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0," + Vertical_Pexel + ")");
	}

	public static void scroll_Into_View(WebElement Element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true);", Element);
	}

	public static void scroll_Up(int Vertical_Pixel) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0," + -Vertical_Pixel + ")");
	}

	public static void mouse_Hover(WebElement Element) {
		Actions actions = new Actions(driver);
		actions.moveToElement(Element).build().perform();
	}

	public static void invisibilty_Wait(List<WebElement> Elements) throws InterruptedException {
		int Count = 0;
		while (Elements.size() != 0 && Count < 3) {
			Thread.sleep(1000);
			Count++;
		}
	}
}
