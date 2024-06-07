const mongoose = require('mongoose');
require('dotenv').config();

const url = (process.env.MONGODB_URL)
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database');
    
}).catch((err) => {
    console.log(err);
});

// console.log('last line of the connection');

module.exports = mongoose;