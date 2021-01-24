Feature:  Key presses
  In order to access Key Presses option
  As a new user
  I have to launch url in browser.

  Scenario: Navigate to key presses page

    Given I navigate to home page
    When  I click on Key Presses link
    Then  I should navigate to Key Presses page

    #Scenario 1 Verify when Ctrl key is pressed it displays confirmation msg
  Scenario: Verify different key presses
    Given a web browser is at Key Presses page
    When  I press Ctrl key
    Then  a Ctrl key confirmation message is displayed
   When  I press Alt key
    Then  a Alt key confirmation message is displayed
    When  I press R key
    Then  a R key confirmation message is displayed
    When  I press S key
    Then  a S key confirmation message is displayed


