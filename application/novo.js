const express = require("express");
const os = require("os");
const app = express();
const port = 80;
const datahora = new Date();
const nodeversion = process.versions.v8;
const hostname = os.hostname();
var http = require("http");

var options = {
  host: 'api.ipify.org',
  port: 80,
  path: '/',
  method: 'GET'
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  })
  
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');

app.get("/challenge",(req, res) => {
  let returndate = [
      {
          timestamp: `${datahora}`,
          hostname: `${hostname}`,
          engine: `${nodeversion}`,
          ip_visitor: `${req.write}`
      }
  ]
  res.json(returndate);
  }
);

app.listen(port, () => console.log(`Server running on port:${port}`));