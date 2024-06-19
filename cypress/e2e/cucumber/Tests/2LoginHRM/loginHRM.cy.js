///<reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Navigate to ORHM webpage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

When('i enter user-name and pass-word', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.username)
        cy.get('[name="password"]').type(element.password)

    });

})

And('click on login button', () => {
    cy.get('.orangehrm-login-button').click()
})

Then('validate for valid user page', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')

})

///testcase02

When('i enter {word} and {word}', (user, pass) => {
    cy.get('[name="username"]').type(user)
    cy.get('[name="password"]').type(pass)
})


//testcase03

When('i enter  {word} and {word}', (user, pass) => {
    cy.get('[name="username"]').type(user)
    cy.get('[name="password"]').type(pass)
})

Then('validate for valid and invalid {word}', (cri) => {
    if (cri == 'valid') {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    } else if (cri == "invalid") {
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }
})


//testcase04

When('i enter {string} and {string}', (user, pass) => {
    cy.get('[name="username"]').type(user)
    cy.get('[name="password"]').type(pass)
})

Then('validate for value valid and invalid {string}', (cri) => {
    if (cri == 'valid') {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
    else if (cri == 'invalid') {
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }
})