Feature:Login Feature

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard page

  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters invalid username or password
    And clicks the login button
    Then an error message should be displayed indicating invalid credentials
  
  @smoke
  Scenario Outline:Verify login with multiple users unsucessfully
    Given the user is on the login page
    When user enters "<username>" and "<password>"
    Then the user should be login unsucessfull
    Examples:
      | username                  | password |
      | standard_user             | secret_sauc     |
      | problem_user              | secret_sauc     |
      | performance_user_glitch   | secret_sauc     |
      | error_user                | secret_sauc     |
      | visual_user               | secret_sauc     |

    Scenario Outline:Verify login with multiple users unsucessfully
    Given the user is on the login page
    When user enters "<username>" and "<password>"
    Then the user should be login sucessfull
    Examples:
      | username                  | password |
      | standard_user             | secret_sauce     |
      | problem_user              | secret_sauce     |
      | performance_user_glitch   | secret_sauce     |
      | error_user                | secret_sauce     |
      | visual_user               | secret_sauce     |
