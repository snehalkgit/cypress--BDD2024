Feature: varify login functionality of ORHM
    Scenario: Testcase01  verify login functionality for valid user
        Given Navigate to ORHM webpage
        When  i enter user-name and pass-word
            | username | password |
            | Admin    | admin123 |

        And   click on login button
        Then  validate for valid user page


    Scenario Outline: Testcase02 verify  login functionality ORHM
        Given Navigate to ORHM webpage
        When i enter <username> and <password>
        And  click on login button
        Then validate for valid user page

        Examples:
            | username | password |
            | Admin    | admin123 |
            | Admin    | admin123 |


    Scenario Outline: teastcase03  verify login functionality ORHM
        Given Navigate to ORHM webpage
        When i enter <username1> and <password1>
        And   click on login button
        Then validate for valid and invalid <credentials>

        Examples:
            | username1 | password1 | credentials |
            | Admin     | admin123  | valid       |
            | admin     | admin1234 | invalid     |



    Scenario Outline: testcase04 verify login functionality ORHM

        Given Navigate to ORHM webpage
        When i enter "<username1>" and "<password1>"
        And  click on login button
        Then validate for valid and invalid "<credentials>"

        Examples:
            | username1 | password1 | credentials |
            | admin     | admin123  | valid       |
            | admin     | admin123  | invalid     |