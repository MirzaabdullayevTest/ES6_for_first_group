// ES5
/*
boolean
number
string
array
object
undefined
null
*/

/*
var
*/

/*
function
if else
switch case
for
setTimeout
*/

/*
&&
||
!=
*/

/* ========================== ES6 */
// var color = 'black'
// color = 'red'
// console.log(color);

// let const 
// for (let i = 0; i <= 4; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
// }

// let color = 'black'
// color = 'white'
// console.log(color);

// const ====================
// const id = 'AB1569889'
// // id = 'AB645454'
// console.log(id);

// const array = [2, 5]
// const obj = { a: 5 }
// array.push(15)
// obj.b = 8
// obj.c = -15
// obj.a = 0
// console.log(array);
// console.log(obj);

// =======================> arrow function

// function calc(a, b) {
//     return a + b
// }

// let calcAB = function () {
// return a + b
// }

// let arrowFunc = (a, b) => {
//     return a + b
// }

// let arrowFunc = (a, b) => a + b
// console.log(arrowFunc(5, 6));

// let arrowFunc = a => a
// console.log(arrowFunc(5));

// =====================> object

// let obj = {
//     name: 'Jack',
//     age: 25,
//     location: 'NY',
//     family: {
//         wife: 'Karry',
//         son: 'Lo'
//     }
// }

// let name = obj.name
// let age = obj.age
// let location = obj.location

// let { name, age, location, family: { wife } } = obj
// // name = 'Tom'
// wife = 'Yulia'
// console.log(wife);

// =====================> array
// let arr = ['Karl', 25, 'Tokio', { job: 'Dev', salery: 50000 }]

// // let name = arr[0]
// // let age = arr[1]

// let [name, age, location, { salery: money }] = arr

// console.log(money);

// name = 'Geyts'

// console.log(name, age, location);

// let arr = ['London', 'Paris', 'Tokio', 'Tashkent']

// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i]);
// }

// let [city] = arr
// console.log(city);

// arr.forEach(element => {
//     console.log(element);
// });

// ==============================> assetsatsivniy massivlar
// let users = [
//     { name: 'Tom', age: 52, nickname: 'Tommy' },
//     { name: 'Jim', age: 20, nickname: 'Jimmy' },
//     { name: 'Con', age: 70, nickname: 'Bill Gates' },
// ]
// users.forEach(user => console.log(user.nickname))
