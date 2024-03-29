// @ts-check
// userModel.js
var mongoose = require('mongoose');
// Setup schema
var formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});
// Export User model
var Form = module.exports = mongoose.model('Form', formSchema);

module.exports.get = function (callback) {
    return Form.find(callback);
}