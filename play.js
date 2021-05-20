// Javascript módulo 12

//variables
const name = 'Eva';
let age = 29;
const hasHobbies = true;

age = 30;



const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ', and the user has hobbies: ' + 
        userHasHobby 
    );
}

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
//const addRandom = () => 1 + 2;


//console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));

// Javascript módulo 13
/* 
Cambiar var por let, es más moderno
const se utiliza para variables que no van a cambiar 
*/

// Javascript módulo 14

/*
Cambiamos 
function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ', and the user has hobbies: ' + 
        userHasHobby 
    );
}
const summarizeUser = function (xxxx)

se puede quitar la palabra function y añadir, después de los argumentos =>
- es más corto
- es más parecido a node.js
- nos ayuda a debuguear los errores

podemos sustituir

const add = (a, b) => {
    return a + b;
}

por

const add = (a, b) => a + b;

*/

// Javascript modulo 15

const person = {
    name: 'Eva',
    age: 37,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

/*
Esto no le gusta:
greet: () => {
        console.log('Hi, I am ' + this.name);
    }
Mejor así
greet: function() {
        console.log('Hi, I am ' + this.name);
    }
O así:
greet() {
        console.log('Hi, I am ' + this.name);
    }
*/

person.greet();

// Javascript módulo 16

const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
//    console.log(hobby);
//}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

//es mejor utilizar el método map en lugar del for para extraer datos de un array

// Javascript módulo 17

