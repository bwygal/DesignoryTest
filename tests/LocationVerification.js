module.exports =  {
    "Location Verification": function(browser) {
        const Find_Us = "#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(1) > div > p"
        const Map_Location = "#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(1) > div > a > img"
        const H1 = "#body > div.immersive-hero > div.immersive-content-box > div > h1"
        const Phone_Number = "#body > div.container.location-detail > div > div.grid-12.grid-md-5.grid-xl-6 > div > div:nth-child(2) > div > p"
        const H2 = "#body > div.container.location-detail > div > div.grid-12.grid-md-7.grid-xl-6 > h2"

        browser.url("https://www.designory.com/locations/chicago")
        browser.verify.textContains(H1,"CHI")
        browser.verify.textContains(Phone_Number,"+1 312 729 4500")
        browser.verify.attributeEquals(H2,"font-size","40px")
        browser.verify.attributeEquals(Map_Location,"img src","https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY")
    }
}