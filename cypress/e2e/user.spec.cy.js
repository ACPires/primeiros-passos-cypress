import userData from '../fixtures/userData.json'
import myInfoData from '../fixtures/myInfoData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()

// const selectorsList = {

// }

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.dashboardPageConfirmation()
    myInfoPage.accessMyInfo()
    myInfoPage.updateFields(myInfoData.firstName,myInfoData.lastName,myInfoData.nickname,myInfoData.eId,myInfoData.oId,myInfoData.driversLicense,myInfoData.licenseExpireDate,myInfoData.sSN,myInfoData.sIN)
    myInfoPage.updateConfirmation()
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.loginFailConfirmation()
  })
})