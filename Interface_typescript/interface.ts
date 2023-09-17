interface myUser{
    name:string;
    age:number;
    gmail?:string; // "?" makes it optional
}

let user:myUser={
    name:"Mudasir Irshad",
    age:21,
    gmail:"mudasirirshad47@gmail.com" // Optional
}

// We can easily any other property in interface 

interface myUser{
    address?:string;
}


let person:myUser={
    name:"Muzammil Irshad",
    age:24,
    gmail:"mudasirshad47@gmail.com",// Optional
    address:"Quetta" // Optional
}