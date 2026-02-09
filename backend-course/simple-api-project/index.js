import express from 'express'

const app = express();

const Port = 3000;
app.use(express.json())

let notes = [];


app.get('/notes',(req,res)=>{
    res.json({success:true,data:notes})
});

app.post('/notes',(req,res)=>{
    const {title,content} = req.body;
    const newNote = {
        id:notes.length+1,
        title,
        content
    }
    notes.push(newNote);
    res.status(201).json({success:true,data:newNote})
});

app.get('/note/:id',(req,res)=>{
    const note = notes.find(n=>n.id===parseInt(req.params.id));
    if(!note){
        res.send("Notes not found")
    }
    res.json({success:true,data:note})
});

app.put('/note/:id',(req,res)=>{
     const note = notes.find(n=>n.id===parseInt(req.params.id));
     if(!note){
        res.send("Notes not found")
    }
    const {title,content}= req.body;
    note.title = title|| note.title
    note.content = content || note.content
    res.json({
        success:true,
        message:"Note updated succefullly",
        data:note
    });
});

app.delete('/note/:id',(req,res)=>{
    const noteIndex = notes.find(n=>n.id===parseInt(req.params.id));
    if(noteIndex <=0){
        res.status().json({
            success:false,
            message:"Not not found"
        })
    }
    const deleted = notes.splice(noteIndex,1);
    res.json({
        success:true,
        message:"note is deleted succefully",
        data:deleted
    })
})

app.listen(Port,()=>{
    console.log(`Server is listen on port http://localhost:${Port}`)
})

