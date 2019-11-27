const SeleniumInfra = require("./SeleniumInfra");

class BankLeumiPage {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    constructor(selenium) {
        this.selenium = new SeleniumInfra()
    }
//this Function Navigate to Google Mail
    async navigateToGooglePage() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
    }
//this Function Login to GMAIL
    async loginToGooglePage(userMail , Password) {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , userMail)
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , Password)
        await this.selenium.clickButton("className" , "RveJvd snByac")
    }
//this Function Press on InputMail Button
    async inputMailComponent() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tami444@gmail.com")
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tkuurhui")
        await this.selenium.clickButton("className" , "RveJvd snByac")

        let inputMail = await this.selenium.findElementBy("xpath" , "//div[@class='aio UKr6le']//*[text()='תיבת דואר נכנס']")

        //div[@class='aio UKr6le']//div[@span='aio UKr6le']

        if (inputMail){

            await this.selenium.clickButton("xpath" , "//div[@class='aio UKr6le']//*[text()='תיבת דואר נכנס']")
        }

        else{
            console.log("Element Not Found")
        }
    }

//this Function Press on TreatmentBelow Button
    async TreatmentBelowComponent() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tami444@gmail.com")
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tkuurhui")
        await this.selenium.clickButton("className" , "RveJvd snByac")

        let TreatmentBelow = await this.selenium.findElementBy("xpath" , "//div[@class='aio UKr6le']//*[text()='לטיפול בהמשך']")

        if (TreatmentBelow){

            await this.selenium.clickButton("xpath" , "//div[@class='aio UKr6le']//*[text()='לטיפול בהמשך']")
        }

        else{
            console.log("Element Not Found")
        }
    }

    //this Function Press on important Button
    async importantComponent() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tami444@gmail.com")
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tkuurhui")
        await this.selenium.clickButton("className" , "RveJvd snByac")

        let important = await this.selenium.findElementBy("xpath" , "//div[@class='aio UKr6le']//*[text()='חשוב']")

        if (important){

            await this.selenium.clickButton("xpath" , "//div[@class='aio UKr6le']//*[text()='חשוב']")
        }

        else{
            console.log("Element Not Found")
        }
    }
    
//this Function Press on send Mail Button
    async sendMailComponent() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tami444@gmail.com")
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tkuurhui")
        await this.selenium.clickButton("className" , "RveJvd snByac")

        let send = await this.selenium.findElementBy("xpath" , "//div[@class='aio UKr6le']//*[text()='נשלח']")

        if (send){

            await this.selenium.clickButton("xpath" , "//div[@class='aio UKr6le']//*[text()='נשלח']")
        }

        else{
            console.log("Element Not Found")
        }
    }

    //this Function Press on drafts Button
    async draftsComponent() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tami444@gmail.com")
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tkuurhui")
        await this.selenium.clickButton("className" , "RveJvd snByac")

        let Drafts = await this.selenium.findElementBy("xpath" , "//div[@class='aio UKr6le']//*[text()='טיוטות']")

        if (Drafts){

            await this.selenium.clickButton("xpath" , "//div[@class='aio UKr6le']//*[text()='טיוטות']")
        }

        else{
            console.log("Element Not Found")
        }
    }

    //this Function Press on garbage Button
    async garbageComponent() {
        await this.selenium.getURL("https://mail.google.com/mail/u/1/#inbox")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tami444@gmail.com")
        await this.selenium.clickButton("className" , "RveJvd snByac")
        await this.selenium.write("className" , "whsOnd zHQkBf" , "tkuurhui")
        await this.selenium.clickButton("className" , "RveJvd snByac")

        let Garbage = await this.selenium.findElementBy("xpath" , "//div[@class='aio UKr6le']//*[text()='אשפה']")

        if (Garbage){

            await this.selenium.clickButton("xpath" , "//div[@class='aio UKr6le']//*[text()='אשפה']")
        }

        else{
            console.log("Element Not Found")
        }
    }


}

module.exports = BankLeumiPage


let BankLeumiTest = new BankLeumiPage();

//BankLeumiTest.navigateToGooglePage()

//BankLeumiTest.inputMailComponent()

//BankLeumiTest.TreatmentBelowComponent()

//BankLeumiTest.importantComponent()

//BankLeumiTest.sendMailComponent()

//BankLeumiTest.draftsComponent()

BankLeumiTest.garbageComponent()

