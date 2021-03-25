//import User from "./classesjs.js";//this is for google

let User = require("./classesjs.js");//this is for nodejs

//we create a new object of type User (the class User)
let nina = new User("nina", "nina.stoqnova@abv.bg");//aguments for the constructor

console.log(nina.getInfo());//we get the info for nina as an object

nina.enrollCourse("React Bootcamp");
nina.enrollCourse("Angular Bootcamp");

console.log(nina.getCouseList()); // we get an array with the course list

let courses = nina.getCouseList();//we save the list in a variable

courses.forEach((c) => console.log(c));//we get the list as a single line

