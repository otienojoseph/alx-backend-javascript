const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

module.exports = app;
