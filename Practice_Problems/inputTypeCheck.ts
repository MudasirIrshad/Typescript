let input:(string|number|boolean)
input="Mudasir"
if(typeof(input)=="string"){
    console.log("Your input is String")
}
else if(typeof(input)=="number"){
    console.log("Your Input is a number")
}
else if(typeof(input)=="boolean"){
    console.log("Your input is Boolean")
}
else{
    console.log("Your input is of other type or null");
    
}