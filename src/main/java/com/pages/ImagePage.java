package com.pages;

import java.util.List;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class ImagePage extends TestBase {
	int Images_Count;
	String Title;
	int Views_Count_Before_Refresh;
	int Filters_Number;

	public ImagePage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[text()='Create']")
	WebElement create;
	@FindBy(xpath = "//span[text()='Images']")
	WebElement Image;
	@FindBy(className = "pb-filters-bar__action-wrapper")
	WebElement Filters_Bar;
	@FindBys(@FindBy(xpath = "//ul[@class='pb-list pb-list--inline']//a"))
	List<WebElement> Filters_Count;
	@FindBys(@FindBy(xpath = "//div[@class='pb-picklist__options']//label"))
	List<WebElement> Filter_Options;
	@FindBy(id = "filters-bar-sort-by")
	WebElement Sort_By;
	@FindBys(@FindBy(xpath = "//select[@id='filters-bar-sort-by']/option"))
	List<WebElement> Sort_By_Options;
	@FindBys(@FindBy(xpath = "//div[@class='grid__container']//div[@class='pb-image-card']"))
	List<WebElement> Image_Cards;
	@FindBy(xpath = "//a[text()='Load More']")
	WebElement Load_More;
	@FindBys(@FindBy(className = "pb-svg-icon pb-svg-icon--type-loader pb-loader__icon"))
	List<WebElement> Loader;
	@FindBy(xpath = "//div[@class='grid__container']//div[@class='pb-image-card']")
	WebElement Image_Card;
	@FindBy(className = "pb-image-card__title")
	WebElement Image_Title;
	@FindBy(className = "pb-illustration__title")
	WebElement Title_On_Image_Details_Page;
	@FindBy(xpath = "//span[@dir='ltr']//span[@class='pb-stat__value']")
	WebElement Views_Count;
	@FindBy(className = "pb-canvas__wrapper")
	WebElement Image_Details_Page;
	@FindBy(xpath = "//a[text()='Create Story']")
	WebElement Create_Story;
	@FindBy(xpath = "//input[@value='start']")
	WebElement Start_Button;
	@FindBy(xpath = "//span[text()='Reading Order']")
	WebElement Reading_Order;
	@FindBys(@FindBy(className = "pb-modal__bounds"))
	List<WebElement> Non_logged_in_Popup;

	public void go_To_Image_Page() {
		Actions actions = new Actions(driver);
		actions.moveToElement(create).build().perform();
		Image.click();
	}

	public boolean is_Image_Page() {
		String url = driver.getCurrentUrl();
		return url.equals(prop.getProperty("baseURL") + "illustrations?sort=Relevance");
	}

	public boolean filters_Count() {
		HomePage.Visibility_wait(driver, Filters_Bar, 10);
		Filters_Number = Filters_Count.size();
		return Filters_Number == 3;
	}

	public void verify_Filters() {
		try {
			for (int i = 0; i < Filters_Number; i++) {
				Thread.sleep(500);
				// System.out.println(Filters_Count.get(i).getText());
				Filters_Count.get(i).click();
				for (int j = 0; j < Filter_Options.size(); j++) {
					// System.out.println(Filter_Options.get(j).getText());
					Filter_Options.get(j).isDisplayed();
					Filter_Options.get(j).isEnabled();
				}
				Thread.sleep(500);
				Filters_Count.get(i).click();
			}

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("All filter options are not displaying/enabled in dropdown");
		}
	}

	public void click_On_sort_By() {
		Sort_By.click();
	}

	public boolean verify_Sort_By_Count() {
		// System.out.println(Sort_By_Options.size());
		return Sort_By_Options.size() == 4;
	}

	public void verify_Sort_By_Options() {
		try {
			for (int i = 0; i < Sort_By_Options.size(); i++) {
				// System.out.println(Sort_By_Options.get(i).getText());
				Sort_By_Options.get(i).isDisplayed();
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("All options in Sort By are not displaying");
		}
	}

	public boolean images_Count() {
		// System.out.println(Image_Cards.size());
		Images_Count = Image_Cards.size();
		return Image_Cards.size() == 24;
	}

	public void click_On_Load_More() throws Exception {
		Load_More.click();
		HomePage.invisibilty_Wait(Loader);
	}

	public boolean images_Count_After_Load_More() {
		// System.out.println(Image_Cards.size());
		return Image_Cards.size() == Images_Count + 24;
	}

	public void click_On_First_Image() {
		Title = Image_Title.getText();
		Image_Card.click();
		HomePage.Visibility_wait(driver, Image_Details_Page, 10);
	}

	public boolean verify_Image_Details_Page() {
		HomePage.scroll_Down(300);
		HomePage.Visibility_wait(driver, Title_On_Image_Details_Page, 10);
		return Title_On_Image_Details_Page.getText().equals(Title);
	}

	public void refersh_Image_Page() {
		Views_Count_Before_Refresh = Integer.parseInt(Views_Count.getText());
		// System.out.println(Views_Count_Before_Refresh);
		driver.navigate().refresh();
	}

	public boolean verify_Views_Count() {
		HomePage.Visibility_wait(driver, Views_Count, 10);
		int Views_Count_After_Refresh = Integer.parseInt(Views_Count.getText());
		// System.out.println(Views_Count_After_Refresh);
		return Views_Count_After_Refresh == Views_Count_Before_Refresh + 1;
	}

	public boolean non_logged_in_Popup() {
		if (Non_logged_in_Popup.size() != 0) {
			return true;
		} else {
			return false;
		}
	}

	public void click_on_Create_Story() {
		Create_Story.click();
		if (non_logged_in_Popup() == true) {
			System.out.println("Not logged-in, Please log into your StoryWeaver "
					+ "account to create a story from this illustration.");
		}
	}

	public boolean verify_Create_Page() {
		HomePage.clickable_wait(30, Start_Button);
		Start_Button.click();
		return driver.getCurrentUrl().contains(prop.getProperty("baseURL") + "v0/editor/story/");
	}

	public boolean is_Image_added() {
		return Reading_Order.isDisplayed();
	}

}
