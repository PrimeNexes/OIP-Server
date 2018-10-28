// @ts-check
// contactController.js
// Import contact model
const Form = require('../model/form.model');
// Handle index actions
exports.getForm = function (req, res) {
    Form.get(function (err, forms) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Forms retrieved successfully",
            data: forms
        });
    });
};

// Handle view contact info
// exports.view = function (req, res) {
//     Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Contact details loading..',
//             data: contact
//         });
//     });
// };
// // Handle update contact info
// exports.update = function (req, res) {
// Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err)
//             res.send(err);
// contact.name = req.body.name ? req.body.name : contact.name;
//         contact.gender = req.body.gender;
//         contact.email = req.body.email;
//         contact.phone = req.body.phone;
// // save the contact and check for errors
//         contact.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: contact
//             });
//         });
//     });
// };
// // Handle delete contact
// exports.delete = function (req, res) {
//     Contact.remove({
//         _id: req.params.contact_id
//     }, function (err, contact) {
//         if (err)
//             res.send(err);
// res.json({
//             status: "success",
//             message: 'Contact deleted'
//         });
//     });
// };