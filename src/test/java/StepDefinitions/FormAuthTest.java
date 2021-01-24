package StepDefinitions;

import TestBase.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class FormAuthTest extends BaseClass {
    @Given("^user navigate to url$")
    public void user_navigate_to_url()  {
        initialization();
    }

    @When("^user click on login Form Authentication link$")
    public void user_click_on_login_Form_Authentication_link() {
        HomePage.clickOnFormAuthentication();
    }

    @Then("^user should navigate to login page$")
    public void user_should_be_navigate_to_login_page()  {
        //Verify we are on login page using text 'Login Page'.
        String homePageText = HomePage.homePageTitle.getText();
        Assert.assertEquals("Login Page", homePageText);
    }

    @Given("^user is at Form Authentication page$")
    public void user_is_at_Form_Authentication_page() {
        //Verify we are on login page using current Url.
        String Url = "http://the-internet.herokuapp.com/login";
        String FormAuthenticationPageUrl = driver.getCurrentUrl();
        Assert.assertEquals(Url, FormAuthenticationPageUrl);
    }

    @When("^user enters username \"([^\"]*)\"$")
    public void user_enters_username(String username) {
        HomePage.enterUserName(username);
    }

    @And("^user enters password \"([^\"]*)\"$")
    public void user_enters_password(String password) {
        HomePage.enterPassword(password);
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button() {
        HomePage.clickOnLoginButton();
    }

    @And("^user clicks on logout button to logout$")
    public void userClicksOnLogoutButtonToLogout() throws InterruptedException {
        HomePage.clickOnLogoutButton();
        tearDown();
    }
}
