module.exports =  {
    "Cookie Check": function(browser) {
        browser
            .url("https://www.designory.com/")
            .setCookie({
                name    : "acceptsCookies",
                value   : "1",
                domain  : "www.designory.com",
                Path    : "/"
            })
            .url("https://www.designory.com/")

        const Cookie_Container = "#cookie-container > p"
        const Cookie_Button = "#cookie-container > div > button"
        const Cookie_Dismiss = "#cookie-container > button"

        //Verify accepting the cookie notice
        browser.click(Cookie_Button)
        browser.verify.not.textContains(Cookie_Container,"We serve cookies")

        //Verify after clearing the cookies the cookie notice shows up again
        browser.deleteCookies(function() {});
        browser.url("https://www.designory.com/")
        browser.verify.textContains(Cookie_Container,"We serve cookies")

        //Verify that after closing cookies notice with dismiss the notice goes away
        browser.url("https://www.designory.com/")
        //browser.click(Cookie_Dismiss)
        browser.dismissAlert()
        //browser.dismissAlert()
        browser.verify.not.textContains(Cookie_Container,"We serve cookies")
    }
}