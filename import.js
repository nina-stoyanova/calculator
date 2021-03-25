//In order to import and export things you have to link the Import file to the HTML + add type-"module"

//// 1. IMPORT A SINGLE THING
// import { double } from "./export.js";
// console.log(double(5));





//// 2. IMPORT BY DEFAULT IN TWO DIFFERENT WAYS
// import { default as bottle } from "./export.js";
// bottle();

// import bottle from "./export.js";
// bottle();





//// 3. IMPORT A GROUP OF THINGS

// import { test, name } from "./export.js";
// console.log(test(5));
// console.log(name);




//// 4. RENAME IMPORT THING

// import { test as doubleTest, name } from "./export.js";
// console.log(doubleTest(5));
// console.log(name);




//// 5. IMPORT ALL THINGS THAT ARE FOR EXPORT

// import * as Utils from "./export.js";

// console.log(Utils.name);
// console.log(Utils.test(5));