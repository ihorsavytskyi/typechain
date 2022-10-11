// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }

class Human1 {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const anton = new Human1('Anton', 28, 'man')

const sayHi = (person: Human1): string => `Hi, ${person.name}. You are ${person.age} and you are ${person.gender}`;

console.log(sayHi(anton));

export {}