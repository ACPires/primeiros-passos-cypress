import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]'
  }
 
  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    cy.get(selectorsList.wrongCredentialAlert)
  })
})