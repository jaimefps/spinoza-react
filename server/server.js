var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, '../build')));
app.listen(PORT, () => console.log("Server listening on port", PORT));