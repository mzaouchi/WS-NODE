const {Multi,Sous} = require('./ModuleLocal')
// const Sous = require('./ModuleLocal')
// console.log('Hello Node')

// const Sum=(a,b)=>{
//     return a+b
// }
// console.log(process.argv)
// console.log(Sum(+process.argv[2],+process.argv[3]))
// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))

console.log(Multi(Number(process.argv[2]),Number(process.argv[3])))
console.log(Sous(Number(process.argv[2]),Number(process.argv[3])))


