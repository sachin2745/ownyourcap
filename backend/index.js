const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req , res) => {
    res.send('Got Response From The Express Server')
});

app.get('/add', (req , res) => {
    res.send('Add Response From The Express Server')
});

app.listen( port, () => (console.log('Express server started Now')));