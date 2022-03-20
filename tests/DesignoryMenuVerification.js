module.exports =  {
    "Work Menu": function(browser) {
        browser.url("https://www.designory.com/")
        browser.pause(3)

        const BurgerMenu = "#nav-toggle > button > span.navicon"
        browser.click(BurgerMenu)
        browser.pause(3)

        const Work_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(1) > a"
        const About_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(2) > a"
        const Careers_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(3) > a"
        const Locations_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > a"
        const Contact_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(5) > a"
        const News_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(6) > a"

        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")

        browser.click(Locations_Menu)
        browser.pause(3)

        const LongBeach_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(1) > a"
        const Chicago_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a"
        const Nashville_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(3) > a"
        const Tokyo_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(4) > a"
        const London_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(5) > a"
        const HongKong_Menu = "#body > div.nav-wrapper.scroll > nav > ul > li:nth-child(4) > ul > li:nth-child(6) > a"

        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Work
        browser.click(Work_Menu)
        browser.pause(3)

        //Verify Menus on Work
        browser.click(BurgerMenu)
        browser.click(Locations_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

    }

}