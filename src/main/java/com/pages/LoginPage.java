package com.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class LoginPage extends TestBase {
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//div[@class='pb-site-header__nav-primary']//descendant::a[2]//span")
	WebElement Signin_Button;
	@FindBy(name = "username")
	WebElement Email;
	@FindBy(xpath = "//button[@type='submit']")
	WebElement button;
	@FindBy(name = "password")
	WebElement password;
	@FindBy(xpath = "//button[(text()='Log In')]")
	WebElement submit;
	@FindBy(xpath = "//div[@class='pb-modal__bounds']//div[@title='Close']")
	WebElement login_Poup_close;
	@FindBy(xpath = "//p[text()=\"Login Successful\"]")
	WebElement Successful_Notification;
	@FindBy(xpath = "//div[@class='pb-slim-notification__actions']//div[@title='Close']")
	WebElement notification_close;
	@FindBy(className = "pb-loader pb-loader--m")
	WebElement Loader;

	public void Login_Page() throws InterruptedException {
		TestBase.clickable_wait(10, Signin_Button);
		Signin_Button.click();
		Email.sendKeys(TestBase.prop.getProperty("username"));
		button.click();
		password.sendKeys(TestBase.prop.getProperty("password"));
		submit.click();
		login_Poup_close.click();
	}

	public void notification_Verify_and_Close() {
		boolean notification = Successful_Notification.isDisplayed();
		Assert.assertTrue(notification);
		notification_close.click();
	}

	public void verify_username() throws InterruptedException {
		Thread.sleep(2000);
		String title = Signin_Button.getText();
		System.out.println(title);
		boolean signin = title.equals("Sign Up/Log In");
		Assert.assertFalse("Not logged-in", signin);
	}

	/*
	 * public void verify_footer_text() { WebElement text = footer
	 * .findElement(By.xpath("//div[text()='By continuing to " +
	 * "use our website, you agree to our']")); boolean a = text.isDisplayed();
	 * Assert.assertTrue(a); }
	 * 
	 * public void verify_footer_link1() { WebElement link1 =
	 * footer.findElement(By.xpath("//a[@href='/terms_and_conditions']")); boolean
	 * display = link1.isDisplayed(); Assert.assertTrue(display); String a =
	 * Keys.chord(Keys.CONTROL, Keys.ENTER); link1.sendKeys(a); }
	 * 
	 * public void verify_footer_link2() { WebElement link2 =
	 * footer.findElement(By.xpath("//a[@href='/privacy_policy']")); boolean display
	 * = link2.isDisplayed(); Assert.assertTrue(display); String a =
	 * Keys.chord(Keys.CONTROL, Keys.ENTER); link2.sendKeys(a); }
	 * 
	 * public void click_on_Agree_button() { WebElement button =
	 * footer.findElement(By.xpath("//a[text()='Agree']")); boolean a =
	 * button.isDisplayed(); Assert.assertTrue(a); button.click(); }
	 */
}
