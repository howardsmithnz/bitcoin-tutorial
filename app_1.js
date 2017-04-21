var http = require("http");
var request = require("request");

http.createServer(function(req, res) {
    var price;
    request({
        url: "https://blockchain.info/stats?format=json",
        json: true
    }, function(error, response, body) {
        price = body.market_price_usd;
        console.log(price);
        res.end("Bitcoin price in US Dollars: " + price);
    });
    
}).listen(8080, console.log("Server starting on port 8080")); 