// lets assume we have one class known as "Car" having properties of color, model, engine_cc.

abstract class Car{
    public color: string;
    public model: string;
    public  engine_cc: number;
    constructor(color: string, model: string, engine_cc: number){
        this.color = color;
        this.model = model;
        this.engine_cc = engine_cc;
    }
    public abstract detail():(string | number)
}

// lets assume we have class Toyota which inherits all the properties of the Car class

class Toyota extends Car{
    constructor(color:string,model:string,engine_cc:number){
        super(color, model, engine_cc);
    }
    detail():(string | number){
        return `Color of car: ${this.color} model of car ${this.model} engine cc of car ${this.engine_cc}`
    }
}

let civic=new Toyota("Black","2021",2500)
console.log(civic.detail());
