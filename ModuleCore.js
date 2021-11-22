// const fs = require('fs')

// console.log('Start')

// // fs.readFile('./A.txt','utf8',(err,data)=>{
// //     if(err){
// //         console.log(err)
// //     }else{
        
// //         console.log(data)
// //     }
  
// // })


// console.log(fs.readFileSync('./A.txt','utf8'))

// console.log('Finish')

const http = require('http')

http.createServer((request,response)=>{
    response.write('<h1>Hassen</h1>')
}).listen(5000)