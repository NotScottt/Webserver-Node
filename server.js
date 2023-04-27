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

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});


app.listen(port, () => console.info(`Server listening on http://localhost:${port}`))