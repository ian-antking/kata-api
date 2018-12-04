const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: strings.sayHello(request.params.string) });
});

app.get('/strings/upper/:string', (request, response) => {
  response.status(200).json({ result: strings.uppercase(request.params.string) });
});

app.get('/strings/lower/:string', (request, response) => {
  response.status(200).json({ result: strings.lowercase(request.params.string) });
});

app.get('/strings/first-characters/:string', (request, response) => {
  if (request.query.length) {
    const result = { result: strings.firstCharacters(request.params.string, request.query.length) };
    response.status(200).json(result);
  } else {
    response.status(200).json({ result: strings.firstCharacter(request.params.string) });
  }
});

app.get('/numbers/add/:n1/and/:n2', (request, response) => {
  const number1 = parseInt(request.params.n1);
  const number2 = parseInt(request.params.n2);
  const isValid = (number) => {
    return !Number.isNaN(parseInt(number));
  };
  if (!isValid(number1) || !isValid(number2)) {
    response.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    response.status(200).json({ result: numbers.add(number1, number2) });
  }
});

app.get('/numbers/subtract/:n1/from/:n2', (request, response) => {
  const isValid = (number) => {
    return !Number.isNaN(parseInt(number));
  };
  if (isValid(request.params.n1) && isValid(request.params.n2)) {
    const number1 = parseInt(request.params.n1);
    const number2 = parseInt(request.params.n2);
    response.status(200).json({ result: numbers.subtract(number2, number1) });
  } else {
    response.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

module.exports = app;
