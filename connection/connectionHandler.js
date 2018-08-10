const http = require('http');
var ip = require('ip');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        console.log('new connection...request from',ip.address());
        
        res.write('Succeed ...')
        res.end();
    }
    if(req.url==='/api'){
        console.log('API called by modifying url')
        res.write(JSON.stringify(['Shoaib.mehedi@gmail.com','shoaib mehedi']));
        res.end();
    }
});
// server.on('connection', (socket)=>{
//     console.log('new Connection');
// })
server.listen(3000);