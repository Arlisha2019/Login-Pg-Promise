// // const express = require('express');
// // // const router = express.Router();
// // // const pgp = require('pg-promise')();
// // // const app = express()
// // // const connectionString = "postgres://localhost:5432/logindb"
// // // const db = pgp(connectionString)
// // const bodyParser = require('body-parser')
// // const User = require('../models/user')
// // console.log(db);
//
// app.get('/', (req, res, next) => {
//   res.status(200).json({
//     message: 'Handling GET request'
//   });
// });
//
// app.post('/', (req, res, next) => {
//
//   let today = new Date();
//   let date = today.getFullYear()+ '-' +  (today.getMonth()+1)+ '-' +today.getDate();
//
//
//     let first_name = req.body.first_name
//     let last_name = req.body.last_name
//     let user_name = req.body.user_name
//     let password = req.body.password
//     let email = req.body.email
//     let created_on = date
//
//   db.none('INSERT INTO users(first_name, last_name, user_name, password, email,created_on) VALUES($1,$2,$3,$4,$5,$6)',[first_name,last_name,user_name,password,email,created_on]);
//
//     res.status(201).json({
//       message: 'User Created '
//   })
//
//   });
//
//
// // router.get('/:userId', (req, res, next) => {
// //   const id = req.params.userId
// //   if(id === 'special') {
// //     res.status(200).json({
// //       message: 'This is the special ID for login',
// //       id: id
// //     })
// //   } else {
// //     res.status(200).json({
// //       message: 'You passed an incorrect ID'
// //     });
// //   }
// // });
//
// module.exports = app;
