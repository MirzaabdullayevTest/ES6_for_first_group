/*
    Client -> Server -> DataBase -> Server -> Client
*/

// ------------------------ CallBack
// console.log('Client: Menga userlar ro`yhati kerak.');
// console.log('...');

// setTimeout(() => {
//     console.log('Server: DataBase ga zapros jo`natdim.');
//     console.log('...');

//     setTimeout(() => {
//         console.log('DataBase: Userlari formot qilayapman.');
//         console.log('...');

//         setTimeout(() => {
//             console.log('Server: Hamma foydalanuvchini obrabotka qilayapman.');
//             console.log('...');

//             setTimeout(() => {
//                 console.log('Client: Hamma userlari oldim.');

//             }, 500);
//         }, 1000);
//     }, 500);
// }, 1000);

// ---------------------- Promise // bu funksiya // global f-ya

// console.log('Client: Menga userlar ro`yhati kerak.');
// console.log('...');

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Server: DataBase ga zapros jo`natdim.');
//         console.log('...');

//         resolve()
//     }, 2000);
// })

// promise.then(() => {
//     return db = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // reject('DataBase: Userlari topa olmadim.')

//             let users = [
//                 { name: 'Tom', uid: 'id1' },
//                 { name: 'Jack', uid: 'id2' },
//             ]

//             console.log('DataBase: Userlari formot qilayapman.', users);
//             console.log('...');

//             resolve(users) // uspeshnio
//         }, 1500)
//     });
// })
//     .then((DBUser) => {
//         return serverRes = new Promise(((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('Server: Hamma foydalanuvchini obrabotka qilayapman.');
//                 console.log('...');
//                 // reject('Server: Userlari obrabotka qila olmadim.')

//                 let serverUser = DBUser.map((val) => {
//                     return {
//                         firstName: val.name,
//                         id: val.uid,
//                         timeStamp: new Date().toLocaleDateString()
//                     }
//                 })
//                 resolve(serverUser)
//             }, 3000);
//         }))
//     })
//     .then((resolvedUsers) => {
//         setTimeout(() => {
//             console.log('Client: Hamma userlari oldim.', resolvedUsers);
//         }, 2000);
//     })
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(() => {
//         setTimeout(() => {
//             console.log('Finnally');
//         }, 2500);
//     })

// function sleep(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, ms);
//     })
// }

// sleep(1500).then(() => {
//     console.log('1500');
// })

// sleep(3000).then(() => {
//     console.log('3000');
// })

// all bu oxirgi promise chiqqanicha kutadi / oxirgi promise ni obrabotka qilib kein chiqaradi
// setInterval(() => {
//     let i = 1
//     console.log(i);
//     i++
// }, 1000);

// Promise.all([sleep(1500), sleep(3000), sleep(4000)]).then(() => {
//     console.log('All');
// })

// Promise.race([sleep(1500), sleep(3000), sleep(1000), sleep(800)]).then(() => {
//     console.log('Race');
// })

// try {
//     function calc(a, b) {
//         return a + b
//     }
//     throw 'asd'
// } catch (err) {
//     console.log(err);
// }
