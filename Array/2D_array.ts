// arrays inside the array is called 2D array

let _2D_array: number[][] =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]
// using nested for..of loop
for (let i of _2D_array){
    console.log(i); // printing whole child arrays of parrent array
    for (let j of i){
        // printing the items/number of child arrays of parent array
        console.log(j);
    }   
}