const express = require('express');
const strings = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (request, response) => {
  response.send({ result: strings.sayHello(request.params.string) });
});

app.get('/strings/upper/:string', (request, response) => {
  response.send({ result: strings.uppercase(request.params.string) });
});

app.get('/strings/lower/:string', (request, response) => {
  response.send({ result: strings.lowercase(request.params.string) });
});

app.get('/strings/first-characters/:string', (request, response) => {
  if (request.query.length) {
    response.send({ result: strings.firstCharacters(request.params.string, request.query.length) });
  } else {
    response.send({ result: strings.firstCharacter(request.params.string) });
  }
});

module.exports = app;
