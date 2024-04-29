const express = require('express');
const cors = require('cors');
const app = express();


//fill the require data
const signupRouter = require('./router/signupRouter');
const contactFormRouter = require('./router/contactFormRouter');

app.use(express.json());
app.use(cors({origin: '*'}));


//that is port to start express server
app.use('/signup', signupRouter);
app.use('/contactForm', contactFormRouter);

const port = 5000;

app.get('/', (req , res) => {
    res.send('Got Response From The Express Server')
});

app.get('/add', (req , res) => {
    res.send('Add Response From The Express Server')
});

app.listen( port, () => (console.log('Express server started Now')));