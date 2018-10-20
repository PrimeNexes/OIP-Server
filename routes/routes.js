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
var contactController = require('../controller/user.controller');
// Contact routes

router.route('/login')
    .post(contactController.register);

// router.route('/register/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);
// Export API routes
module.exports = router;