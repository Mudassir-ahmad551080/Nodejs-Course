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
    if(name ==  'mudassir' && email == "mudassir@gmail.com"){
        console.log(`the name is  correct ${name}`)
        res.send("Form is submitted")
    }
    else{
        res.send("wrong username or password")
    }
    
});

app.use((req,res)=>{
    const abspath = path.resolve('views/404.html');
    res.status(404).sendFile(abspath)
});

app.listen(3001);