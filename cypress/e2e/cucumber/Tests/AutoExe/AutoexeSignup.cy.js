///<reference types="cypress" />

import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/AutoExepage"
import user from "../../../../fixtures/payloadAutoEx"

let pg = new page
let currentuser;
let title;


Given('i visit to autoEx webpage {word}', (index) => {
    currentuser = user[index]
    pg.visitUrl()
})

And('i click on signup button', () => {
    pg.btnClick(pg.selector.loginSinup)
})

When('i type username and email and then click on signup button', () => {
    pg.newUserSignUp(currentuser)
    pg.btnClick(pg.selector.signUpBtn)
})


And('i fill new user data and i click on create user button', () => {
    if (currentuser.title === "Mr") {
        title = pg.selector.titleMr

    }
    else if (currentuser.title === "Mrs") {
        title = pg.selector.titleMrs
    }
    pg.newusercreate(title, currentuser)
})

When('i verify new user created', () => {
    pg.validatetext(pg.selector.accountcreatedText, 'Account Created!')

})

Then('i verify login for new user', () => {
    pg.btnClick(pg.selector.loginSinup)
    pg.btnClick(pg.selector.logout)
    pg.loginUser(currentuser)
    pg.validatetext(pg.selector.loginTextValidation, currentuser.username)
})