const express = require('express');
const router = express.Router();
const { createMovie } = require('../controllers/movies');


router.post('/', createMovie);



module.exports = router;
