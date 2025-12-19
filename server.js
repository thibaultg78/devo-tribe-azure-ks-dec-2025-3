const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Déterminer le fichier à servir
  let filePath = req.url === '/' ? 'index.html' : req.url.substring(1);
  
  // Déterminer le type de contenu
  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript'
  };
  const contentType = contentTypes[ext] || 'text/plain';

  // Lire et servir le fichier
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
      res.end(content);
    }
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server running on port ' + port);
});