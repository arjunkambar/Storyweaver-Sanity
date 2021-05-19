package com.pages;

import java.util.List;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class BookshelfPage extends TestBase {

	String Bookshelf_Name1 = prop.getProperty("bookshelf_name");

	public BookshelfPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(className = "pb-dropdown__contents")
	WebElement Non_logged_in_Popup;
	@FindBy(xpath = "//a[text()='My Bookshelf']")
	WebElement Bookshelf_Button;
	@FindBy(className = "pb-modal__content-wrapper")
	WebElement Add_Book_to_Bookshelf_Popup;
	@FindBy(xpath = "//div[@class='pb-select-bookshelf__bookshelf-el']//p")
	WebElement Bookshelf;
	@FindBy(className = "pb-select-bookshelf__create-message--danger")
	WebElement Danger_Message;
	@FindBy(xpath = "//p[text()='Yay! This book has been added to your bookshelf!']")
	WebElement Bookshelf_Succesful_notification;
	@FindBy(xpath = "//div[@class='pb-slim-notification__actions']//div[@title='Close']")
	WebElement Notification_Close;
	@FindBy(xpath = "//div[@class='pb-modal__bounds']//div[@title='Close']")
	WebElement Close_Bookshelf_Popup;
	@FindBy(xpath = "//a[text()='Delete from My Bookshelf']")
	WebElement Delete_from_My_Bookshelf;
	@FindBy(xpath = "//div[@class='pb-site-header__nav-primary']//descendant::a[2]//span")
	WebElement Signin_Button;
	@FindBys(@FindBy(xpath = "//div[@class='pb-profile__lists']//h3[@class='pb-reading-list-card__title']"))
	List<WebElement> Bookshelf_Lists;
	@FindBy(xpath = "//a[text()='Bookshelf']")
	WebElement Bookshelf_in_Dropdown;
	@FindBy(className = "pb-reading-list__wrapper")
	WebElement Bookshelf_Page;
	@FindBys(@FindBy(xpath = "//h3[@class='pb-book-card__title']"))
	List<WebElement> Stories_in_bookshelf;
	@FindBy(xpath = "//div[@title='Pen']")
	WebElement Edit_button;
	@FindBys(@FindBy(xpath = "//span[@class='pb-reading-list-entry__index']"))
	List<WebElement> Delete_Story_from_Bookshelf;
	@FindBys(@FindBy(xpath = "//a[text()='Delete']"))
	List<WebElement> Delete_Button;
	@FindBy(xpath = "//a[text()='Yes']")
	WebElement Delete_Story_Popup;
	@FindBy(xpath = "//a[text()='Save changes']")
	WebElement Save_Button;
	@FindBy(xpath = "//div[@class='pb-book__content']//h1")
	WebElement Title_On_StoryDetails_Page;
	@FindBys(@FindBy(className = "pb-loader pb-loader--m pb-button__icon-left"))
	List<WebElement> Save_Button_Loader;
	@FindBy(xpath = "//div[@class='pb-modal__content']//input")
	WebElement Enter_bookshelf_Name;
	@FindBy(xpath = "//div[text()='Add']")
	WebElement Add_Button;

	public void click_On_Bookshelf_Button() {
		Bookshelf_Button.click();
		if (HomePage.is_Guest_User() == true) {
			Non_logged_in_Popup.isDisplayed();
			System.out.println("Not looged-in, login to add stories to bookshelf");
		}
	}

	public boolean verify_Bookshelf_Popup() {
		HomePage.Visibility_wait(driver, Add_Book_to_Bookshelf_Popup, 10);
		return Add_Book_to_Bookshelf_Popup.isDisplayed();
	}

	public void add_Story_to_Bookshelf() {
		Bookshelf_Name = Bookshelf.getText();
		// System.out.println(Bookshelf_Name);
		Bookshelf.click();
	}

	public boolean bookshelf_notification() {
		HomePage.Visibility_wait(driver, Bookshelf_Succesful_notification, 10);
		return Bookshelf_Succesful_notification.isDisplayed();
	}

	public boolean verify_Delete_from_My_Bookshelf_button() {
		Notification_Close.click();
		return Delete_from_My_Bookshelf.isDisplayed();
	}

	public void go_to_bookshelf_list(String Name_of_Bookshelf) {
		Signin_Button.click();
		Bookshelf_in_Dropdown.click();
		// System.out.println(Bookshelf_Lists.size());
		// System.out.println(Bookshelf_Name);
		for (int i = 0; i < Bookshelf_Lists.size(); i++) {
			if (Bookshelf_Lists.get(i).getText().equalsIgnoreCase(Name_of_Bookshelf)) {
				HomePage.scroll_Into_View(Bookshelf_Lists.get(i));
				Actions actions = new Actions(driver);
				actions.moveToElement(Bookshelf_Lists.get(i)).click().perform();
			}
		}
	}

	public void delete_Story_from_Bookshelf_Lists() throws InterruptedException {
		Edit_button.click();
		int count = Delete_Story_from_Bookshelf.size();
		// System.out.println(count);
		for (int i = 0; i < count; i++) {
			if (i == count - 1) {
				HomePage.scroll_Into_View(Delete_Story_from_Bookshelf.get(i));
				Delete_Button.get(i).click();
				HomePage.clickable_wait(5, Delete_Story_Popup);
			}
		}
		Delete_Story_Popup.click();
		Save_Button.click();
		// Thread.sleep(3000);
		int count1 = 0;
		while (Save_Button_Loader.size() != 0 && count1 < 10) {
			Thread.sleep(1000);
			count++;
		}
	}

	public boolean verify_Story_in_Bookshelf_List() {
		HomePage.Visibility_wait(driver, Bookshelf_Page, 10);
		String content = Bookshelf_Page.getText();
		return content.contains(Title_on_storydetail_page);
	}

	public boolean danger_Message() {
		return Danger_Message.isDisplayed();
	}

	public boolean danger_Message1() {
		return Danger_Message.getText().equals("Sorry! You have reached the limit of 10 bookshelves which "
				+ "can be created per user. Please delete an existing bookshelf.");
	}

	public void enter_Bookshelf_Name() {
		Enter_bookshelf_Name.sendKeys(Bookshelf_Name1);
	}

	public void click_On_Add_Button() {
		Add_Button.click();
		try {
			if (danger_Message() == true) {
				System.out.println("A bookshelf with this name already " + "exists. Please create a new bookshelf.");
			} else if (danger_Message1() == true) {
				System.out.println("Sorry! You have reached the limit of 10 bookshelves which "
						+ "can be created per user. Please delete an existing bookshelf.");
			}
		} catch (Exception e) {
		}
	}
}
