const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    // if(method === 'GET') {
    //     response.end('<h1>Hello!</h1>');
    // }
 
    // if(method === 'POST') {
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body);

    //         response.end(`<h1>Hai, ${name}!</h1>`);
    //     })

    // }


    if (url == '/'){
        if (method == 'GET'){
            response.end('<h1>Hello! this is homepage</h1>');
        } else {
            response.end('<h1>Method not allowed</h1>');
            response.statusCode = 400;
        }
    } else if (url == '/about') {
        if (method == 'GET'){
            response.end('<h1>About us page</h1>');
        } else if (method == 'POST'){
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Hai, ${name}! you are in about page</h1>`);
            });
        }
    } else {
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }

};
 
const server = http.createServer(requestListener);
 
const port = 5050;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});