'use client';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';

const ResetPassword = () => {
  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const [verifiedUser, setVerifiedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const router = useRouter();

  const checkMailExists = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/getbyemail/${emailRef.current.value}`);
    const data = await res.json();
    setVerifiedUser(data);
    return res.status === 200;
  }

  const sendOTP = async () => {
    if (!await checkMailExists()) {
      toast.error('Email not registered', { variant: 'error' });
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/sendotp`, {
      method: 'POST',
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 201) {
      toast.success('OTP sent successfully', { variant: 'success' });
    } else {
      toast.error('Something went wrong', { variant: 'error' });
    }
  }

  const verifyOTP = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      toast.error('Invalid OTP', { variant: 'error' });
    }
  }

  const updatePassword = async (values) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup/update/${verifiedUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 200) {
      toast.success('Password updated successfully', { variant: 'success' });
      router.push('/login');
    } else {
      toast.error('Something went wrong', { variant: 'error' });
    }
  }

  const resetForm = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    onSubmit: updatePassword
  });

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Reset Your Password</h1>
          <input
            ref={emailRef}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none"
            type="email"
            placeholder="Enter Registered Email"
          />
          <button onClick={sendOTP} className="w-full bg-blue-500 text-white rounded-md py-2 mb-3 hover:bg-blue-600 focus:outline-none">
            Send OTP
          </button>
          <input
            ref={otpRef}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none"
            type="text"
            placeholder="Enter OTP"
          />
          <button onClick={verifyOTP} className="w-full bg-blue-500 text-white rounded-md py-2 mb-6 hover:bg-blue-600 focus:outline-none">
            Verify OTP
          </button>
          {showForm && (
            <form onSubmit={resetForm.handleSubmit}>
              <h2 className="text-2xl font-bold text-center mb-6">Enter New Password</h2>
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none"
                type="password"
                placeholder="Password"
                id="password"
                value={resetForm.values.password}
                onChange={resetForm.handleChange}
              />
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6 focus:outline-none"
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                value={resetForm.values.confirmPassword}
                onChange={resetForm.handleChange}
              />
              <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none">
                Reset Password
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default ResetPassword;
