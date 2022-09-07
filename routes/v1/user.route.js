const express = require('express');

const router = express.Router();
const userController = require('../../controllers/user.controller.js');


router
    .route('/random')
    /**
    * random user
    */
    .get(userController.getRandomUser);


router
    .route('/all')
    /**
     * all users
     */
    .get(userController.getAllUser);

router
    .route('/save')
    /**
    * create a user
    */
    .post(userController.saveAUser);


router
    .route('/update/:id')
    /**
    * update a user
    */
    .patch(userController.updateAUser);



router
    .route('/delete/:id')
    .delete(userController.deleteAUser);



module.exports = router;
