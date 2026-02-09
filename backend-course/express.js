// import express from 'express'
// const app = express();

// app.use(express.json());
// const PORT = 3000;
// const users = [
//     {id:1,name:"mudassir",age:23},
//     {id:2,name:"anas",age:22},
//     {id:3,name:"haris",age:28},
//     {id:4,name:"fahim",age:20},
// ]

// // app.get('/',(req,res)=>{
// //     res.send(`<h1>Hello from Home page<h1/>`)
// // });

// // app.get('/about',(req,res)=>{
// //     res.send("this is the about page")
// // });

// // app.get('/search',(req,res)=>{
// //     const {items} = req.query;
// //     console.log(`Your search is ${items}`);
// //     res.send(`Your search is ${items}`)
// // });

// // app.post('/user',(req,res)=>{
// //     const {name,email} = req.body;
// //     res.send(`you name is ${name} and email is ${email}`)
// // })

// app.get('/',(req,res)=>{
//    res.send(users)
// });

// app.post('/users',(req,res)=>{
//     const newuser = {id:Date.now(),...req.body}
//     users.push(newuser);
//     res.status(201).json(newuser);
// });

// app.put('/users/:id',(req,res)=>{
//      const userid = parseInt(req.params.id)
//      const index = users.findIndex(user=>user.id===userid);
//      console.log(index);
//      if(index === -1){
//         res.send("User not found")
//      }
//      users[index] = {id:userid,...req.body}
//      res.json(users[index])
// })

// app.delete('/users/:id',(req,res)=>{
//     const userid = parseInt(req.params.id)
//      const index = users.findIndex(user=>user.id===userid);
//     users.splice(index,1)
//     res.send("User delete succefully")
// })


// app.listen(PORT,()=>{
//     console.log(`Server is running on Port http://localhost:${PORT}`)
// });

