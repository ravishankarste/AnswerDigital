Feature: Form Authentication
  In order to login
  As a valid user
  I have to provide valid user name and password

  Scenario: Navigate to Form Authentication page
    Given user navigate to url
    When  user click on login Form Authentication link
    Then  user should navigate to login page

    #Test case 01: Invalid username and password
  Scenario Outline: Verify login functionality
    Given user is at Form Authentication page
    When  user enters username "<username>"
    And   user enters password "<password>"
    Then  user clicks on login button

    Examples:
      | username  | password |
      #Correct username, incorrect password
      | tomsmith  | SuperSecretPassword!123 |
      ##Incorrect username, correct password
      | tomsmith123  | SuperSecretPassword! |

#Test case 02: Valid username and password
  Scenario Outline: Verify login functionality
    Given user is at Form Authentication page
    When  user enters username "<username>"
    And   user enters password "<password>"
    Then  user clicks on login button
    And   user clicks on logout button to logout

    Examples:
      | username  | password |
      ##Correct username, correct password
      | tomsmith  | SuperSecretPassword! |