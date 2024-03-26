const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const port = 3000;

app.get('/allowed', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.send("CORS許可されています");
})

app.get('/not-allowed', (req, res) => {
    res.send("CORS許可されていません");
})

app.options('/preflight', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'PUT, OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.sendStatus(204);
})

app.put('/preflight', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.send("プリフライトリクエストを受け付けました");
})

app.get('/credential', (req, res) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:4002');
    res.append('Access-Control-Allow-Credentials', 'true');
    const cookies = JSON.stringify(req.cookies);
    res.send(`${cookies}を受け取りました`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
