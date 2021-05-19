package com.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class OfflinePage extends TestBase {
	ReadPage readpage = new ReadPage();

	public OfflinePage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(className = "pb-dropdown__contents")
	WebElement Non_logged_in_Popup;
	@FindBy(xpath = "//div[@class='pb-book__action-main-container']/ul")
	WebElement Save_to_OL_Button;
	@FindBy(xpath = "//div[@title='Delete from offline library']")
	WebElement Delete_from_OL;
	@FindBy(className = "pb-slim-notification__content")
	WebElement Notification;
	@FindBy(xpath = "//div[@title='Close']")
	WebElement Close_Notification;
	@FindBy(xpath = "//div[@title='Offline Library']")
	WebElement Offline_Library;
	@FindBys(@FindBy(xpath = "//div[@class='pb-tabs__tabs']//a"))
	List<WebElement> Tabs_Count_in_OL;
	@FindBy(className = "pb-tabs__tabs")
	WebElement Tabs_in_OL;
	@FindBy(xpath = "//a[text()='Manage Stories']")
	WebElement Click_ManageStory;
	@FindBy(xpath = "//label[text()='Select to delete']")
	WebElement Select_Story_to_delete;
	@FindBy(xpath = "//div[@title='Delete']")
	WebElement Delete_Story;
	@FindBy(xpath = "//div[@class='pb-columnizer__column']/a[text()='Delete']")
	WebElement Delete_PopUp;
	@FindBy(className = "grid__container")
	WebElement Content_On_Read_Tab;

	public boolean go_To_Story_Details_Page() {
		readpage.readpage();
		readpage.select_First_Story_Card();
		return readpage.is_Story_Details_Page();
	}

	public void click_On_Save_to_OL() {
		Save_to_OL_Button.click();
		if (HomePage.is_Guest_User() == true) {
			Non_logged_in_Popup.isDisplayed();
			System.out.println("Not looged-in, login to save stories to Offline library");
		}
		HomePage.Visibility_wait(driver, Delete_from_OL, 25);
	}

	public boolean Delete_from_OL_button() {
		return Delete_from_OL.isDisplayed();
	}

	public boolean notification() {
		Notification.isDisplayed();
		Close_Notification.click();
		return true;
	}

	public void click_on_OL() {
		Offline_Library.click();
	}

	public boolean verify_Offline_Library_Page() {
		String url = driver.getCurrentUrl();
		return url.equals(prop.getProperty("baseURL") + "offline/read");
	}

	public boolean verify_Tabs_In_OL() {
		// int Tabs_Count = Tabs_Count_in_OL.size();
		String Tabs = Tabs_in_OL.getText();
		return Tabs.contains("ReadReading ProgrammeTranslate");
	}

	public boolean verify_Story_in_offline_library() {
		String Content = Content_On_Read_Tab.getText();
		return Content.contains(Title_on_storydetail_page);
	}

	public void delete_Story_From_OL() {
		Click_ManageStory.click();
		Select_Story_to_delete.click();
		Delete_Story.click();
		Delete_PopUp.click();
	}
}
