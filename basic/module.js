const fs = require("fs");
const http = require("http");
// Question Number 1
const QNumber1 = async () => {
  const value = await fs.promises.readFile("example.txt");
  console.log(value.toString());
};
// QNumber1();

// Question Number 2

const QNumber2 = async () => {
  await fs.promises.writeFile("example.txt", "Hello World");
};
// QNumber2();

// Question Number 3

// const hostName = "127.0.0.1";
// const port = "8080";
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Context-Type": "text/plain" });
//   res.end("Hello World");
// });

// server.listen(port, hostName, () => {
//   console.log(`server running at http://${hostName}:${port}`);
// });

// Question Number 4

const hostName = "127.0.0.1";
const port = "8080";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Context-Type": "text/plain" });
});

server.listen(port, hostName, () => {
  console.log(`server running at http://${hostName}:${port}`);
});
