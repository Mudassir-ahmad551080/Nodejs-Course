import express from 'express'

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>res.send("This is the Slash Route"));

app.get('/user',(req,res)=>res.send1("this is the user page"));

app.use((error,req,res,next)=>res.status(error.status || 500).send("Try after sometime"))


app.listen(PORT,()=> console.log("server is running on port 3000"))
