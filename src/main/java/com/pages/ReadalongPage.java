package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.utility.TestBase;

public class ReadalongPage extends TestBase {

	public ReadalongPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[text()='Readalongs']")
	WebElement Readalongs;
	@FindBy(xpath = "//div[@class='pb-book__cta-wrapper']//a[text()='Readalong']")
	WebElement Readalong_story;
	@FindBy(xpath = "//span[text()='Read']")
	WebElement Read;

	public void go_To_Readalongpage() {
		Actions actions = new Actions(driver);
		actions.moveToElement(Read).build().perform();
		Readalongs.click();
	}

	public boolean is_Readalong_Page() {
		String url = driver.getCurrentUrl();
		return url.equals(prop.getProperty("baseURL") + "audios?isAudio=true&sort=Ratings&story_type=audio");
	}

}
