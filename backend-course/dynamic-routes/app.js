import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    const user = ["mudassir","anas","haris","ilyas"];
    let data = ``
    for(let i =0; i<user.length;i++){
        console.log(user[i]);
        data+= `<li><a href ="user/${user[i]}">${user[i]}</a></li>`
    }
    res.send(data)
});

app.get("/user/:name",(req,res)=>{
    const username = req.params.name;
    console.log(username);
    res.send(`this is the ${username} profile`)
})

app.listen(3002)
