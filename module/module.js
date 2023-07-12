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

// const hostName = "127.0.0.1";
// const port = "8080";
// const server = http.createServer((req, res) => {
//   fs.readFile("./file.txt", (err, data) => {
//     if (err) {
//       res.end("Error reading the file");
//     } else {
//       res.end(data);
//     }
//   });
// });

// server.listen(port, hostName, () => {
//   console.log(`server running at http://${hostName}:${port}`);
// });

// Question Number 5

// const path = require("path");

// const joinedPath = path.join("./docs/file1.txt", "./docs/file2.txt");
// console.log(joinedPath);

// Question Number 6

// const url = require("url");

// const urlString = "http://www.example.com:8080/path?query=value#fragment";
// const parsedUrl = url.parse(urlString);

// console.log(parsedUrl);

// Question Number 7

// const os = require("os");
// const homeDirectory = os.homedir();
// console.log(homeDirectory);

// Question Number 8

// const crypto = require("crypto");

// const random = crypto.randomInt(1, 10);
// console.log(random);

// or

// const randomBytes = crypto.randomBytes(1);
// const randomNumber = parseInt(randomBytes.toString("hex"), 16);

// console.log(randomNumber);

// Question Number 9

// const crypto = require('crypto');

// const inputString = 'Hello, World!';
// const hash = crypto.createHash('sha256').update(inputString).digest('hex');

// console.log(hash);

// Question Number 10

// const querystring = require("querystring");

// const parsedQuery = querystring.parse("name=value&key=value2");
// console.log(parsedQuery);

// Question Number 11

// const { exec } = require("child_process");
// const command = "dir";
// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing command: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Command error: ${stderr}`);
//     return;
//   }
//   console.log(`Command output:\n${stdout}`);
// });

// Question Number 12
// const { spawn } = require("child_process");

// const command = "ping";
// const args = ["www.google.com"];

// const child = spawn(command, args);

// child.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on("data", (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// Question Number 13
// const cluster = require("cluster");
// const os = require("os");

// if (cluster.isMaster) {
//   const numCPUs = os.cpus().length;

//   console.log(`Master process is running with PID ${process.pid}`);

//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Worker process ${worker.process.pid} died`);

//     cluster.fork();
//   });
// } else {
//   console.log(`Worker process ${process.pid} is running`);

//   setInterval(() => {
//     console.log(`Worker process ${process.pid} is still running`);
//   }, 1000);
// }

// Question Number 14
// const dns = require("dns");

// dns.resolve4("www.google.com", (error, addresses) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(addresses);
// });

// Question Number 15
// const net = require("net");

// const server = net.createServer((socket) => {
//   console.log("New connection");

//   socket.on("data", (data) => {
//     console.log("Received: " + data);
//     socket.write(data);
//   });

//   socket.on("end", () => {
//     console.log("Connection closed");
//   });
// });

// server.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

// Question Number 16
const net = require('net');

const socket = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server');

  socket.write('Hello');
});

socket.on('data', (data) => {
  console.log('Received: ' + data);
});

socket.on('end', () => {
  console.log('Connection closed');
});
