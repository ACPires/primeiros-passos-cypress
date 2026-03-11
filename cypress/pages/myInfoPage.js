class MyInfoPage {
    selectorsList() {
        const selectors = {
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
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().activeInputField).eq(3).clear().type(nickname)   //Nickname
        cy.get(this.selectorsList().activeInputField).eq(4).clear().type(eId)    //Employee ID (max 10)
        cy.get(this.selectorsList().activeInputField).eq(5).clear().type(oId)    //Other ID
        cy.get(this.selectorsList().activeInputField).eq(6).clear().type(driversLicense) //Driver's License Number (max 30)
        cy.get(this.selectorsList().dateInputField).eq(0).clear().type(licenseExpireDate)//License Expire Date
        cy.get(this.selectorsList().dateCloseButton).click()    
        cy.get(this.selectorsList().activeInputField).eq(8).clear().type(sSN)    //SSN
        cy.get(this.selectorsList().activeInputField).eq(9).clear().type(sIN)    //SIN
        cy.get(this.selectorsList().submitButton).eq(0).click()
    }

    updateConfirmation(){
        cy.get('body').should('contain','Succesfully Updated')
        cy.get(this.selectorsList().toastClose)
    }
}

export default MyInfoPage