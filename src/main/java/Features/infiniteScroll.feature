Feature: Infinite Scroll feature
  In order to gain access to the feature
  As any user
  I would enter the Url in the browser

  Scenario: Verify scroll
    Given user navigates to the url
    And   user is on Infinite Scroll page
    When  user scrolls to bottom of page twice
    And   user scrolls back to top of the page
    Then  user should see the text Infinite Scroll