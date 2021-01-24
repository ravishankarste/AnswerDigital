$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FormAuth.feature");
formatter.feature({
  "line": 1,
  "name": "Form Authentication",
  "description": "In order to login\r\nAs a valid user\r\nI have to provide valid user name and password",
  "id": "form-authentication",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Navigate to Form Authentication page",
  "description": "",
  "id": "form-authentication;navigate-to-form-authentication-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user click on login Form Authentication link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthTest.user_navigate_to_url()"
});
formatter.result({
  "duration": 5329162400,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthTest.user_click_on_login_Form_Authentication_link()"
});
formatter.result({
  "duration": 602710900,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthTest.user_should_be_navigate_to_login_page()"
});
formatter.result({
  "duration": 60932700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 11,
      "value": "#Test case 01: Invalid username and password"
    }
  ],
  "line": 12,
  "name": "Verify login functionality",
  "description": "",
  "id": "form-authentication;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is at Form Authentication page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "form-authentication;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "form-authentication;verify-login-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 20,
          "value": "#Correct username, incorrect password"
        }
      ],
      "cells": [
        "tomsmith",
        "SuperSecretPassword!123"
      ],
      "line": 21,
      "id": "form-authentication;verify-login-functionality;;2"
    },
    {
      "comments": [
        {
          "line": 22,
          "value": "##Incorrect username, correct password"
        }
      ],
      "cells": [
        "tomsmith123",
        "SuperSecretPassword!"
      ],
      "line": 23,
      "id": "form-authentication;verify-login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#Correct username, incorrect password"
    }
  ],
  "line": 21,
  "name": "Verify login functionality",
  "description": "",
  "id": "form-authentication;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is at Form Authentication page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters username \"tomsmith\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters password \"SuperSecretPassword!123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthTest.user_is_at_Form_Authentication_page()"
});
formatter.result({
  "duration": 8679500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 22
    }
  ],
  "location": "FormAuthTest.user_enters_username(String)"
});
formatter.result({
  "duration": 176510300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!123",
      "offset": 22
    }
  ],
  "location": "FormAuthTest.user_enters_password(String)"
});
formatter.result({
  "duration": 218003500,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthTest.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 589642300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "##Incorrect username, correct password"
    }
  ],
  "line": 23,
  "name": "Verify login functionality",
  "description": "",
  "id": "form-authentication;verify-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is at Form Authentication page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user enters username \"tomsmith123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters password \"SuperSecretPassword!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthTest.user_is_at_Form_Authentication_page()"
});
formatter.result({
  "duration": 38005200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith123",
      "offset": 22
    }
  ],
  "location": "FormAuthTest.user_enters_username(String)"
});
formatter.result({
  "duration": 179056300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 22
    }
  ],
  "location": "FormAuthTest.user_enters_password(String)"
});
formatter.result({
  "duration": 221498100,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthTest.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 552850200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "#Test case 02: Valid username and password"
    }
  ],
  "line": 26,
  "name": "Verify login functionality",
  "description": "",
  "id": "form-authentication;verify-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "user is at Form Authentication page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on logout button to logout",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "form-authentication;verify-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 34,
      "id": "form-authentication;verify-login-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 35,
          "value": "##Correct username, correct password"
        }
      ],
      "cells": [
        "tomsmith",
        "SuperSecretPassword!"
      ],
      "line": 36,
      "id": "form-authentication;verify-login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "##Correct username, correct password"
    }
  ],
  "line": 36,
  "name": "Verify login functionality",
  "description": "",
  "id": "form-authentication;verify-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "user is at Form Authentication page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "user enters username \"tomsmith\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user enters password \"SuperSecretPassword!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks on logout button to logout",
  "keyword": "And "
});
formatter.match({
  "location": "FormAuthTest.user_is_at_Form_Authentication_page()"
});
formatter.result({
  "duration": 11160900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 22
    }
  ],
  "location": "FormAuthTest.user_enters_username(String)"
});
formatter.result({
  "duration": 129831400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 22
    }
  ],
  "location": "FormAuthTest.user_enters_password(String)"
});
formatter.result({
  "duration": 215610400,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthTest.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 540730400,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthTest.userClicksOnLogoutButtonToLogout()"
});
formatter.result({
  "duration": 662117500,
  "status": "passed"
});
formatter.uri("infiniteScroll.feature");
formatter.feature({
  "line": 1,
  "name": "Infinite Scroll feature",
  "description": "In order to gain access to the feature\nAs any user\nI would enter the Url in the browser",
  "id": "infinite-scroll-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify scroll",
  "description": "",
  "id": "infinite-scroll-feature;verify-scroll",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user navigates to the url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is on Infinite Scroll page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user scrolls to bottom of page twice",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user scrolls back to top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should see the text Infinite Scroll",
  "keyword": "Then "
});
formatter.match({
  "location": "InfiniteScrollTest.user_navigates_to_the_Url()"
});
formatter.result({
  "duration": 3773330600,
  "status": "passed"
});
formatter.match({
  "location": "InfiniteScrollTest.user_Is_On_InfiniteScrollPage()"
});
formatter.result({
  "duration": 511678200,
  "status": "passed"
});
formatter.match({
  "location": "InfiniteScrollTest.user_Scrolls_To_Bottom_Of_Page_Twice()"
});
formatter.result({
  "duration": 9111745000,
  "status": "passed"
});
formatter.match({
  "location": "InfiniteScrollTest.user_Scrolls_Back_To_Top_Of_The_Page()"
});
formatter.result({
  "duration": 60949400,
  "status": "passed"
});
formatter.match({
  "location": "InfiniteScrollTest.user_Should_See_The_Text_InfiniteScroll()"
});
formatter.result({
  "duration": 3204827600,
  "status": "passed"
});
formatter.uri("keyPresses.feature");
formatter.feature({
  "line": 1,
  "name": "Key presses",
  "description": "In order to access Key Presses option\nAs a new user\nI have to launch url in browser.",
  "id": "key-presses",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Navigate to key presses page",
  "description": "",
  "id": "key-presses;navigate-to-key-presses-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Key Presses link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to Key Presses page",
  "keyword": "Then "
});
formatter.match({
  "location": "KeyPressesTest.i_Navigate_To_Home_Page()"
});
formatter.result({
  "duration": 3814228900,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.i_Click_On_Key_Presses_Link()"
});
formatter.result({
  "duration": 438044700,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.iShouldBeNavigateToKeyPressesPage()"
});
formatter.result({
  "duration": 57913000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#Scenario 1 Verify when Ctrl key is pressed it displays confirmation msg"
    }
  ],
  "line": 13,
  "name": "Verify different key presses",
  "description": "",
  "id": "key-presses;verify-different-key-presses",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "a web browser is at Key Presses page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I press Ctrl key",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "a Ctrl key confirmation message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I press Alt key",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "a Alt key confirmation message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I press R key",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "a R key confirmation message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I press S key",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "a S key confirmation message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "KeyPressesTest.a_WebBrowser_Is_At_KeyPressesPage()"
});
formatter.result({
  "duration": 7756800,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.i_Press_CtrlKey()"
});
formatter.result({
  "duration": 113527800,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.a_Ctrl_key_Confirmation_Message_IsDisplayed()"
});
formatter.result({
  "duration": 3079587300,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.i_Press_AltKey()"
});
formatter.result({
  "duration": 61849000,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.a_Alt_Key_Confirmation_Message_IsDisplayed()"
});
formatter.result({
  "duration": 3054290200,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.iPressRKey()"
});
formatter.result({
  "duration": 62351600,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.a_R_Key_Confirmation_Message_IsDisplayed()"
});
formatter.result({
  "duration": 3046490500,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.i_Press_S_Key()"
});
formatter.result({
  "duration": 65096500,
  "status": "passed"
});
formatter.match({
  "location": "KeyPressesTest.a_S_Key_Confirmation_Message_IsDisplayed()"
});
formatter.result({
  "duration": 7186974700,
  "status": "passed"
});
});