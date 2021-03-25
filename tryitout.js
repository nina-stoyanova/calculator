class Rectangle {  //creat class with name Rectangle
    constructor(width, height, color){
        console.log("The rectangle class has being created");
        
        this.width = width;
        this.height = height;
        this.color = color
        ;
    }
    
    getArea(){
       return this.width * this.height;
    }

    printDescription(){
        console.log(`I am a rectangle of ${this.width} * ${this.height} and I am ${this.color}`);
    }
}

let myRectangle1 = new Rectangle(3,5,"blue"); //create an object for this class
let myRectangle2 = new Rectangle(10,5,"red");


// console.log(myRectangle1.getArea());
// console.log(myRectangle2.getArea());

myRectangle1.printDescription();
