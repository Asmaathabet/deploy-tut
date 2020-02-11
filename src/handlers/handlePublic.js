const fs = require("fs");
const path = require("path");

const mimeTypes = {
  css: "text/css",
  js: "text/js"
};
module.exports = (req, res) => {
  const ext = url.split(".")[1];
  const splitUrl = url.split("/");
  const filePath = path.join(__dirname, "..", "..", ...splitUrl);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal server error</h1>");
    } else {
      res.writeHead(200, { "Content-Type": mimeTypes[ext] });
      res.end(file);
    }
  });
};
