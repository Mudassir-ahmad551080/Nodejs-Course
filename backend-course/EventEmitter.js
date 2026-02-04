// // import EventEmitter from 'events'

// // const event = new EventEmitter();

// // event.on('greet',(name,age)=>{
// //     console.log(`hello my name is ${name} and age is ${age}`)
// // });

// // event.emit('greet','mudassir',20)
// // event.emit('greet','anas',21)

// // event.once('onlyonce',()=>console.log("This event is trigger only once"));

// // event.emit("onlyonce");
// // event.emit("onlyonce");
// // event.emit("onlyonce");
// // event.emit("onlyonce");
// // const callback = ()=>{
// //     console.log("function is trigger")
// // }
// // event.on('removelistner',callback)
// // event.removeListener('removelistner',callback)
// // event.emit('removelistner')

// import http, { Server } from 'http'

// const creatserver = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(`
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Hello this is the web page This is my hello first project ${setInterval(() => {
//           console.log(new Date().toLocaleString())
//         //  console.log("hello")
//     }, 7000)}</h1>
//     <input type="text"  placeholder="Enter your name and my father name is ulas khan">
//      <button>click</button>
//      <button>Another button</button>
// </body>
// </html>
        
//         `)
//         res.end()
// });

// creatserver.listen(3000,()=>{
//     console.log('server is running on port http://localhost:3000')
// })