require('dotenv').config();
const express = require('express');
const pgp = require('pg-promise')();
const app = express()
const connectionString = process.env.CONNECTION_STRING
const db = pgp(connectionString)
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const User = require('../models/user')

let today = new Date();
let date = today.getFullYear()+ '-' +  (today.getMonth()+1)+ '-' +today.getDate();

app.get('/getUsers', (req, res, next) => {

  db.any('SELECT user_id,first_name,last_name,password,user_name, email,created_on from users;')
  .then(result => {
    res.status(200).json({
      message: 'Handling GET request',
      result: result
    })
  })
  .catch(error => {
    res.json({
      error: error,
      message: 'Unable to locate User'
    })
    console.log(error);
  })
});

app.post('/', (req, res, next) => {

  const { first_name, last_name, user_name, email, password } = req.body;

  const created_on = date;

  const saltRounds = 10;

//If user already exist in PostgreSQL Database
  db.one('SELECT user_id, first_name, last_name, email, user_name, password, created_on FROM users WHERE email = $1', [email])
  .then(user => {
    if (user) {
      res.json({
        message: 'Email Already Exist',
        result: result
      })

  } else {

  bcrypt.hash(password, saltRounds, (err, hash) => {
//If  user never registered for website then following will execute
      db.none('INSERT INTO users(first_name, last_name, user_name, password, email,created_on) VALUES($1,$2,$3,$4,$5,$6)',[first_name,last_name,user_name,hash,email,created_on])

        res.json({
          message: 'User Created '
          })
        })
      }
    })
  })




















// router.get('/:userId', (req, res, next) => {
//   const id = req.params.userId
//   if(id === 'special') {
//     res.status(200).json({
//       message: 'This is the special ID for login',
//       id: id
//     })
//   } else {
//     res.status(200).json({
//       message: 'You passed an incorrect ID'
//     });
//   }
// });

module.exports = app;
