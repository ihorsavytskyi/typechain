interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Anton",
    age: 28,
    gender: "man"
}

const sayHi = (person: Human): string => `Hi, ${person.name}. You are ${person.age} and you are ${person.gender}`;

console.log(sayHi(person));

export {}