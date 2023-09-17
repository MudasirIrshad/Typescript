
// making "User" as a type which is assigned to the newUser object
type User={
    name:string,
    greet():string //defining function with retrun type string
}

let newUser:User={
    name:"Mudasir",
    greet:function(){
        return `Welcome ${this.name}`;
    }
}

console.log(newUser.greet());