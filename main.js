var express = require("express");

var app = express();
var server = app.listen(8080);

function generateRandomString(length) {
    var result = [];
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    return result.join("");
}

app.get("/:size/:perchunk/:delay", function(req, res) {
    var size = Number(req.params.size);
    var sizePerChunk = Number(req.params.perchunk);
    var delay = Number(req.params.delay);

    var i = 0;
    var repetitions = Math.ceil(size / sizePerChunk);

    var sendData = setInterval(function() {
        if (i >= repetitions) {
            res.end();
            clearInterval(sendData);

            return;
        }

        res.write(generateRandomString(sizePerChunk));

        i++;
    }, delay);
});