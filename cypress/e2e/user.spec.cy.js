import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

const selectorsList = {
  myInfoMenu: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  lastNameField: '[name="lastName"]',
  activeInputField: '.oxd-input--active',
  dateInputField: '[placeholder="yyyy-mm-dd"]',
  dateCloseButton: '.--close',
  submitButton: '[type="submit"]',
  toastClose: '.oxd-toast-close'
}

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.dashboardPageConfirmation()
    cy.get(selectorsList.myInfoMenu).click()
    cy.get(selectorsList.firstNameField).clear().type('Joaquim')
    cy.get(selectorsList.lastNameField).clear().type('Albuquerque')
    cy.get(selectorsList.activeInputField).eq(3).clear().type('Joque')   //Nickname
    cy.get(selectorsList.activeInputField).eq(4).clear().type('2256')    //Employee ID (max 10)
    cy.get(selectorsList.activeInputField).eq(5).clear().type('1234')    //Other ID
    cy.get(selectorsList.activeInputField).eq(6).clear().type('945682N') //Driver's License Number (max 30)
    cy.get(selectorsList.dateInputField).eq(0).clear().type('2029-02-24')//License Expire Date
    cy.get(selectorsList.dateCloseButton).click()    
    cy.get(selectorsList.activeInputField).eq(8).clear().type('5725')    //SSN
    cy.get(selectorsList.activeInputField).eq(9).clear().type('3216')    //SIN
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain','Succesfully Updated')
    cy.get(selectorsList.toastClose)
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.loginFailConfirmation()
  })
})