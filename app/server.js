'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';
const RESPONSE = process.env.RESPONSE
const app = express();
app.get('/', (req, res) => {
  res.send(RESPONSE);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
