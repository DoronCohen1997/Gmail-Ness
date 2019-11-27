const Todos = require('./BankLeumiPage');

const todos = new Todos()


//on this Test i want to check that system is stability and works good for long time.

    async pressIconStabilityTest(num) {
        for (let i = 0; i < num; i++) {

        await todos.navigateToGooglePage()
        await todos.loginToGooglePage()
        await todos.inputMailComponent()
        await todos.importantComponent()
        await todos.sendMailComponent()
        await todos.draftsComponent()
        await todos.garbageComponent()
        await todos.TreatmentBelowComponent()
    }

}

//todos.navigateToGooglePage()

todos.loginToGooglePage("tami444@gmail.com" , "tkuurhui") // Functionality Positive Test

todos.loginToGooglePage("tami444@gmail.cokkkk" , "tkuurhuikkkkkk") // Functionality Negative Test

todos.inputMailComponent() //Functionality Positive Test

todos.importantComponent() //Functionality Positive Test

todos.garbageComponent() //Functionality Positive Test

todos.draftsComponent()//Functionality Positive Test

todos.TreatmentBelowComponent() // Functionality Positive Test

todos.sendMailComponent() // Functionality Positive Test



todos.pressIconStabilityTest(100)