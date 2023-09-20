// two ways to write array type syntax:
let arr:Array<number>=[10,20,30,40,50,60]// first way

let arr2:number[]=[1,2,3] // second way (RECOMMENDED ONE) 

// lets find the sum of array items
let sum:number=0
for (let i of arr){
    sum += i
}
console.log(`sum of array: [${arr}] is ${sum}`);
