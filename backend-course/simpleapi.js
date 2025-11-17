const http = require('http');

const users = [
    {
        name:"mudassir",
        age:12,
        email:"mudassir@gmail.com"
    },
     {
        name:"anas",
        age:67,
        email:"anas@gmail.com"
    },
     {
        name:"khan",
        age:19,
        email:"khan@gmail.com"
    },
     {
        name:'ibrahim',
        age:23,
        email:'ib@gmail.com'
    }
]
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.write(JSON.stringify(users));
    res.end()
});

server.listen(3000)
