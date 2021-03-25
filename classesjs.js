//classes alone doesn't work, we need to create objects
//classes have a constructor, if you don't create one, it will be created by the class and it will be ampty


class User{
    constructor(name, email){ // expecting from the object to pass a name and email
  //create two properties this.name and this.email:
        this.name = name; //=name is the name passed from the object
        this.email = email;
    } 
     courseList = [];//another property an array

     getInfo(){  //create method / function
         return {name: this.name, email: this.email} //name: is a object key; this.name is refference to the Line 8;
     }
     enrollCourse(name){ //everytime we receive a name, it will be pushed into the array
         this.courseList.push(name) 
     }
     getCouseList(){ //if asked for how many courses, will return the course list
          return this.courseList;
     }
}

module.exports = User;//this is how to export the whole class
 