require('dotenv').config({path: 'variables.env'});
const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const verifyWebhook = require('./verify-webhook');
const messageWebhook = require('./message-webhook');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', verifyWebhook);
app.post('/', messageWebhook);

app.listen(5000, () => console.log('Express server is listening on port 5000'));