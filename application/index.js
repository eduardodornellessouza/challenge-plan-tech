const express = require("express");
const os = require("os");
const app = express();
const port = 80;
const datahora = new Date();
const nodeversion = process.versions.v8;
const hostname = os.hostname();
const http = require("http");

function pegaporradoip () {
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
        resp.on('data', function(ip) {
            console.log(ip);
        });
      });

}

app.get("/challenge",(req, res) => {
    pegaporradoip();  
    let returndate = [
        {
            timestamp: `${datahora}`,
            hostname: `${hostname}`,
            engine: `${nodeversion}`,
            visitorip: pegaporradoip()
        }
    ]
    res.json(returndate);
    }
);

app.listen(port, () => console.log(`Server running on port:${port}`));