// import express framework
const express = require("express");
// import module 
const os = require("os");
// set express
const app = express();
// set default port
const port = 80;
// set date/time
const datahora = new Date();
// set engine
const nodeversion = process.versions.v8;
// set hostname by os module
const hostname = os.hostname();
// import security package
const http = require("http");
// set ip by visitor from ip package
const ip = require('ip');

// main method
app.get("/challenge",(req, res) => {
    console.log(ip.address());
    res.json(returndate);
    }
);

// response from get no main method
let returndate = [
    {
        timestamp: `${datahora}`,
        hostname: `${hostname}`,
        engine: `${nodeversion}`,
        visitorip: `${ip.address()}`
    }
]

// app listem and console log
app.listen(port, () => console.log(`Server running on port:${port}`));