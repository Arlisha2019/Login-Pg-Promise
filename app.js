require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express()

const PORT = process.env.PORT || process.env.PORT_NUMBER;




// const loginRoute = require('./routes/login')
// const signupRoute = require('./routes/signup')
const users = require('./routes/users')


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH')
    return res.status(200).json({});
  }
  next();
});

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/login', loginRoute);
// app.use('/signup', signupRoute);
app.use('/signup', users);



app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})


app.listen(PORT, function(req, res) {
  console.log('Server has started on port ' + PORT);
});

module.exports = app;
