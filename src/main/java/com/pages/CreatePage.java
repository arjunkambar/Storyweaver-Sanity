package com.pages;

import java.util.List;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class CreatePage extends TestBase {
	String Language = prop.getProperty("language");
	String Level = prop.getProperty("level");
	String Orientation = prop.getProperty("Orientation");
	public String Story_Name;

	public CreatePage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[text()='Create']")
	WebElement Create;
	@FindBy(xpath = "//span[text()='Create']//ancestor::li")
	WebElement Create_Button;
	@FindBy(className = "pb-auth-modal__content")
	WebElement Login_Popup;
	@FindBy(xpath = "//div[@class='modal-content']/div[@class='modal-body modal-body-app']")
	WebElement Create_New_Book_Popup;
	@FindBy(id = "story_language_id")
	WebElement Select_Langauge;
	@FindBys(@FindBy(xpath = "//select[@id='story_language_id']//option"))
	List<WebElement> Langauges_List;
	@FindBy(name = "story[title]")
	WebElement Book_Title;
	@FindBy(xpath = "//div[@id='varnam_ime_suggestions']//li")
	WebElement Suggestion;
	@FindBys(@FindBy(xpath = "//div[@class='control-group radio_buttons " + "required story_reading_level']//strong"))
	List<WebElement> Reading_Level;
	@FindBys(@FindBy(xpath = "//div[@class='control-group radio_buttons " + "required story_orientation']//strong"))
	List<WebElement> Book_Orientation;
	@FindBy(xpath = "//input[@value='start with images']")
	WebElement Start_with_images_Button;
	@FindBy(xpath = "//input[@value='start with words']")
	WebElement Start_with_words_Button;
	@FindBy(className = "illustration_drawer_img")
	WebElement Select_Image;
	@FindBy(xpath = "//div[@class='img-card-action-block dead-center']" + "/div[text()='add to current page']")
	WebElement Add_to_Page;
	@FindBy(css = "i[class='cropControlSave']")
	WebElement Save_Image;
	@FindBy(xpath = "//div[@class='add-btn-overlay']//span")
	WebElement Add_Image;
	@FindBy(xpath = "//div[@class='page-list']//div[@class='covers']")
	WebElement Select_front_Cover_Page;
	@FindBy(className = "image-drawer-content")
	WebElement Image_Drawer;
	@FindBy(xpath = "//div[@class='modal-body modal-body-app storycard-modal']//h1")
	WebElement Edit_Your_Story_Card_Image_Popup;
	@FindBy(xpath = "//a[@title='Your story will go live now']")
	WebElement Publish_Button_in_Editor;
	@FindBys(@FindBy(xpath = "//div[@class='blockUI blockOverlay']"))
	List<WebElement> Loader;
	@FindBy(id = "storycard-img-edit-done")
	WebElement Done_Button;
	@FindBy(xpath = "//button[@id='publish-book']")
	WebElement Publish_Button;
	@FindBy(xpath = "//div[@class='heading-title']//span")
	WebElement Publish_Form;
	@FindBy(id = "story_synopsis")
	WebElement Synopsis;
	@FindBy(xpath = "//button[@data-toggle='dropdown']")
	WebElement Category_Dropdown;
	@FindBy(xpath = "//label[@class='checkbox']")
	WebElement Select_Options_in_Dropdown;
	@FindBy(id = "story_english_title")
	WebElement English_Title;
	@FindBy(xpath = "//button[text()='next']")
	WebElement Next_Button;
	@FindBy(xpath = "//div[@id='review_book_covers']//div[@class='heading-title']")
	WebElement Preview_Book_Cover_Popup;
	@FindBy(xpath = "//div[@id='content-section']//p[1]")
	WebElement Story_Title;
	@FindBy(xpath = "//button[text()='publish']")
	WebElement Publish_Story;
	@FindBy(xpath = "//p[@class='pb-slim-notification__content']")
	WebElement Notification;
	@FindBy(xpath = "//div[@title='Close']")
	WebElement Close_Notification;
	@FindBy(partialLinkText = "New Arrivals")
	WebElement New_Arrivals;
	@FindBy(xpath = "//div[@class='pb-tab pb-tab--active']//h3[@class='pb-book-card__title']")
	WebElement Verify_Title;
	@FindBy(xpath = "//div[@class='pb-multiple-rows-carousel']//div[@class='slick-arrow slick-prev']")
	WebElement Multiple_Rows;

	public void go_to_Create_Page() {
		HomePage.mouse_Hover(Create);
		Create_Button.click();
		if (HomePage.is_Guest_User() == true) {
			Login_Popup.isDisplayed();
			System.out.println("Please login to create a story");
		}
	}

	public boolean is_Create_Page() {
		String url = driver.getCurrentUrl();
		return url.contains(prop.getProperty("baseURL") + "v0/editor/story/");
	}

	public boolean Create_New_Book_Ppopup_is_Displayed() {
		return Create_New_Book_Popup.isDisplayed();
	}

	public void enter_Book_Details() throws InterruptedException {
		Select_Langauge.click();
		for (int i = 0; i < Langauges_List.size(); i++) {
			if (Langauges_List.get(i).getText().equalsIgnoreCase(Language)) {
				Langauges_List.get(i).click();
				break;
			}
		}
		Select_Langauge.click();
		Book_Title.sendKeys(Language);
		try {
			Thread.sleep(2000);
			Suggestion.click();
		} catch (Exception e) {
			System.out.println("Vernam/Quillpad text is not " + "available for the langauge: " + Language);
		}
		for (int i = 0; i < Reading_Level.size(); i++) {
			if (Reading_Level.get(i).getText().equalsIgnoreCase(Level)) {
				Reading_Level.get(i).click();
			}
		}
		for (int i = 0; i < Book_Orientation.size(); i++) {
			if (Book_Orientation.get(i).getText().equalsIgnoreCase(Orientation)) {
				Book_Orientation.get(i).click();
			}
		}
	}

	public void start_With_Buttons() throws Exception {
		String Start_With = prop.getProperty("start_with");
		if (Start_With.equalsIgnoreCase("images")) {
			Start_with_images_Button.click();
		} else if (Start_With.equalsIgnoreCase("words")) {
			Start_with_words_Button.click();
			Thread.sleep(2000);
			Add_Image.click();
		}
	}

	public void add_Image_to_Page() {
		HomePage.Visibility_wait(driver, Select_Image, 20);
		HomePage.mouse_Hover(Select_Image);
		Add_to_Page.click();
		Save_Image.click();
	}

	public boolean is_Image_Added_to_Page() {
		HomePage.clickable_wait(5, Select_front_Cover_Page);
		try {
			return Add_Image.isDisplayed();
		} catch (Exception e) {
			return false;
		}
	}

	public boolean verify_Image_Drawer() throws InterruptedException {
		HomePage.clickable_wait(5, Select_front_Cover_Page);
		Select_front_Cover_Page.click();
		HomePage.clickable_wait(5, Add_Image);
		Add_Image.click();
		HomePage.Visibility_wait(driver, Image_Drawer, 5);
		return Image_Drawer.isDisplayed();
	}

	public void click_Publish_Button_in_Editor() throws InterruptedException {
		Thread.sleep(3000);
		Publish_Button_in_Editor.click();
	}

	public boolean edit_Your_Story_Card_Image_Popup_is_Opened() {
		HomePage.Visibility_wait(driver, Edit_Your_Story_Card_Image_Popup, 5);
		String Popup_Name = Edit_Your_Story_Card_Image_Popup.getText();
		return Popup_Name.equalsIgnoreCase("Edit your Story Card image");
	}

	public void click_Done_Button() {
		Done_Button.click();
		HomePage.Visibility_wait(driver, Publish_Button, 5);
	}

	public boolean your_Final_Story_Card_Popup_is_Opened() {
		HomePage.Visibility_wait(driver, Edit_Your_Story_Card_Image_Popup, 5);
		String Popup_Name = Edit_Your_Story_Card_Image_Popup.getText();
		return Popup_Name.equalsIgnoreCase("Your Final Story Card");
	}

	public void click_Publish_Button() {
		Publish_Button.click();
		HomePage.Visibility_wait(driver, Publish_Form, 5);
	}

	public boolean is_Publish_Form_Opened() {
		String Popup_Name = Publish_Form.getText();
		return Popup_Name.equalsIgnoreCase("PUBLISH: :");
	}

	public void enter_Publish_Form() throws InterruptedException {
		Synopsis.sendKeys("synopsis");
		try {
			Thread.sleep(2000);
			Suggestion.click();
		} catch (Exception e) {
			System.out.println(
					"Vernam/Quillpad text is " + "not available for the langauge: " + Language + "in Synopsis");
		}
		Category_Dropdown.click();
		Select_Options_in_Dropdown.click();
	}

	public void Publish_a_Story() throws InterruptedException {
		if (!Language.equalsIgnoreCase("English")) {
			English_Title.sendKeys(Language);
			enter_Publish_Form();
		} else {
			enter_Publish_Form();
		}
	}

	public void click_Next_Button() {
		Next_Button.click();
	}

	public void get_Story_Title() {
		HomePage.Visibility_wait(driver, Preview_Book_Cover_Popup, 5);
		Story_Name = Story_Title.getText();
	}

	public boolean Preview_Book_Cover_Popup_is_opened() {
		String Preview_Book_Cover = Preview_Book_Cover_Popup.getText();
		return Preview_Book_Cover.equalsIgnoreCase("Preview the book cover");
	}

	public void click_Publish_Story_Button() {
		Publish_Story.click();
	}

	public boolean is_Notification_Displayed() {
		HomePage.Visibility_wait(driver, Notification, 30);
		String Notification_Text = Notification.getText();
		return Notification_Text
				.equalsIgnoreCase("Wohooo! Your story will appear on the New Arrivals in a short while.");
	}

	public void click_NewArrivals() {
		HomePage.Visibility_wait(driver, New_Arrivals, 5);
		HomePage.scroll_Into_View(Multiple_Rows);
		New_Arrivals.click();
	}

	public boolean verify_Published_Story_in_NewArrivals() throws Exception {
		Close_Notification.click();
		driver.navigate().refresh();
		click_NewArrivals();
		int count = 0;
		while (!Verify_Title.getText().equalsIgnoreCase(Story_Name) && count < 3) {
			Thread.sleep(1000);
			driver.navigate().refresh();
			HomePage.Visibility_wait(driver, New_Arrivals, 5);
			HomePage.scroll_Into_View(Multiple_Rows);
			New_Arrivals.click();
			count++;
		}
		return Verify_Title.getText().equalsIgnoreCase(Story_Name);
	}

}
