class MenuPage{
    selectorsList() {
        const selectors = {
            myInfoMenu: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoMenu).click()
    }
}

export default MenuPage