package MyRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "C:\\Users\\Sunita\\Desktop\\AnswerDigitalAutomationTest\\" +
                "AnswerDigitalAutomationTest\\src\\main\\java\\Features",
        glue={"StepDefinitions"}, //the path of the step definition files
        plugin= {"pretty",//to generate different types of reporting
                "html:test-outout",
                "json:json_output/cucumber.json",
                "junit:junit_xml/cucumber.xml"},
        monochrome = true, //display the console output in a proper readable format
        strict = true, //it will check if any step is not defined in step definition file
        dryRun = false //to check the mapping is proper between feature file and step def file
)

public class TestRunner extends AbstractTestNGCucumberTests {
}
