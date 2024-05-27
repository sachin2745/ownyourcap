'use client'
import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import Navbar from '../navbar';
import Footer from '../Footer';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contact = () => {

  const contactFormvalidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    },

    onSubmit: (values) => {
      console.log(values);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/contactForm/contact`, {
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
          } else {
            toast.error('Some Error Occured');
          }

        }).catch((err) => {
          console.log(err);
          toast.error('Some Error Occured');
        })
    },

    validationSchema: contactFormvalidationSchema,

  });


  const [agreed, setAgreed] = useState(false)

  return (
    <>
      <Navbar />

      {/* <div className="isolate bg-mate_black px-6 py-24 sm:py-20 lg:px-8 font-Jost">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl  border-solid border-white border-2">
        <div className="mx-auto max-w-2xl text-center py-3">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Form</h2>
          <p className="mt-2 text-lg leading-8 text-white text-center">
            Thank you for visiting our website! We're here to assist you with any inquiries or support you may need. Whether you have questions about our products, need help with an order, or want to provide feedback, we're ready to help.        </p>
        </div>
        <form onSubmit={formik.handleSubmit} className="mx-auto mt-4 max-w-2xl ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  autoComplete="number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
                ) : null}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-xs">{formik.errors.message}</div>
                ) : null}
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-sky-500' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-white">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-sky-500">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-5 mb-3">
            <button
              type="submit"
              className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div> */}
      <section className="bg-mate_black dark:bg-primary" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">

              <h2 className="font-heading font-Jost mb-0 font-bold tracking-tight text-white dark:text-black text-3xl sm:text-3xl">
                Contact 
              </h2>
              <p className="mx-auto mt-1 max-w-3xl font-Jost text-xl text-White dark:text-black">
              Home &gt; Contact Us
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-white dark:text-black font-Jost">
                  Thank you for visiting our website! We're here to assist you with any inquiries or support you may need. Whether you have questions about our products, need help with an order, or want to provide feedback, we're ready to help.        </p>


                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4 font-Jost">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-black">
                        Our Address
                      </h3>
                      <p className="text-white dark:text-black">
                        Lucknow
                      </p>
                      <p className="text-white dark:text-black">
                        Uttar Pradesh
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-black">
                        Contact
                      </h3>
                      <p className="text-white dark:text-black">
                        Mobile: +91 123456789
                      </p>
                      <p className="text-white dark:text-black">
                        Mail: ownyourcap@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-500 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-white dark:text-black">
                        Working hours
                      </h3>
                      <p className="text-white dark:text-black">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-white dark:text-black">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white font-Jost">
                Feel Free To Contact Us
                </h2>
                <form onSubmit={formik.handleSubmit} className=" mt-4 max-w-2xl ">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-500 text-xs">{formik.errors.email}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                        Phone Number
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="number"
                          name="phoneNumber"
                          id="phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                          autoComplete="number"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                          <div className="text-red-500 text-xs">{formik.errors.phoneNumber}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          value={formik.values.message}
                          onChange={formik.handleChange}
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                        {formik.touched.message && formik.errors.message ? (
                          <div className="text-red-500 text-xs">{formik.errors.message}</div>
                        ) : null}
                      </div>
                    </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                      <div className="flex h-6 items-center">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? 'bg-sky-500' : 'bg-gray-200',
                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                          )}
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              agreed ? 'translate-x-3.5' : 'translate-x-0',
                              'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </div>
                      <Switch.Label className="text-sm leading-6 text-white">
                        By selecting this, you agree to our{' '}
                        <a href="#" className="font-semibold text-sky-500">
                          privacy&nbsp;policy
                        </a>
                        .
                      </Switch.Label>
                    </Switch.Group>
                  </div>
                  <div className="mt-5 mb-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Let's talk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact