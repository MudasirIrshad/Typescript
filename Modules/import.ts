import user, { square } from "./export";
let num:number=2
let sqr= square(num)
console.log(`Square Root of ${num} = ${sqr}\n`);




import myUser from "./export";
let user1=myUser("Mudasir","mudasirirshad47@gmail.com",true);
console.log(user1);

let user2=myUser("Muzammil","muzammilshad47@gmail.com");
console.log(user2);
