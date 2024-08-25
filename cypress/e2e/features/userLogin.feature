
Feature: User Login

  Background:
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user enters valid credentials
    And the user submits the login form
    Then the user should be redirected to the dashboard

  Scenario Outline: Unsuccessful login with invalid credentials
    When the user enters "<username>" and "<password>"
    And the user submits the login form
    Then the user should see an error message

    Examples:
      | username | password |
      | user1    | pass1    |
      | user2    | pass2    |

