abstract class Student{
    public name: string;
    public roll_number: number;
    private _grade: number;
    constructor(name: string, roll_number: number, grade: number){
        this.name = name;
        this.roll_number = roll_number;
        this._grade = grade;
    }
}
class Newstudent extends Student{
    constructor(name: string, roll_number: number, grade: number){
        super(name, roll_number, grade);
    }
}

let s1=new Newstudent("Mudasir Irshad",55945,3.4);
console.log(s1);
s1.name = "Irfan Khan";
s1.roll_number = 1001;
// s1.grade=3.00 // We can't access grade beacuse grade is private variable and only accessible in the class