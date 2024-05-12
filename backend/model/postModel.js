const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    shortdescription: {
        type: String,
        required: true
    },
    longdescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shippingprice: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    fabric: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

module.exports = model('PostCollection', mySchema);