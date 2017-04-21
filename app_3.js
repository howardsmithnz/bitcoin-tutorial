// from Youtube user m1xolyd1an - lesson 3
var bitcore = require("bitcore-lib");
var bodyparser = require("body-parser");
var express = require("express");
var request = require("request");

var app = express()

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index_3.html");
});

app.post("/wallet", function(req, res) {
    var brainsrc = req.body.brainsrc;
    console.log(brainsrc);
    var input = new Buffer(brainsrc);
    var hash = bitcore.crypto.Hash.sha256(input);
    var bn = bitcore.crypto.BN.fromBuffer(hash);
    var pk = new bitcore.PrivateKey(bn).toWIF();
    var addy = new bitcore.PrivateKey(bn).toAddress();
    res.send();
})

app.listen(8080, function() {
    console.log("Server is GO!")
})