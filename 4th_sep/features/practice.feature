Feature:Register Feature

#   Scenario: Successful register with valid credentials
#     Given the user is on the register page
#     When the user enters first name,email
#     And the user selects gender
#     And the user enters mobile number and date of birth,subjects
#     And the user selects hobbies and uploads picture
#     And the user enters current address
#     And the user selects state and city
#     And clicks the register button
#     Then the registration should be completed successfully


  Scenario Outline: Successful registration with different user data
    Given the user is on the register page
    When the user enters "<FirstName>" and "<Email>"
    And the user selects "<Gender>"
    And the user enters "<MobileNumber>", "<DateOfBirth>" and "<Subjects>"
    And the user selects "<Hobbies>" and uploads "<Picture>"
    And the user enters "<Address>"
    And the user selects "<State>" and "<City>"
    And clicks the register button
    Then the registration should be completed successfully

    Examples:
      | FirstName | Email                | Gender | MobileNumber | DateOfBirth | Subjects | Hobbies | Picture            | Address         | State | City   |
      | Aparna    | aparna@test.com      | Female | 9876543210   | 2026-01-08 | Maths    | Reading | testData/photo1.jpg | Bangalore       | NCR   | Agra  |
      | Sai       | sai@test.com         | Male   | 9876543211   | 2026-01-09 | English  | Sports  | testData/photo2.jpg | Chennai         | NCR   | Lucknow  |
      | John      | john@test.com        | Male   | 9876543212   | 2026-07-04 | Physics  | Music   | testData/photo3.jpg | Hyderabad       | NCR   | Meerut |


Scenario Outline: Verify registration with invalid data
    Given the user is on the register page
    When the user enters "<firstName>" and "<email>"
    And the user selects "<gender>"
    And the user enters "<mobile>", "<dob>" and "<subject>"
    Then the registration should not be completed successfully

Examples:
| firstName | email            | gender | mobile     | dob        | subject |
| Aparna    |                  | Female | 98765      | 2026-03-03 | Maths   |
| Sai       | invalidemail     | Male   | abcde12345 | 2026-07-09 |         |