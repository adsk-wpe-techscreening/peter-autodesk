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

// should use express router
  
/**
 * Routes Definitions
 */

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', function (req, res, next) {
  if(req.method === 'POST') {
    UserAPI.addUser(req, res, next);
  }
})

app.get('/user/:id/recommendation', function (req, res, next) {
  console.log('ID:', req.params.id)
  UserAPI.getUserRecommendation(req.params.id, next);
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: { message: 'Not Found' }});
});


