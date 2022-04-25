var koa = require('koa');
var app = koa();
var http = require('https');
var a = http.get("https://api.ipify.org?format=json",function(res) {
      var data = "";
      res.on("data", function (chunk) {
            data += chunk;
      });
      res.on('end', function() {
            par = JSON.parse(data);
            console.log(par.ip);

            app.use(function *(){
                this.response.set("userIp",par.ip);
                this.body = "ipadress: "; //this doesn't see par.ip;
            });
            app.listen(8888);
      });
});