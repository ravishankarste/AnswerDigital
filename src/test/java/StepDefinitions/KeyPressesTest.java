package StepDefinitions;

import TestBase.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.awt.*;
import java.awt.event.KeyEvent;

public class KeyPressesTest extends BaseClass {
    Robot r = new Robot();

    public KeyPressesTest() throws AWTException {
    }

    @Given("^user navigates to home page$")
    public void i_Navigate_To_Home_Page() {
        initialization();
    }


    @When("^user clicks on Key Presses link$")
    public void i_Click_On_Key_Presses_Link() {
        HomePage.clickOnKeyPressesLink();
    }

    @Then("^user should navigate to Key Presses page$")
    public void iShouldBeNavigateToKeyPressesPage() {
        //Assert by Text on page
        String keyPressesPageText = KeyPressesPage.keyPressesPageTitle.getText();
        Assert.assertEquals("Key Presses", keyPressesPageText);
    }

    @Given("^a web browser is at Key Presses page$")
    public void a_WebBrowser_Is_At_KeyPressesPage() {
        //Assert using current Url of page.
        String actualUrl = "http://the-internet.herokuapp.com/key_presses";
        String currentUrlUrl = driver.getCurrentUrl();
        Assert.assertEquals(actualUrl, currentUrlUrl);
    }

    @When("^user presses Ctrl key$")
    public void i_Press_CtrlKey() {
        KeyPressesPage.inputField.click();
        r.keyPress(KeyEvent.VK_CONTROL);
    }

    @Then("^a Ctrl key confirmation message is displayed$")
    public void a_Ctrl_key_Confirmation_Message_IsDisplayed() throws InterruptedException {
        String controlKeyText = KeyPressesPage.confirmMsg.getText();
        Assert.assertEquals("You entered: CONTROL", controlKeyText);
        r.keyRelease(KeyEvent.VK_CONTROL);
        scriptWait();
    }

    @When("^user presses P key$")
    public void i_Press_P_Key() {

        KeyPressesPage.inputField.click();
        r.keyPress(KeyEvent.VK_P);
    }

    @Then("^a P key confirmation message is displayed$")
    public void a_Alt_Key_Confirmation_Message_IsDisplayed() throws InterruptedException {
        String pText = KeyPressesPage.confirmMsg.getText();
        Assert.assertEquals("You entered: P", pText);
        r.keyRelease(KeyEvent.VK_P);
        scriptWait();
    }

    @When("^user presses R key$")
    public void i_Press_R_Key() {
        KeyPressesPage.inputField.click();
        r.keyPress(KeyEvent.VK_R);
    }

    @Then("^a R key confirmation message is displayed$")
    public void a_R_Key_Confirmation_Message_IsDisplayed() throws InterruptedException {
        String rKeyText = KeyPressesPage.confirmMsg.getText();
        Assert.assertEquals("You entered: R", rKeyText);
        r.keyRelease(KeyEvent.VK_R);
        scriptWait();
    }

    @When("^user presses S key$")
    public void i_Press_S_Key() {
        KeyPressesPage.inputField.click();
        r.keyPress(KeyEvent.VK_S);
    }

    @Then("^a S key confirmation message is displayed$")
    public void a_S_Key_Confirmation_Message_IsDisplayed() throws InterruptedException {
        String sKeyText = KeyPressesPage.confirmMsg.getText();
        Assert.assertEquals("You entered: S", sKeyText);
        r.keyRelease(KeyEvent.VK_S);
        scriptWait();
        tearDown();
    }
}