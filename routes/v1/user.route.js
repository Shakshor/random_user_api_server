const express = require('express');

const router = express.Router();
const userController = require('../../controllers/user.controller.js');

/* router.get('/', (req, res) => {
    res.send('user found');
}); */

router
    .route('/')
    .get(userController.getAllUser);


module.exports = router;
