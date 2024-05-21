const express = require('express');
const cors = require('cors');
const app = express();


//fill the require data
const signupRouter = require('./router/signupRouter');
const contactFormRouter = require('./router/contactFormRouter');
const postRouter = require('./router/postRouter');
const utilRouter = require('./router/util');
const billingRouter = require('./router/billingRouter');


app.use(express.json());
app.use(cors({origin: '*'}));


//that is port to start express server
app.use('/signup', signupRouter);
app.use('/contactForm', contactFormRouter);
app.use('/post', postRouter);
app.use('/util', utilRouter);
app.use('/billing', billingRouter);


app.use(express.static('./static/uploads'));

const port = 5000;

app.get('/', (req , res) => {
    res.send('Got Response From The Express Server')
});

app.get('/add', (req , res) => {
    res.send('Add Response From The Express Server')
});

app.listen( port, () => (console.log('Express server started Now')));