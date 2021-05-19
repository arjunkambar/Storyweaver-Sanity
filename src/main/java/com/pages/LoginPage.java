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
	@FindBy(className = "pb-modal__bounds")
	WebElement Login_Popup;
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

	public boolean is_Login_Page() {
		HomePage.clickable_wait(20, Signin_Button);
		Signin_Button.click();
		return Login_Popup.isDisplayed();
	}

	public void Login_Page() throws InterruptedException {
		Email.sendKeys(TestBase.prop.getProperty("username"));
		button.click();
		password.sendKeys(TestBase.prop.getProperty("password"));
		submit.click();
		login_Poup_close.click();
	}

	public void notification_Verify_and_Close() {
		HomePage.Visibility_wait(driver, Successful_Notification, 5);
		boolean notification = Successful_Notification.isDisplayed();
		Assert.assertTrue("Login Successful notification is not displaying", notification);
		notification_close.click();
	}

	public boolean verify_username() throws InterruptedException {
		Thread.sleep(2000);
		return HomePage.is_Guest_User();
	}
}
