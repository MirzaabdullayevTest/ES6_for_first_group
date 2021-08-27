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

// ========================================== $ string
// const person = {
//     name: 'Jack',
//     age: 20,
//     number: 998975552233
// }

// const { name, age, number } = person

// // console.log('Name is ' + name + ' ' + 'Age is ' + age + ' ' + 'Number is ' + number);
// console.log(`Name is ${name}, age = ${age}, number = ${number}`);

//========================================== spread operatori // rest
// const numbers = [5, 6, 2, 3, 10]

// const calc = (a, b, c, ...rest) => {
//     return rest
// }

// // const sum = calc(numbers[0], numbers[1])
// const sum = calc(...numbers)

// // console.log(`Natija: ${sum}`);
// console.log(sum);

// const numbers = [5, 6, 2, 3, 10]

// // numbers.forEach((val, index) => {
// //     console.log(val);
// // })

// console.log(...numbers);

// const person = {
//     name: 'Tom',
//     age: 65
// }

// const common = {
//     number: 99898,
//     job: 'Solar copmany'
// }

// const obj = {...person, ...common}
// console.log(obj.age);

// rest object ===========
// const person = {
//     name: 'Tom',
//     age: 65
// }

// const common = {
//     number: 99898,
//     job: 'Solar copmany'
// }

// const obj = { ...person, ...common }

// const { name, ...rest } = obj

// console.log(rest);

// Class ========== 

// function Car(marka) {
//     this.marka = marka

//     console.log(this.marka);
// }

// const ford = new Car('Ford')

// class Car {
//     constructor(marka, year) {
//         this.marka = marka
//         this.year = year
//     }
//     logger() {
//         console.log(this.marka, this.year);
//     }
// }
// const car = new Car('BMW', 1990)
// car.logger()

// ================================== default parametrlar
// const createPost = (str1, str2 = 'Default text', date = new Date().toDateString()) => {
//     return {
//         str1: str1,
//         str2: str2,
//         // date: date || new Date().toLocaleDateString()
//         date: date
//     }
// }

// const post = createPost('Hello world')
// console.log(post);

// map ------------------------------------

// const arr = [1, 2, 3, 4, 5, 6]

// arr.map((val, index) => {
//     console.log(val);
// })

// arr.forEach((val, index) => {
//     console.log(val);
// })

//  ================== filter
// const arr = [1, 2, 3, 4, 5, 6]
// const filter = arr.filter((val, index) => {
//     if (val % 2 !== 1){
//         return true
//     }else{
//         return false
//     }
// })

// console.log(filter);

// const users = [
//     { name: 'Jack', age: 18, job: true },
//     { name: 'Tom', age: 50, job: true },
//     { name: 'Alex', age: 60, job: false },
//     { name: 'Martin', age: 10, job: false },
//     { name: 'Riko', age: 12, job: false },
// ]

// const adult = users.filter((val, index) => {
//     if (!val.job) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(adult);

/*

 Client -> Server -> DateBase -> Server -> Client

*/