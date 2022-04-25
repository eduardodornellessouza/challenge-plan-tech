const express = require("express");
const os = require("os");
const app = express();
const port = 80;
const datahora = new Date();
const nodeversion = process.versions.v8;
const hostname = os.hostname();
const http = require("http");
const ip = require('ip');

app.get("/challenge",(req, res) => {
    res.json(returndate);
    }
);

let returndate = [
    {
        timestamp: `${datahora}`,
        hostname: `${hostname}`,
        engine: `${nodeversion}`,
        visitorip: `${ip.address()}`
    }
]

app.listen(port, () => console.log(`Server running on port:${port}`));