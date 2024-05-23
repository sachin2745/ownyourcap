'use client';
import useProductContext from '@/context/ProductContext';
import { useSearchParams } from 'next/navigation';
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

  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    isInCart,
    getCartTotal,
    getCartItemsCount,
    getSingleItemCartTotal
  } = useProductContext();

  const params = useSearchParams();
  console.log(params);

  const shippingPrice = 40;
  return (
    <Container>
      {/* <h1 className="text-center my-5">Order History</h1>

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
      </div> */}
      {
        paymentData.map((order, index) => (
          <div className="main-box border  border-gray-200 rounded-xl my-10 py-6  max-w-xl max-lg:mx-auto lg:max-w-full font-Jost">

            <h1 className=" font-bold text-4xl mb-10 leading-7 text-white text-center">Order History</h1>
            <div key={order._id} className="grid grid-cols-2 lg:items-center  px-6 pb-6  border-gray-200">

              <div className=" grid grid-cols-2 items-center">
                <div className="data ">
                  <h2 className="font-bold text-2xl leading-7 text-white text-center">Shipping Address</h2>
                  <img src="orderdetail.png" alt="order" className="w-50 h-50" />
                </div>
                <div className="data ">
                  <p className="font-semibold text-base leading-7 text-white">
                    User:{" "}
                    <span className="text-sky-500 font-medium">{order.shipping.name}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Address :{" "}
                    <span className="text-gray-400 font-medium"> {order.shipping.address.line1}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Locality :{" "}
                    <span className="text-gray-400 font-medium">{order.shipping.address.line2}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    City :{" "}
                    <span className="text-gray-400 font-medium"> {order.shipping.address.city}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    State :{" "}
                    <span className="text-gray-400 font-medium"> {order.shipping.address.state}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Pincode :{" "}
                    <span className="text-gray-400 font-medium"> {order.shipping.address.postal_code}</span>
                  </p>
                </div>

              </div>



              <div className="grid grid-cols-2  items-center">
                <div className="data ">
                  <h2 className="font-bold text-2xl leading-7 text-white text-center">Order Details</h2>
                  <img src="userdetail.png" alt="order" className="w-50 h-50" />
                </div>
                <div className="data ">
                  <p className="font-semibold text-base leading-7 text-white">
                    Order ID :{" "}
                    <span className="text-sky-500 font-medium">{order._id}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Order Date :{" "}
                    <span className="text-gray-400 font-medium"> {new Date(order.createdAt).toDateString()}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Payment Method :{" "}
                    <span className="text-gray-400 font-medium"> {order.details.payment_method}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Items Quantity :{" "}
                    <span className="text-gray-400 font-medium">{order.items.length}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Payment Status :{" "}
                    <span className="text-gray-400 font-medium"> {order.status}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Receipt URL :{" "}
                    <span className="text-gray-400 font-medium"> <a href={order.details.receipt_url} target="_blank">Click here</a></span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-white mt-4">
                    Payment Amount :{" "}
                    <span className="text-gray-400 font-medium">{order.details.amount / 100}</span>
                  </p>
                </div>

              </div>

            </div>
          </div>
        ))}
    </Container>
  );
};

export default OrderHistory