package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class KeyPressesPage extends BaseClass {
    WebDriver driver;
    @FindBy(xpath = "//*[@id=\"content\"]/div/h3")//Locator for KeyPressesPage title
    public WebElement keyPressesPageTitle;
    @FindBy(xpath = "//*[@id=\"target\"]")//Locator for input field
    public WebElement inputField;
    @FindBy(xpath = "//*[@id=\"result\"]")//Locator for confirmation message text
    public WebElement confirmMsg;

    public KeyPressesPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
}
