// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();


const http = require('http');
const handler = require('./handlers');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(handler);

server.listen(port);

console.log(`server running on: http://${host}:${port}`);

module.exports = {
  server,
  handler,
};

console.log(process.env.ok);