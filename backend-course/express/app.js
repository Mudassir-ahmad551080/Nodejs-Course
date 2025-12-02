import express from 'express';
import path from 'path';

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/',(req,res)=>{
    const abspath = path.resolve('views/index.html')
    res.sendFile(abspath)
});

app.post('/submit',(req,res)=>{
    const {name,email}=req.body;
    console.log(name,email)
    res.send("Form is submitted")
});

app.use((req,res)=>{
    const abspath = path.resolve('views/404.html');
    res.status(404).sendFile(abspath)
});

app.listen(3001);