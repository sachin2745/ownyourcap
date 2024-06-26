'use client'
import useAppContext from '@/context/AppContext';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import './login.css'
import Link from 'next/link';

const Login = () => {

  // const {setLoggedIn} = useAppContext();

  const router = useRouter();
  const { setLoggedIn, setCurrentUser } = useAppContext();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: (values) => {
      console.log(values);
      // fetch('http://localhost:5000/signup/authenticate', {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success('User login successfully');
            response.json().then(data => {
              sessionStorage.setItem('user', JSON.stringify(data));
              setCurrentUser(data);
              setLoggedIn(true);
              formik.resetForm();
              router.push("/")
            })
          } else {
            toast.error('Some Error Occured');
          }

        }).catch((err) => {
          console.log(err);
          toast.error('Some Error Occured');
        })

    },


  });
  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-24 lg:px-8 bg-mate_black">
      <div className=' sm:mx-auto sm:w-full sm:max-w-md rounded-lg animated_card2'>
        <div className="group">
          <div className="">
            <img
              className="mx-auto h-20 w-auto text-sky-500 bg-sky-500 rounded-full"
              src="/logo.png"
              alt="OWNYOURCAP"
            />
            <h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight text-sky-500 font-Jost">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md ">
            <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder='Enter your email address'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
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
                  <div className="text-sm">
                    <a href="/resetPassword" className="font-semibold text-sky-500 hover:text-sky-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div class="relative">
                  <input id="hs-toggle-password"
                    name="password"
                    placeholder='  Enter your Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-xs">{formik.errors.password}</div>
                  ) : null}
                  <button type="button" data-hs-toggle-password='{
      "target": "#hs-toggle-password"
    }' class="absolute top-0 end-0 p-3.5 rounded-e-md">
                    <svg class="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                      <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                      <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                      <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                      <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                      <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
                {/* <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder='  Enter your Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-xs">{formik.errors.password}</div>
                ) : null}
                
              </div> */}
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full font-Jost justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 mb-5 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link href="/signup" className="font-semibold font-Jost leading-6 text-sky-500 hover:text-sky-500">
                Register for an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;