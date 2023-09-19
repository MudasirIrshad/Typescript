// Practice : 
// Create an abstract class called Animal with properties like name and age. Define an abstract method makeSound() that returns a string. Then, create concrete classes Dog, Cat, and Bird that inherit from Animal. Implement the makeSound() method for each of these concrete classes.


abstract class Animal{
    public name: string;
    public age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    public abstract makeSound(sound:string): string;
}
class Dog extends Animal{
    constructor(name: string, age: number){
        super(name, age);
    }
    makeSound(sound:string): string{
        return sound
    }
}
let dog = new Dog("Dog",15);
let sound=dog.makeSound("Bark")
console.info(dog,sound)