// @ts-check
// userModel.js
var mongoose = require('mongoose');
// Setup schema
var formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registed_date: {
        type: Date,
        default: Date.now
    }
});
// Export User model
var Form = module.exports = mongoose.model('Form', formSchema);

module.exports.get = function (callback, limit) {
    Form.find(callback);
}