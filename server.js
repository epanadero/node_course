const http = require('http');
const fs = require('fs');
// function rqListener(req, res) {
//     //request & response objects
// }

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    //si la request que escuchamos es / entonces mostramos el botón de submit, en cualquier otro caso mostramos la página principal
    const method = req.method;
    
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    res.end();
    
});

server.listen(3000);
