package StepDefinitions;

import TestBase.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.Assert;

public class InfiniteScrollTest extends BaseClass {

    @Given("^user navigates to the url$")
    public void user_navigates_to_the_Url( ) {
          initialization();
    }

    @And("^user is on Infinite Scroll page$")
    public void user_Is_On_InfiniteScrollPage() {
        HomePage.clickOnInfiniteScrollLink();
    }


    @When("^user scrolls to bottom of page twice$")
    public void user_Scrolls_To_Bottom_Of_Page_Twice() throws InterruptedException {
        //This will scroll to bottom of the page.

        JavascriptExecutor js= (JavascriptExecutor) driver;

        for(int i = 0; i<3; i++) {//To run the loop twice.
            js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
            scriptWait();

            if (i == 2) {
                break;
            }
        }
    }

    @And("^user scrolls back to top of the page$")
    public void user_Scrolls_Back_To_Top_Of_The_Page() {
        JavascriptExecutor js= (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true)", HomePage.infiniteScrollText);
    }

    @Then("^user should see the text Infinite Scroll$")
    public void user_Should_See_The_Text_InfiniteScroll() throws InterruptedException {
        scriptWait();
        String infiniteScrollText = HomePage.infiniteScrollText.getText();
        Assert.assertEquals("Infinite Scroll", infiniteScrollText);
        tearDown();
    }
}