// destructuring is a faster or easy way to access/unpack variables from arrays, objects (later videos).
const fruits = ['oranges', 'banana', 'lemon'];
const friends = ['john','peter', 'bob','ken','kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1,fruit2,fruit3);

const [john,peter] = friends

console.log (john,peter);

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second, first]= [first, second]

console.log(first, second)