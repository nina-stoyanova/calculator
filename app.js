
import { App } from "./components/app";
import { Calculator } from "./components/calculator";
import { HtmlManager } from "./components/htmlManager";




document.addEventListener("DOMContentLoaded", function (eventInfo) {


    let app = new App();
    app.start();




    // function myUnitTest() {

    //     let calculatorObject = new Calculator();
    //     let result = calculatorObject.receiveMessage("1");
    //     if (result != "1") {
    //         throw new Error("Error");  //when you raise an error
    //     }
    //     result = calculatorObject.receiveMessage("+");
    //     if (result != "+") {
    //         throw new Error("Error");  //when you raise an error
    //     }
    //     result = calculatorObject.receiveMessage("2");
    //     if (result != "2") {
    //         throw new Error("Error");  //when you raise an error
    //     }
    //     result = calculatorObject.receiveMessage("=");
    //     if (result != "1+2=3") {
    //         throw new Error("Error");  //when you raise an error
    //     }


    // }

    // // myUnitTest();




});






