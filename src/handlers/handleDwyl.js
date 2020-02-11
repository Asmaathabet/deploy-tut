const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "..", "public", "dwyl.html"),
    "utf8",
    (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("server error");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(file);
      }
    }
  );
};
