const express = require('express');
const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.status(200).json({
//     message: 'Handling GET request for signup'
//   });
// });

// router.post('/', (req, res, next) => {
//   res.status(201).json({
//     message: 'Handling POST request for '
//   });
// });

// router.get('/:signupId', (req, res, next) => {
//   const id = req.params.signupId
//   if(id === 'special') {
//     res.status(200).json({
//       message: 'This is the special ID for signup',
//       id: id
//     })
//   } else {
//     res.status(200).json({
//       message: 'You passed an incorrect ID for signup'
//     });
//   }
// });

module.exports = router;
