export class App {
    constructor() {
        this.htmlManager = new HtmlManager();
        this.calculator = new Calculator();
    }
    start() {
        this.htmlManager.initialSetUp(this.calculator);
    }
}
