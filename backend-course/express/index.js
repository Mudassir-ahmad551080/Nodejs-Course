import express from 'express';
import { login } from '../pages/login.js';
import { contact } from '../pages/contact.js';
import about from '../pages/about.js';

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
});
app.get('/login',(req,res)=>{
    res.send(login());
})

app.get('/contact',(req,res)=>{
    res.send(contact());
});

app.get('/about',(req,res)=>{
    res.send(about());
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});