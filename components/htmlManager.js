export class HtmlManager {
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

