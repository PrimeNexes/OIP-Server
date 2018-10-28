// @ts-check
// userModel.js
var mongoose = require('mongoose');
// Setup schema
var musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    musicId:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    }
});
// Export User model
var Form = module.exports = mongoose.model('Music', musicSchema);

module.exports.get = function (callback) {
    return Form.find(callback);
}