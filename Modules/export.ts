let square=(num:number):number=>{
    return (num*num)
}

export {square}  // This syntax exports the square function as a named export. In this case, you must use the exact name square when importing it in another module.



let user=(name:string,email:string,isUser?:boolean):{}=>{
    return {name,email,isUser}
}

export default user // This syntax exports the square function as the default export. When importing a default export, you can choose any name you like for the imported value. It doesn't have to match the original name.
