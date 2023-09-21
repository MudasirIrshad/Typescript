type faculty={
    faculty_name: string,
    department_name: string
}
type student={
    student_name: string,
    detail:faculty // declaring nested object in student type object
}

let s1:student = {
    student_name: "Mudasir",
    detail:{
        faculty_name:"Faculty of Information Technology",
        department_name:"Software Engineering"
    }
}

// printing detail of s1 --> student one 
for(let i of [s1]){
    console.log(i)
}