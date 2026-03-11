describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    submitButton: '[type="submit"]',
    pathName: '/web/index.php/dashboard/index',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: '[role="alert"]'
  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'Teste',
      password: 'test'
    }

  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname').should('equal',selectorsList.pathName)
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})