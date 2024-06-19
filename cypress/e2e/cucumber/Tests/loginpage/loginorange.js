///<reference types ="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

//for valid user
Given('i navigate to ORHM login webpage valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

And('i enter username and password', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
})

When('i click on login button', () => {
    cy.get('[type="submit"]').click()
})

Then('valid user should be logged in', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
})

//invalid user

And('i enter invalid username and password', () => {
    cy.get('[name="username"]').type('invalid-un')
    cy.get('[name ="password"]').type('invalid-paswd')
})
Then('login page should display invalid credentitals msg', () => {
    cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
})


//test03 
Then('login page should display {string}',(Dashboard)=>{
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text',Dashboard)

})

