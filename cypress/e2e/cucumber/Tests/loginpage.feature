Feature: login  functionality of Oranage HRM web site

    Background: Navigate to url
        Given i navigate to ORHM login webpage valid

    Scenario: test01 i should be able to login orange HRm web page with valid credentitals
        ## Given i navigate to ORHM login webpage
        And i enter username and password
        When i click on login button
        Then valid user should be logged in

    Scenario: test02 i should be able to login orhm web page with invalid credentitals
        ## Given i navigate to ORHM login webpage
        And i enter invalid username and password
        When i click on login button
        Then login page should display invalid credentitals msg


    Scenario: test03 i should be able to login orhm webpage with valid username and password
        And i enter username and password
        When i click on login button
        Then login page should display "Dashboard"
