import express from 'express'

const app = express();
const Port = 3000;
app.set('view engine','ejs')
app.use(express.json());
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.send('Server is starting')
});


app.listen(Port,()=>{
    console.log(`Server is listning on port http://localhost:${Port}`)
})