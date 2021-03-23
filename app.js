document.addEventListener("DOMContentLoaded", function (eventInfo) {
    let allButtons = document.querySelectorAll(".clickable");//ALL DIVS  ARE HERE

    let arrayNumbers = [];
    let operator = "";
    let firstNumber = 0;
    let secondNumber = 0;
    let result = 0;
    let blackScreen = document.querySelector(".zero");
    let dot = "";

    let displayed = 0;

    for (let i = 0; i < allButtons.length; i++) {
        let element = allButtons[i];//div
        element.addEventListener("click", function (event) {
            let clickedElement = event.target.innerText; // "5","6"","-","="..
            
            if (isNaN(clickedElement)) {//we have string
                switch (clickedElement) {
                    case "+":
                        operator = "+";
                        firstNumber = Number(arrayNumbers.join(""));//create the first number
                        blackScreen.innerText = firstNumber;
                        arrayNumbers = []; //empty the array when we have "+"
                        break;
                    case "-":
                        operator = "-";
                        firstNumber = Number(arrayNumbers.join(""));//create the first number
                        blackScreen.innerText = firstNumber;
                        arrayNumbers = []; //empty the array when we have "-"
                        break;
                    case "*":
                        operator = "*";
                        firstNumber = Number(arrayNumbers.join(""));//create the first number
                        blackScreen.innerText = firstNumber;
                        arrayNumbers = []; //empty the array when we have "*"
                        break;
                    case "/":
                        operator = "/";
                        firstNumber = Number(arrayNumbers.join(""));//create the first number
                        blackScreen.innerText = firstNumber;
                        arrayNumbers = []; //empty the array when we have "/"
                        break;
                    case ".":  //NEED HELP HERE
                        dot = ".";
                        arrayNumbers.push(dot);
                        firstNumber = Number(arrayNumbers.join(""));//create the first number
                        blackScreen.innerText = firstNumber;             
                        break;
                    case "AC":
                        arrayNumbers = [];
                        blackScreen.innerText = 0;
                        break;
                    case "DEL": //NEED HELP HERE
                        arrayNumbers.pop();//remove the first element
                        blackScreen.innerText = Number(arrayNumbers.join(""));
                        break;
                    case "=":
                        secondNumber = Number(arrayNumbers.join(""));
                        blackScreen.innerText = secondNumber;
                        arrayNumbers = [];
                        if (operator === "+") {
                            result = firstNumber + secondNumber;
                            operator = "";;
                            blackScreen.innerText = (`${firstNumber} + ${secondNumber} = ${result}`);
                        } else if (operator === "-") {
                            result = firstNumber - secondNumber;
                            operator = "";
                            blackScreen.innerText = (`${firstNumber} - ${secondNumber} = ${result}`);
                        } else if (operator === "*") {
                            result = firstNumber * secondNumber;
                            operator = "";
                            blackScreen.innerText = (`${firstNumber} * ${secondNumber} = ${result}`);
                        } else if (operator === "/") {
                            result = firstNumber / secondNumber;
                            operator = "";
                            blackScreen.innerText = (`${firstNumber} / ${secondNumber} = ${result}`); 
                        } 
                        break;      
                }
            } else {                         //we have number
                let number = Number(clickedElement);
                arrayNumbers.push(number);
                displayed = Number(arrayNumbers.join(""));
                blackScreen.innerText = displayed;

            }
            console.log(arrayNumbers)

        });


    }

});