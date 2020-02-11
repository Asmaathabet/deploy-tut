const repos = require("../repos.json");
const handleHome = require("./handleHome");
const handleDwyl = require("./handleDwyl");
const handlePublic = require("./handlePublic");

const handler = (req, res) => {
  const url = req.url;
  console.log("URL: ", url);

  if (url === "/" || url === "/fac") {
    handleHome(req, res);
  } else if (url === "/dwyl") {
    handleDwyl(req, res);
  } else if (url === "/api/repos/fac") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(repos.fac));
  } else if (url === "/api/repos/dwyl") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(repos.dwyl));
  } else if (url.includes("public")) {
    handlePublic(req, res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 server error");
  }
};

module.exports = handler;
