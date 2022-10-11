const name = "Anton",
    age = 28,
    gender = "man"

const sayHi = (name: string, age: number, gender: string): string => `Hi, ${name}. You are ${age} and you are ${gender}`;

console.log(sayHi(name, age, gender));

export {}