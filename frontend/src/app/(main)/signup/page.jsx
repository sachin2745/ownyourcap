'use client'
import { useFormik } from 'formik'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const Signup = () => {

  const router = useRouter();
  const signupvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      cpassword: '',
      avatar: ''
    },

    onSubmit: (values) => {
      values.avatar = selImage.name;
      console.log(values);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('User Registered successfully');
            formik.resetForm();
            router.push("/login")
          } else {
            toast.error('Some Error Occured');
          }

        }).catch((err) => {
          console.log(err);
          toast.error('Some Error Occured');
        })
    },

    validationSchema: signupvalidationSchema,

  });

  const [selImage, setselImage] = useState('');

  const uploadeImage = async (e) => {
    const file = e.target.files[0];
    setselImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success('File Uploaded!!');
      }
    });
  }


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-mate_black ">
      <div className="border-solid border-4 border-sky-500 sm:mx-auto sm:w-full sm:max-w-xl rounded-lg">
        <div className=" mt-5 sm:mx-auto sm:w-full sm:max-w-xl">
          <img
            className="mx-auto h-20 w-auto text-sky-500 bg-sky-500 rounded-full"
            src="/logo.png"
            alt="OwnYOURCAP "
          />
          <h2 className="mt-3 text-center text-3xl font-bold leading-9 tracking-tight text-sky-500 font-Jost">
            Create a free account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder=' Enter your first name'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-red-500 text-xs">{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder=' Enter your last name'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="organization"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder=' Enter your phone number'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <br />

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='  Enter your email address'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder=' Create a password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-xs">{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="cpassword"
                  type="password"
                  id="cpassword"
                  autoComplete="current-password"
                  placeholder=' Confirm password'
                  value={formik.values.cpassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                />
                {formik.touched.cpassword && formik.errors.cpassword ? (
                  <div className="text-red-500 text-xs">{formik.errors.cpassword}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-10 " >
              <label
                htmlFor="avatar"
                className="block fz-14  leading-6 text-white cursor-pointer"
              >
                Choose Profile photo
              </label>
              <div className="mt-1 ">
                <input
                  onChange={uploadeImage}
                  id="avatar"
                  name="avatar"
                  type="file"
                  required=""
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"

                />

              </div>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 mb-5 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href='/login' className="font-semibold leading-6 text-sky-500 hover:text-sky-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
