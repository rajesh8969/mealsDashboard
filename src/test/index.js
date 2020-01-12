const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = ((server) => {
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());

  
  server.get('/mealslist', ((req, res) => {
    res.sendFile(path.resolve(mealslist.json));
  }));
  
});