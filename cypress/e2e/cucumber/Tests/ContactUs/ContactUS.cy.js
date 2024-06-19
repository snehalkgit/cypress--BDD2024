///<reference types ="cypress"/>

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/ContactUspage"
import userData from "../../../../fixtures/ContactUspayload"

let pg = new page
let currentuser;

Given('i navigate to contactus webpage {word}', (index) => {
    currentuser = userData[index]
    pg.visiturl()   
})

When('i enter user details', () => {
    pg.userdata(currentuser)
})
And('i click on submit button', () => {
    pg.buttonclick(pg.selector.submitbtn)
})

Then('i verify user message', () => {
    pg.validateText(pg.selector.thnkUmsg, 'Thank You for your Message!')
})

