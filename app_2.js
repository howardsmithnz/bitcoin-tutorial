var express = require("express");
var request = require("request");

var app = express()

request({
    url: "https://blockchain.info/stats?format=json",
    json: true
    },
    function(error, response, body) {
        btcPrice = body.market_price_usd;
        btcBlocks = body.n_blocks_total;
    }
);

app.get("/", function(req, res) {
    res.send("Bitcoin to the moon: " + btcPrice);
});

app.get("/block", function(req, res) {
    // res.send("Current block height: " + btcBlocks);
    res.sendFile(__dirname + "/index_2.html");
})

app.listen(8080, function() {
    console.log("Server is GO!")
})