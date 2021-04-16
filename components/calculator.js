export class Calculator {
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