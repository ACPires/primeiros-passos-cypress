class MyInfoPage {
    selectorsList() {
        selectors ={
            myInfoMenu: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            activeInputField: '.oxd-input--active',
            dateInputField: '[placeholder="yyyy-mm-dd"]',
            dateCloseButton: '.--close',
            submitButton: '[type="submit"]',
            toastClose: '.oxd-toast-close'
        }
        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoMenu).click()
    }

    updateFields(firstName,lastName,nickname,eId,oId,driversLicense,licenseExpireDate,sSN,sIN){
        cy.get(this.selectorsList().firstNameField).clear().type('Joaquim')
        cy.get(this.selectorsList().lastNameField).clear().type('Albuquerque')
        cy.get(this.selectorsList().activeInputField).eq(3).clear().type('Joque')   //Nickname
        cy.get(this.selectorsList().activeInputField).eq(4).clear().type('2256')    //Employee ID (max 10)
        cy.get(this.selectorsList().activeInputField).eq(5).clear().type('1234')    //Other ID
        cy.get(this.selectorsList().activeInputField).eq(6).clear().type('945682N') //Driver's License Number (max 30)
        cy.get(this.selectorsList().dateInputField).eq(0).clear().type('2029-02-24')//License Expire Date
        cy.get(this.selectorsList().dateCloseButton).click()    
        cy.get(this.selectorsList().activeInputField).eq(8).clear().type('5725')    //SSN
        cy.get(this.selectorsList().activeInputField).eq(9).clear().type('3216')    //SIN
        cy.get(this.selectorsList().submitButton).eq(0).click()
    }

    updateConfirmation(){
        cy.get('body').should('contain','Succesfully Updated')
        cy.get(this.selectorsList().toastClose)
    }
}

export default MyInfoPage