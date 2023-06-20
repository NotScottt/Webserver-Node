// Imports //
const express = require("express")
const path = require("path")
const app = express()
const port = 3000

///////////////////////////////////////////////


//mySQL import
var mysql = require("mysql")

//mySQL Connection settings
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'autoverleih'
});

//mySQL Connection Error (falls einer vorhanden)
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

//
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//urls
app.get('/about', function (req, res) {res.sendFile(path.join(__dirname, '/views/about.html'));});
app.get('/about/test', function (req, res) {res.sendFile(path.join(__dirname, '/views/test.html'));});
app.get('/sandbox.js', function (req, res) {res.sendFile(path.join(__dirname, '/views/sandbox.html'));});

//404 - Error url
app.get("*", (_, res) => res.status(404).sendFile(path.join(__dirname, '/views/404.html')))

//Status-meldung
app.listen(port, () => console.info(`Server listening on http://localhost:${port}`))