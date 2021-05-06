const http = require("http");
// const url = require('url');
var fs = require('fs');
// const bodyParser = require('body-parser');

http.createServer(function (req, res) {
    if (req.method === "GET") {

            res.writeHead(200, { "Content-Type": "text/html" });
             fs.createReadStream("./index.html", "UTF-8").pipe(res);

  }})
  .listen(3000);