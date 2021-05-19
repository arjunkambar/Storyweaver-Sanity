package com.pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class ReadPage extends TestBase {

	public ReadPage() {
		PageFactory.initElements(driver, this);
	}

	int Before_Read_Count;
	String Title;

	@FindBy(xpath = "//span[text()='Read']")
	WebElement Read;
	@FindBy(xpath = "//span[text()='All Books']")
	WebElement ReadPage;
	@FindBys(@FindBy(xpath = "//ul[@class='pb-list pb-list--inline']/li"))
	List<WebElement> filters;
	@FindBys(@FindBy(xpath = "//div[@class='pb-picklist__options']/div"))
	List<WebElement> Dropdown_Options;
	@FindBy(className = "pb-book-card__container")
	WebElement Story_Card;
	@FindBy(className = "pb-book-card__title")
	WebElement Story_Title;
	@FindBy(className = "pb-book__wrapper")
	WebElement Story_Details_Page;
	@FindBy(xpath = "//div[@class='pb-book__content']//h1")
	WebElement Title_On_StoryDetails_Page;
	@FindBy(xpath = "//a[text()='Read Story']")
	public static WebElement Read_Story_Button;
	@FindBy(xpath = "//div[@class='pb-book__cta-wrapper']//a[text()='Readalong']")
	public static WebElement Readalong_story_Button;
	@FindBy(xpath = "//div[@title='Next']")
	WebElement Next_Button;
	@FindBy(className = "pb-book-reader__page-ref")
	WebElement No_of_Pages;
	@FindBy(xpath = "//a[text()='Next Story']")
	WebElement Smiley_Rating_Popup_Next_button;
	@FindBy(xpath = "//div[@title='Close']//parent::a")
	WebElement Next_Read_Suggestions_Popup;
	@FindBy(xpath = "//span[@dir='ltr']//span[@class='pb-stat__value']")
	WebElement Read_Count;
	@FindBy(id = "filters-bar-sort-by")
	WebElement SortBy;
	@FindBys(@FindBy(xpath = "//select[@id='filters-bar-sort-by']/option"))
	List<WebElement> SortBy_Options;
	@FindBy(className = "pb-audio-player")
	WebElement Audio_Player;

	public void readpage() {
		Actions actions = new Actions(driver);
		actions.moveToElement(Read).build().perform();
		ReadPage.click();
	}

	public boolean is_Read_Page() {
		return driver.getCurrentUrl().equals(TestBase.prop.getProperty("baseURL") + "stories?sort=Ratings");
	}

	public boolean filters_Count() {
		return filters.size() == 5;
	}

	public void verify_Filters() throws InterruptedException {
		try {
			for (int i = 0; i < filters.size(); i++) {
				Thread.sleep(500);
				// System.out.println(filters.get(i).getText());
				filters.get(i).click();
				for (int j = 0; j < Dropdown_Options.size(); j++) {
					// System.out.println(Dropdown_Options.get(j).getText());
					Dropdown_Options.get(j).isDisplayed();
					Dropdown_Options.get(j).isEnabled();
				}
				Thread.sleep(500);
				filters.get(i).click();
			}
		} catch (Exception e) {
			System.out.println("All filter options are not displaying/enabled in dropdown");
			e.printStackTrace();
		}
	}

	public void click_Sort_By() {
		SortBy.click();
	}

	public boolean verify_Sort_By_Count() {
		return SortBy_Options.size() == 5;
	}

	public void verify_SortBy_Options() {
		try {
			for (int i = 0; i < SortBy_Options.size(); i++) {
				// System.out.println(SortBy_Options.get(i).getText());
				SortBy_Options.get(i).isDisplayed();
			}
			SortBy.click();
		} catch (Exception e) {
			System.out.println("All Sort By options are not displaying");
			e.printStackTrace();
		}
	}

	public void select_First_Story_Card() {
		HomePage.Visibility_wait(driver, Story_Card, 10);
		HomePage.scroll_Down(100);
		Actions action = new Actions(driver);
		Title = Story_Title.getText();
		// System.out.println(Title);
		action.moveToElement(Story_Card, 90, 50).click().perform();
		HomePage.Visibility_wait(driver, Title_On_StoryDetails_Page, 10);
	}

	public boolean is_Story_Details_Page() {
		Title_on_storydetail_page = Title_On_StoryDetails_Page.getText();
		if (Title_on_storydetail_page.equals(Title)) {
			return true;

		} else {
			return false;
		}
	}

	public void read_a_Story(WebElement Element) throws Exception {
		Before_Read_Count = Integer.parseInt(Read_Count.getText());
		Element.click();
		HomePage.Visibility_wait(driver, Next_Button, 10);
		if (Element == Readalong_story_Button) {
			Assert.assertTrue("Audio player is missing", Audio_Player.isDisplayed());
		}
		String Pages = No_of_Pages.getText();
		String[] s = Pages.split("/ ");
		int size = Integer.parseInt(s[1]);
		for (int i = 0; i < size; i++) {
			if (i != size) {
				Next_Button.click();
				Thread.sleep(500);
			}
		}
		HomePage.Visibility_wait(driver, Smiley_Rating_Popup_Next_button, 15);
		Smiley_Rating_Popup_Next_button.click();
		HomePage.Visibility_wait(driver, Next_Read_Suggestions_Popup, 15);
		Next_Read_Suggestions_Popup.click();
	}

	public boolean verify_Read_Count() throws Exception {
		int After_Read_Count = Integer.parseInt(Read_Count.getText());
		if (After_Read_Count == Before_Read_Count + 1) {
			return true;
		} else {
			return false;
		}
	}

}
