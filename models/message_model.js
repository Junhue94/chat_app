var mongoose = require('mongoose');

// Lesson Schema
var MessageSchema = mongoose.Schema({
    username: {
        type: String
    },
    matric_no: {
        type: String
    },
    message: {
        type: String
    },
    accepted: {
        type: String,
        default: 'checked'
    },
    timestamp: {
        type: Date
    },
    created: {
        type: String
    }
});


// Compile schema into a model and export model
var Message = module.exports = mongoose.model('Message', MessageSchema, 'messages');


// Usable functions
module.exports.message_fn = {
    createMessage: function (newMessage, callback) {
        newMessage.save(callback);
    },

    getAllMessages: function (callback) {
        Message.find(callback);
    }
};
