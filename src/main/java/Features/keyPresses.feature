Feature:  Key presses
  In order to access Key Presses option
  As a new user
  User has to launch url in browser.

  Scenario: Navigate to key presses page

    Given user navigates to home page
    When  user clicks on Key Presses link
    Then  user should navigate to Key Presses page

    #Scenario 1 Verify when Ctrl key is pressed it displays confirmation msg
  Scenario: Verify different key presses
    Given a web browser is at Key Presses page
    When  user presses Ctrl key
    Then  a Ctrl key confirmation message is displayed
   When   user presses P key
    Then  a P key confirmation message is displayed
    When  user presses R key
    Then  a R key confirmation message is displayed
    When  user presses S key
    Then  a S key confirmation message is displayed


