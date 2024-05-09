const { model , Schema } = require('../connection');

const mySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    avatar: { 
        type: String, 
        default: 'avatar_placeholder.png'
    }

});

module.exports = model('signup', mySchema);