module.exports =  {
    "Work Menu": function(browser) {
        browser.url("https://www.designory.com/")
        browser.pause(1)

        const BurgerMenu = "#nav-toggle > button > span.navicon"
        browser.click(BurgerMenu)

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

        const Navigation_Menu = "#nav-toggle > button"

        //Verify Menus on Work
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")
        browser.click(Locations_Menu)

        //Navigate to About
        browser.click(About_Menu)

        //Verify Menus on About
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")
        browser.click(Locations_Menu)

        //Navigate to Careers
        browser.click(Careers_Menu)

        //Verify Menus on Careers
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")
        browser.click(Locations_Menu)

        //Navigate to Contact
        browser.click(Contact_Menu)

        //Verify Menus on Contact
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")
        browser.click(Locations_Menu)

        //Navigate to News
        browser.click(News_Menu)

        //Verify Menus on News
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Locations Long Beach
        browser.click(LongBeach_Menu)

        //Verify Menus on Locations Long Beach
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Locations Chicago
        browser.click(Chicago_Menu)

        //Verify Menus on Locations Chicago
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Locations Nashville
        browser.click(Nashville_Menu)

        //Verify Menus on Locations Nashville
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Locations Tokyo
        browser.click(Tokyo_Menu)

        //Verify Menus on Locations Tokyo
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Locations London
        browser.click(London_Menu)

        //Verify Menus on Locations London
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")

        //Navigate to Locations Hong Kong
        browser.click(HongKong_Menu)

        //Verify Menus on Locations Hong Kong
        browser.click(Navigation_Menu)
        browser.verify.containsText(Work_Menu,"WORK")
        browser.verify.containsText(About_Menu,"ABOUT")
        browser.verify.containsText(Careers_Menu,"CAREERS")
        browser.verify.containsText(Locations_Menu,"LOCATION")
        browser.verify.containsText(Contact_Menu,"CONTACT")
        browser.verify.containsText(News_Menu,"NEWS")
        browser.click(Locations_Menu)
        browser.verify.containsText(LongBeach_Menu,"LONG BEACH")
        browser.verify.containsText(Chicago_Menu,"CHICAGO")
        browser.verify.containsText(Nashville_Menu,"NASHVILLE")
        browser.verify.containsText(Tokyo_Menu,"TOKYO")
        browser.verify.containsText(London_Menu,"LONDON")
        browser.verify.containsText(HongKong_Menu,"HONG KONG")
    }

}