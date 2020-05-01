var url = require('url');
var http = require('http');

var sizeOf = require('image-size');

var imgUrl = 'https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png';
var options = url.parse(imgUrl);

http.get(options, function (response) {
    var chunks = [];
    response.on('data', function (chunk) {
        chunks.push(chunk);
    }).on('end', function() {
        var buffer = Buffer.concat(chunks);
        console.log(sizeOf(buffer));
    });
});
