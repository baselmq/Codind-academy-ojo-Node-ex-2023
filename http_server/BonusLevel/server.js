const http = require("http");
const fs = require("fs");
const path = require("path");

let users = [];
const trainees = [
  { name: "John", age: 25 },
  { name: "Emma", age: 28 },
  { name: "James", age: 23 },
];

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/users") {
    if (method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(users));
    } else if (method === "POST") {
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
  } else if (url === "/trainees") {
    if (method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(trainees));
    } else {
      res.statusCode = 405;
      res.end("Method Not Allowed");
    }
  } else if (url === "/image.jpg") {
    // Serve the image file
    const imagePath = path.join(__dirname, "public", "image.jpg");
    fs.readFile(imagePath, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.setHeader("Content-Type", "image/jpeg");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else if (url === "/styles.css") {
    // Serve the CSS file
    const cssPath = path.join(__dirname, "public", "styles.css");
    fs.readFile(cssPath, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.setHeader("Content-Type", "text/css");
        res.statusCode = 200;
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Page not found.");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
