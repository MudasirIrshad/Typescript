// A union type in TypeScript allows you to have elements in an array with multiple specified types.

let arr:(string | number)[]=["Mudasir",55945,"Irfan",6960,"Moeed"] 


for(let i of arr){
    console.log(i);
    /*
        OUTPUT: Mudasir,
                55945,
                Irfan,
                6960,
                Moeed
    */
}

// Example: Creating a function that takes an array with a union type and returns a formatted string.

let id = (detail:(string|number)[]):string =>{
    return `Name of Student: ${detail[0]}\nStudent ID: ${detail[1]}\nDepartment of Student: ${detail[2]}\nCGPA of Student: ${detail[3]}`
}
console.log(id(["Mudasir",55945,"Software Engineering",3.00])); // Calling the function with an array of mixed types and displaying the result.