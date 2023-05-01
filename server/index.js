var express = require('express');
var app = express();

app.get('/user/signup', function (req, res) {
    res.send('{ "response": "Hello From Danil" }');
});

app.get('/user/signin', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/posts?page=1', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
