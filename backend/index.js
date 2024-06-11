const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

//fill the require data
const userRouter = require('./router/userRouter');
const contactFormRouter = require('./router/contactFormRouter');
const postRouter = require('./router/postRouter');
const utilRouter = require('./router/util');
const billingRouter = require('./router/billingRouter');
const orderRouter = require('./router/orderRouter');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
app.use(express.json());
app.use(cors({origin: '*'}));


//that is port to start express server
app.use('/user', userRouter);
app.use('/contactForm', contactFormRouter);
app.use('/post', postRouter);
app.use('/util', utilRouter);
app.use('/billing', billingRouter);
app.use('/order', orderRouter);


app.use(express.static('./static/uploads'));

app.get('/get-permission', (req, res) => {
    const token = req.header('x-auth-token');
    console.log(token);
    if(token === 'admin'){
        res.json({allowed: true});
    }else{
        res.json({allowed: false});
    }
})

app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      description: 'Payment Description',
      customer : customer.id
    });
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  });
  
  app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
  });
const port =process.env.PORT;

app.get('/', (req , res) => {
    res.send('Got Response From The Express Server')
});

app.get('/add', (req , res) => {
    res.send('Add Response From The Express Server')
});

app.listen( port, () => (console.log('Express Server Started Now')));