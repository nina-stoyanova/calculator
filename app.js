document.addEventListener("DOMContentLoaded", function (eventInfo) {

    class HtmlManager {
        constructor() {
            this.blackScreen = document.querySelector(".zero");//property of the class

        }
        getAllButtons() {
            return document.querySelectorAll(".clickable");// ["5","6"","-","="]..
        }
        initialSetUp(calculatorObject) {
            for (let i = 0; i < this.getAllButtons().length; i++) {
                let element = this.getAllButtons()[i];//div
                element.addEventListener("click", (event) => { //instead of function (event), lock this 
                    let clickedElement = event.target.innerText; // send to Calculator object
                    let forDisplay = calculatorObject.receiveMessage(clickedElement); //get the return string from Calculator
                    this.blackScreen.innerText = forDisplay;// send it to the black screen
                })
            }
        }
    }


    class Calculator {
        constructor() {
            this.arrayNumbers = [];
            this.operator = "";
            this.firstNumber = 0;
            this.secondNumber = 0;
            this.displayed = 0;
            this.dot = "";
            this.result = 0;

        }
        receiveMessage(clickedElement) {//"5","6"","-","="
            if (isNaN(clickedElement)) {//we have string
                switch (clickedElement) {
                    case "+":
                        this.operator = "+";
                        this.firstNumber = Number(this.arrayNumbers.join(""));//create the first number
                        this.displayed = this.firstNumber;
                        this.arrayNumbers = []; //empty the array when we have "+"
                        break;
                    case "-":
                        this.operator = "-";
                        this.firstNumber = Number(this.arrayNumbers.join(""));//create the first number
                        this.displayed = this.firstNumber;
                        this.arrayNumbers = []; //empty the array when we have "-"
                        break;
                    case "*":
                        this.operator = "*";
                        this.firstNumber = Number(arrayNumbers.join(""));//create the first number
                        this.displayed = this.firstNumber;
                        this.arrayNumbers = []; //empty the array when we have "*"
                        break;
                    case "/":
                        this.operator = "/";
                        this.firstNumber = Number(this.arrayNumbers.join(""));//create the first number
                        this.displayed = this.firstNumber;
                        this.arrayNumbers = []; //empty the array when we have "/"
                        break;
                    case ".":  //NEED HELP HERE
                        this.dot = ".";
                        this.arrayNumbers.push(dot);
                        this.firstNumber = Number(this.arrayNumbers.join(""));//create the first number
                        this.displayed = this.firstNumber;
                        break;
                    case "AC":
                        this.arrayNumbers = [];
                        this.displayed = 0;
                        break;
                    case "DEL": //NEED HELP HERE
                        arrayNumbers.pop();//remove the first element
                        this.displayed = Number(this.arrayNumbers.join(""));
                        break;
                    case "=":
                        this.secondNumber = Number(this.arrayNumbers.join(""));
                        this.displayed = this.secondNumber;
                        this.arrayNumbers = [];
                        if (this.operator === "+") {
                            this.result = this.firstNumber + this.secondNumber;
                            this.operator = "";;
                            this.displayed = (`${this.firstNumber} + ${this.secondNumber} = ${this.result}`);
                        } else if (this.operator === "-") {
                            this.result = this.firstNumber - this.secondNumber;
                            this.operator = "";
                            this.displayed = (`${this.firstNumber} - ${this.secondNumber} = ${this.result}`);
                        } else if (this.operator === "*") {
                            this.result = this.firstNumber * this.secondNumber;
                            this.operator = "";
                            this.displayed = (`${this.firstNumber} * ${this.secondNumber} = ${this.result}`);
                        } else if (this.operator === "/") {
                            this.result = this.firstNumber / this.secondNumber;
                            this.operator = "";
                            this.displayed = (`${this.firstNumber} / ${this.secondNumber} = ${this.result}`);
                        }
                        break;
                }
            } else {                         //we have number
                let number = Number(clickedElement);
                this.arrayNumbers.push(number);
                this.displayed = Number(this.arrayNumbers.join(""));
            }
            return this.displayed;
        }


    }

    class App {
        constructor() {
            this.htmlManager = new HtmlManager();
            this.calculator = new Calculator();
        }
        start() {
            this.htmlManager.initialSetUp(this.calculator);
        }
    }

    let app = new App();
    app.start();




    function myUnitTest() {

        let calculatorObject = new Calculator();
        let result = calculatorObject.receiveMessage("1");
        if (result != "1") {
            throw new Error("Error");  //when you raise an error
        }
        result = calculatorObject.receiveMessage("+");
        if (result != "+") {
            throw new Error("Error");  //when you raise an error
        }
        result = calculatorObject.receiveMessage("2");
        if (result != "2") {
            throw new Error("Error");  //when you raise an error
        }
        result = calculatorObject.receiveMessage("=");
        if (result != "1+2=3") {
            throw new Error("Error");  //when you raise an error
        }


    }

    // myUnitTest();




});






