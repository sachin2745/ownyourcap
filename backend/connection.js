const mongoose = require('mongoose');
const url = "mongodb+srv://aviral2442:aviral2442@cluster0.yxwsggb.mongodb.net/loginForm?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database');
    
}).catch((err) => {
    console.log(err);
});

// console.log('last line of the connection');

module.exports = mongoose;