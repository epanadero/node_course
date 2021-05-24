// Javascript module 20

/*
how to work with asynchronouse code
*/

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000 );

console.log('Hello!');
console.log('Hi!');

/*
Template literals
*/

const name = "Eva";
const age = 37;
console.log(`My name is ${name} and I am ${age} years old`);