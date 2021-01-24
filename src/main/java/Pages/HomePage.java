package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends BaseClass {
    WebDriver driver;
    @FindBy(xpath = "//*[@id=\"content\"]/ul/li[21]/a")//Locator for Form Authentication link in menu.
    public WebElement formAuthentication;
    @FindBy(xpath = "//*[@id=\"username\"]")//Locate user name text box
    public WebElement usernameTextBox;
    @FindBy(xpath = "//*[@id=\"password\"]")//Locate password text box
    public WebElement passwordTextBox;
    @FindBy(xpath = "//*[@id=\"login\"]/button/i")//Login button.
    public WebElement loginButton;
    @FindBy(xpath = "//*[@id=\"content\"]/div/a/i")//Logout button
    public WebElement logoutButton;
    @FindBy(xpath = "//*[@id=\"content\"]/ul/li[26]/a")//Infinite Scroll link
    public WebElement infiniteScrollLink;
    @FindBy(xpath = "//*[@id=\"content\"]/ul/li[31]/a")//Key Presses link
    public WebElement keyPressesLink;
    @FindBy(xpath = "//*[@id=\"content\"]/div/h3")
    public WebElement infiniteScrollText;
    @FindBy(xpath = "//*[@id=\"content\"]/div/h2")
    public WebElement homePageTitle;




    public HomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickOnFormAuthentication() {
        formAuthentication.click();
    }

    public void enterUserName(String username) {
        usernameTextBox.sendKeys(username);
    }

    public void enterPassword(String password) {
        passwordTextBox.sendKeys(password);
    }

    public void clickOnLoginButton() {
        loginButton.click();
    }

    public void clickOnLogoutButton() {
        logoutButton.click();
    }

    public void clickOnInfiniteScrollLink() {
        infiniteScrollLink.click();
    }

    public void clickOnKeyPressesLink() {
        keyPressesLink.click();
    }

}
