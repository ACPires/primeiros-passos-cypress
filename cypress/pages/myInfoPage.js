class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            activeInputField: '.oxd-input--active',
            dateInputField: '[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            submitButton: '[type="submit"]',
            toastClose: '.oxd-toast-close',
            dropdownSelector: '.oxd-select-text--arrow',
            nationalitySelector: '.oxd-select-dropdown > :nth-child(59)',   //nth-child: 1 to 194 (BR=27)
            maritalStatusSelector: '.oxd-select-dropdown > :nth-child(1)'   //nth-child: 1 to 4
        }
        return selectors
    }

    updateFields(firstName,lastName,eId,oId,driversLicense,licenseExpireDate){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().activeInputField).eq(3).clear().type(eId)    //Employee ID (max 10)
        cy.get(this.selectorsList().activeInputField).eq(4).clear().type(oId)    //Other ID
        cy.get(this.selectorsList().activeInputField).eq(5).clear().type(driversLicense) //Driver's License Number (max 30)
        cy.get(this.selectorsList().dateInputField).eq(0).clear().type(licenseExpireDate)//License Expire Date
        cy.get(this.selectorsList().dateCloseButton).click()    
        cy.get(this.selectorsList().submitButton).eq(0).click()
    }

    updateDropdown(){
        cy.get(this.selectorsList().dropdownSelector).eq(0).click()          //Nationality
        cy.get(this.selectorsList().nationalitySelector).click()  
        cy.get(this.selectorsList().dropdownSelector).eq(1).click()          //Marital status
        cy.get(this.selectorsList().maritalStatusSelector).click()
    }

    updateConfirmation(){
        cy.get('.oxd-text--toast-message')//.should('contain','Succesfully Updated')
        cy.get(this.selectorsList().toastClose)
    }
}

export default MyInfoPage