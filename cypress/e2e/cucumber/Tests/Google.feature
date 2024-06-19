Feature: visit a Goggle webpage
    Scenario: 01 verify login webpage url
        Given i open the Google homepage
        Then i should see Google logo
        And   the url should contain "google"





    Scenario Outline: lambda test web page
        Given i visit lambda test web login page
        When i enter <useremail> and  <password>
        And i click on login button
        Then url contain "route=account/login"
        Examples:
            | useremail                   | password |
            | snehalkamble1564@gmail.com  | snehal   |
            | snehalkamble17964@gmail.com | snehal1  |


