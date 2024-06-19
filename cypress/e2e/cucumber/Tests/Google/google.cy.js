///<reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
Given('i open the Google homepage', () => {
    cy.visit('https://www.google.com')

})
Then('i should see Google logo', () => {
    cy.get('img[alt="Google"]').should('be.visible')

})

And('the url should contain "google"', () => {
    cy.url().should('contain', 'google')
})


//testcase02  lambda test


Given('i visit lambda test web login page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

When('i enter {word} and  {word}', (usemail, pass) => {
    cy.get('[name="email"]').type(usemail)
    cy.get('[name="password"]').type(pass)

})

And('i click on login button', () => {
    cy.get('[value="Login"]').click()
})

Then('url contain {string}',(url) => {
    cy.url().should('contain', url)
})




