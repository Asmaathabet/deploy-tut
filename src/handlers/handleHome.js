const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "..", "public", "fac.html"),
    "utf8",
    (err, file) => {
      /* istanbul ignore if */
      if (err) {
        console.log(err)
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("server error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      }
    }
  );
};
