class MenuPage{
    selectorsList() {
        const selectors = {
            adminMenu: '[href="/web/index.php/admin/viewAdminModule"]',
            pimMenu: '[href="/web/index.php/pim/viewPimModule"]',
            leaveMenu: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeMenu: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentMenu: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            myInfoMenu: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceMenu: '[href="/web/index.php/performance/viewPerformanceModule"]',
            dashboardMenu: '[href="/web/index.php/dashboard/index"]',
            directoryMenu: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceMenu: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimMenu: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzMenu: '[href="/web/index.php/buzz/viewBuzz"]'
        }
        return selectors
    }

    accessAdmin(){
        cy.get(this.selectorsList().adminMenu).click()
    }

    accessPim(){
        cy.get(this.selectorsList().pimMenu).click()
    }

    accessLeave(){
        cy.get(this.selectorsList().leaveMenu).click()
    }

    acessTime(){
        cy.get(this.selectorsList().timeMenu).click()
    }

    accessRecruitment(){
        cy.get(this.selectorsList().recruitmentMenu).click()
    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoMenu).click()
    }

    accessPerformance(){
        cy.get(this.selectorsList().performanceMenu).click()
    }

    accessDashboard(){
        cy.get(this.selectorsList().dashboardMenu).click()
    }

    accessDirectory(){
        cy.get(this.selectorsList().directoryMenu).click()
    }

    accessMaintenance(){
        cy.get(this.selectorsList().maintenanceMenu).click()
    }

    accessClaim(){
        cy.get(this.selectorsList().claimMenu).click()
    }

    accessBuzz(){
        cy.get(this.selectorsList().buzzMenu).click()
    }
}

export default MenuPage