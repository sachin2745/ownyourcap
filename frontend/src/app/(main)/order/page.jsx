'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const OrderHistory = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPaymentHistory = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/order/getbyuser", {
      headers: {
        'x-auth-token': (JSON.parse(sessionStorage.getItem('user')))
      }
    });
    const data = await response.json();
    console.log(data);
    setPaymentData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-5">Order History</h1>

      <div className="p-4 shadow-lg">
        {loading ? (
          <Spinner animation="border" />
        ) : (
          paymentData.map((order, index) => (
            <Row key={order._id} className="mb-4">
              <Col sm={6}>
                <p className="text-muted">Shipping Address</p>
                <p>{order.shipping.name}</p>
                <p>{order.shipping.address.line1}</p>
                <p>{order.shipping.address.line2}</p>
                <p>{order.shipping.address.city}</p>
                <p>{order.shipping.address.state}</p>
                <p>{order.shipping.address.postal_code}</p>
              </Col>
              <Col sm={6}>
                <p className="text-muted">Order Details</p>                
                <p>Order ID: {order._id}</p>
                <p>Order Date: {new Date(order.createdAt).toDateString()}</p>
                <p>Items: {order.items.length}</p>
                <p>Payment Method: {order.details.payment_method}</p>
                <p>Amount: ₹{order.details.amount / 100}</p>
                <p>Receipt URL: <a href={order.details.receipt_url} target="_blank">Click here</a></p>
                <p>Payment Status: {order.status}</p>
              </Col>
            </Row>
          ))
        )}
      </div>
    </Container>
  );
};

export default OrderHistory