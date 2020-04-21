/**
 * Required External Modules
 */

const express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  UserApi = require('./api/UserAPI'),
  app = express();

/**
 * App Variables
 */

const port = process.env.PORT || "8000";

  
/**
 * Routes Definitions
 */

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res) {
  res.status(404).send({ error: { message: 'Not Found' }});
});

app.use('/users', function (req, res) {
  if(req.method === 'POST') {
    UserAPI.addUser(req, res);
  }
})

app.get('/user/:id/recommendation', function (req, res) {
  UserAPI.getUserRecommendation(req.params.id, res);
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});


