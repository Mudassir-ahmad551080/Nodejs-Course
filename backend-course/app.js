const http = require('http');

const server = http.createServer((req,res)=>{
     if(req.url==='/name'){
        res.end("name is mudassir")
     }
     else if( req.url=='/helo'){
        res.end('hello')
     }
     else{
            res.setHeader("Content-Type","text/html");
        res.write(
        `
        <html>
            <header>
                <body>
                  <h1>Hello my name is mudassir</h1>
                  <button>Click</button>
                </body>
            </header>
        </html>
        `
    )
     }
    
    res.end()
});

server.listen(3000)