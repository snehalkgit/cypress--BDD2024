export default class mypage{
    selector ={
        firstname : '[name="first_name"]',
        lastname : '[name="last_name"]',
        email : '[name="email"]',
        message : '[name="message"]',
        submitbtn:'[type="submit"]',
        returnbtn : '[type="reset"]',
        thnkUmsg : 'h1'
    }
    visiturl (){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    }
    buttonclick(css){
        cy.get(css).click()

    }
    userdata(user){
        cy.get(this.selector.firstname).type(user.fn)
        cy.get(this.selector.lastname).type(user.ln)
        cy.get(this.selector.email).type(user.emai)
        cy.get(this.selector.message).type(user.msg)
    }
    validateText(css,text){
        cy.get(css).should('have.text',text)
    }
}

