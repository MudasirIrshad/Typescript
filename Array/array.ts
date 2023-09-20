let studentNames:string[]=["Mudasir","Irfan","Aziz"]

// printing all items of array through for loop
for(let i of studentNames){
    console.log(i);
    }

// Accessing any single item of array

console.log(studentNames[1]); // prints "Irfan" because array indexing starts from 0.

let person1_firstname="Mudasir "
let person1_lastname="Irshad"
let full_name:string[]=["Full name of person 1 is: "+person1_firstname+person1_lastname]

// console.log(full_name[0]);

// if we want to add a new person name so we use push function of array

let person2_firstname="Irfan "
let person2_lastname="Khan"

full_name.push("Full name of person 2 is: "+person2_firstname+person2_lastname)

// now array have 2 items 1st full name of person 1 and 2nd full name of person 2

for(let i of full_name) {
    console.log(i);   
}

// if we want to delete the last person full name in array so we use pop function

full_name.pop();
console.log(full_name); // now have only 1 full name

// there are several functions of array use to find length, delete first item of Array, insert in first index of array etc
