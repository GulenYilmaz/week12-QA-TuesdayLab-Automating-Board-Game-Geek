const { Builder, Capabilities, By } = require("selenium-webdriver") 

const chromedriver= require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() =>{
    await driver.get('https://boardgamegeek.com/')
})
// afterAll(async() => {
//     await driver.quit()
// })
describe("BGG-join", ()=>{
    it("Click on the Join ", async()=>{
        
        
        let joinButton= await driver.findElement(By.xpath('//a[@routerlink="/join"]'))
        await driver.sleep(2000)

        let userNameField= await driver.findElement(By.xpath('//input[@id="join-username"]'))
        await userNameField.sendKeys("NewUserForAutomationTestingByGulen")
        await driver.sleep(2000)

        let emailField= await driver.findElement(By.xpath('//input[@id="join-email"]'))
        await emailField.sendKeys("NewUserForAutomationTestingByGulen@gmail.com")
        await driver.sleep(2000)

        let passwordField= await driver.findElement(By.xpath('//input[@id="join-password"]'))
        await passwordField.sendKeys("NewUserForAutomationTestingByGulen")
        await driver.sleep(2000)


        let createAccountButton = await deriver.findElement(By.xpath('//button[@class="tw-mt-5 btn btn-lg btn-block btn-info"]'))
        await createAccountButton.click()


        let VerifyNewUserFirstNameButton= await driver.findElement(By.xpath('//input[@id="firstName"]'))
        await VerifyNewUserFirstNameButton.sendKeys("NewUserForAutomationTestingByGulen")
        await driver.sleep(2000)

        let VerifyNewUserLastNameButton= await driver.findElement(By.xpath('//input[@id="lastName"]'))
        await VerifyNewUserLastNameButton.sendKeys("NewUserForAutomationTestingByGulen")
        await driver.sleep(2000)

        let saveSettingsButton= await driver.findElement(By.xpath('//button[@class="btn btn-lg btn-info"]'))
        await saveSettingsButton.click()

        
        let newUserName=await driver.findElement(By.xpath('//span[@class="mygeek-dropdown-username text-truncate"]'))

        let newUserName =await verifyUsername.getText()

        expect(newUserName).toContain("NewUserForAutomationTestingByGulen")



    })



})