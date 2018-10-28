// @ts-check
// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var userController = require('../controller/user.controller');
var formController = require('../controller/form.controller');
var musicController = require('../controller/music.controller');
// Contact routes

router.route('/register')
    .post(userController.register);


router.route('/login')
    .post(userController.login);

router.route('/getForms')
    .post(formController.getForm);

router.route('/getMusic')
    .post(musicController.getMusic);

// router.route('/register/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// Export API routes
module.exports = router;