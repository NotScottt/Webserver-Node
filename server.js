const express = require("express")
const path = require("path")
const app = express()
const port = 3000


app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', function (req, res) {res.sendFile(path.join(__dirname, '/views/about.html'));});
app.get('/about/test', function (req, res) {res.sendFile(path.join(__dirname, '/views/test.html'));});
app.get('/sandbox.js', function (req, res) {res.sendFile(path.join(__dirname, '/views/sandbox.html'));});
app.get("*", (_, res) => res.status(404).sendFile(path.join(__dirname, '/views/404.html')))


app.listen(port, () => console.info(`Server listening on http://localhost:${port}`))