// console.log('A')
// function fetchData(callback){
//     setTimeout(()=>{
//         callback('Data From Server');
//     }, 2000)

//     {
//         console.log('Hello')
//     } ;
// }

// fetchData((data) =>{
//     console.log(data)
// })
// console.log('B')


// function PromiseReturn() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data From Server')
//             // reject('Error')
//         }, 3000);
//     })
// }
// PromiseReturn().then(data => console.log(data))
// .then(() => { console.log('This is actual data from server') })
// .catch((error) => {
//     console.log(error)
// })


original = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        zip: '4362-A',
        country: 'USA'   
    }
}

console.log(original)
const shallowCopy = {...original}
console.log(shallowCopy)

shallowCopy.name = 'Salahuddin';
// shallowCopy.address.street = '456 Main St';
console.log(shallowCopy)

console.log(original.address.street === shallowCopy.address.street)
console.log(original.name === shallowCopy.name)

const deepCopy = JSON.parse(JSON.stringify(original));

console.log(deepCopy)
deepCopy.name = 'Alex'
deepCopy.address.street = 'Ayaz Gul Street'
console.log(original.address.street === deepCopy.address.street)
console.log(original.name === deepCopy.name)

console.log('Hello World')
console.log('This is the second line i have been adding after the commiting')
console.log('This line has been added by the second branch')