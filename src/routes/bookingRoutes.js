const express = require('express');
const router = express.Router();

const { bookingTickets } = require('../controller/bookingController');
const auth = require('../controller/authController');

//router.post('/checkAuth', auth, bookingTickets);

router.post('/checkAuth', function(req, res){
    auth.bookingTickets
});

module.exports = router;

// app.post('/user/all',Controller.Create);
// You try for:

// app.post('/user/all', function(req, res){
//   Controller.Create
// });