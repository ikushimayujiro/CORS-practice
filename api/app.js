const express = require('express');
const app = express();
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
