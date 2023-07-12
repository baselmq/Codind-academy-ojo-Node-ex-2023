const http = require("http");
const fs = require("fs");
const port = 8000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Users endpoint.");
  } else if (req.url === "trainees") {
    fs.readFile("trainees.html", (error, data) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(error.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
