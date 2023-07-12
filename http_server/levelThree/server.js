const http = require("http");
const fs = require("fs");

// Array to store users
let users = [];

// Array of trainees
const trainees = [
  { name: "John", age: 25 },
  { name: "Emma", age: 28 },
  { name: "James", age: 23 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(users));
    } else if (req.method === "POST") {
      let requestBody = "";

      req.on("data", (chunk) => {
        requestBody += chunk;
      });

      req.on("end", () => {
        const newUser = JSON.parse(requestBody);
        users.push(newUser);

        res.statusCode = 201;
        res.end("User added successfully");
      });
    } else {
      res.statusCode = 405;
      res.end("Method Not Allowed");
    }
  } else if (req.url === "/trainees") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(trainees));
    } else {
      res.statusCode = 405;
      res.end("Method Not Allowed");
    }
  } else {
    res.statusCode = 404;
    res.end("Page not found.");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
