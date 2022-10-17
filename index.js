const fs = require('fs');

const http = require('http');
http.createServer(function(req, res){

    if(req.url === '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                res.writeHead(404, {'Content-type': 'text-html'});
                return res.end('404 not found');
            }else{
                res.writeHead(200, {'Content-type':'text-html'});
                res.write(data);
                return res.end();
            }
        });
    }else if(req.url === '/about'){
        fs.readFile('./about.html', function(err, data){
            if(err){
                res.writeHead(404, {'Content-type':'text-html'});
                return res.end('404 not found');
            }else{
                res.writeHead(200, {'Content-type':'text-html'});
                res.write(data);
                return res.end();
            }
        });
    }else if(req.url === '/contact-me'){
        fs.readFile('./contact-me.html', function(err, data){
            if(err){
                res.writeHead(404, {'Content-type': 'text-html'});
                return res.end('404 not found');
            }else{
                res.writeHead(200, {'Content-type':'text-html'});
                res.write(data);
                return res.end();
            }
        });
    }else{
        fs.readFile('./404.html', function(err, data){
            if(err){
                res.writeHead(404, {'Content-type': 'text-html'});
                return res.end('404 not found');
            }else{
                res.writeHead(200, {'Content-type':'text-html'});
                res.write(data);
                return res.end();
            }
        });
    }

}).listen(8080);