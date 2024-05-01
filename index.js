const http = require('node:http');
const fs = require('node:fs');


const hostname = "127.0.0.1";
const port = 3100;

const server = http.createServer((request, response)=>{
  if(request.method ==='GET' && request.url ==='/products'){

   fs.readFile('FilesDB/products.json', {encoding: 'utf-8'}, (error, data)=>{

    
    if(error){
      console.log('unable to read file!');
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.end('Resource Not Found');
    }else{
      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(JSON.parse(data)));      
    }
   })
   
   

  }else{
    response.statusCode = 403;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`${request.method} Request is Not Supported Yet!`);

  }


});





server.listen(port, hostname, ()=>{
  console.log(`Alex21C Server running at http://${hostname}:${port}/`)
});
