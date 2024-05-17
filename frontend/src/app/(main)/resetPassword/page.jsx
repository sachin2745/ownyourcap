// 'use client'

// import React from 'react'

// const ResetPassword = () => {
  
//   return (
// <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//             alt="Your Company"
//           />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Reset Password
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   placeholder='  Enter your email address'
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
            
//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Request OTP
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             {/* Not a member?{' '} */}
//             <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Back to the Login Page
//             </a>
//           </p>
//         </div>
//       </div>  )
// }

// export default ResetPassword;
'use client'
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

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
            <form onSubmit={updatePassword}>
              <h2 className="text-2xl font-bold text-center mb-6">Enter New Password</h2>
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none"
                type="password"
                placeholder="Password"
              />
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6 focus:outline-none"
                type="password"
                placeholder="Confirm Password"
              />
              <button className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 focus:outline-none">
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
