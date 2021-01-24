package TestBase;

import Pages.KeyPressesPage;
import Util.testUtil;
import Pages.HomePage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;


public class BaseClass {

    public static WebDriver driver;
    public static HomePage HomePage;
    public static KeyPressesPage KeyPressesPage;

    public static void initialization() {

        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://the-internet.herokuapp.com/");
        driver.manage().window().maximize();
        HomePage = new HomePage(driver);
        KeyPressesPage = new KeyPressesPage(driver);
        driver.manage().deleteAllCookies();

    }

    public String getPageTitle() {
        return driver.getTitle();
    }

    public void implicitWait() throws InterruptedException {
        driver.manage().timeouts().implicitlyWait(testUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
    }

    public void pageLoadTimeout(){
        driver.manage().timeouts().pageLoadTimeout(testUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
    }

    public void scriptWait() throws InterruptedException {
        Thread.sleep(3000);
    }

    public void tearDown(){
        driver.quit();
    }
}