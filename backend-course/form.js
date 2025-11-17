const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    fs.readFile('web/form.html','utf-8',(error,data)=>{
      
        if(error){
        res.writeHead(500,{'content-type':'text/plain'})
          res.end("inter server error");
          return
        }
          res.writeHead(200,{'content-type':'text/html'})
        if(req.url=='/'){
            res.write(data);
        }
        else if(req.url == '/submit'){
          let bodydata = []
            req.on('data',(chunk)=>{
              bodydata.push(chunk)
            });
             req.on('end',()=>{
              let rawdata = Buffer.concat(bodydata).toString();
              let readbledata = querystring.parse(rawdata)
              console.log(readbledata)
             })
            res.write('<h1>form submitted successfuly</h1>');
        }
    res.end()
    });
})

server.listen(3000)