import userData from '../fixtures/userData.json'
import myInfoData from '../fixtures/myInfoData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
const Chance = require('chance')

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance()

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.dashboardPageConfirmation()
    menuPage.accessMyInfo()
    myInfoPage.updateFields(chance.first(),chance.last(),myInfoData.eId,myInfoData.oId,myInfoData.driversLicense,myInfoData.licenseExpireDate)
    myInfoPage.updateDropdown()
    myInfoPage.submitUpdate()
    myInfoPage.updateConfirmation()
  })
})