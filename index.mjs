
import { createServer } from 'http';
import {URL} from 'url';

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((request, response)=>{
  // console.log(request.headers);
  let parsedURL = new URL(`http://${request.headers.host}${request.url}`);
  // console.log(parsedURL);
  let person = parsedURL.searchParams.get('person');
  let greeting = parsedURL.searchParams.get('greeting');    
  let responseData = {
    person,
    greeting
  }
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  if(person && greeting){
    response.end(JSON.stringify(responseData));
  }else{
    response.end('hi there!');
  }
});

server.listen(port, hostname, ()=>{
  console.log(`Alex21C Server running at http://${hostname}:${port}/`)
});