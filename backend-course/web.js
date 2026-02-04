// const http = require('http')
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//   fs.readFile('web/web.html','utf-8',(error,data)=>{
//     if(error){
//         res.writeHead(500,{'Content-Type':'text/html'})
//         res.writable("internel server error");
//         res.end()
//         return
//     }
//     res.writeHead(201,{'Content-Type':'text/html'})
//     res.write(data);
//     res.end();

//   })
// });

// server.listen(3000)

import {add,multiply} from './pathModule.js'
console.log(add(2,3));
console.Console(multiply(3,4))