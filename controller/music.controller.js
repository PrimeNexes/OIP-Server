// @ts-check
// contactController.js
// Import contact model
const Music = require('../model/music.model');
// Handle index actions
exports.getMusic = function (req, res) {
    Music.get(function (err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Music retrieved successfully",
            data: user
        });
    });
};
