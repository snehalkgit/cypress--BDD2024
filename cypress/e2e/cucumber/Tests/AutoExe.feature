Feature:verify the signup functionality for auto Excerise web page
    Scenario Outline: signup and login for new user
        Given i visit to autoEx webpage <index>
        And i click on signup button
        When i type username and email and then click on signup button
        And i fill new user data and i click on create user button
        When i verify new user created
        Then i verify login for new user
        Examples:
            | index |
            | 0     |
            | 1     |