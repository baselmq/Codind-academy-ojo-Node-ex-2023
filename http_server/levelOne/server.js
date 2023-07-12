const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Users endpoint.");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
