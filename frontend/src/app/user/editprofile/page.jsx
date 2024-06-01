'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const editPofile = () => {

    const [currentUser, setCurrentUser] = useState
    (JSON.parse(sessionStorage.getItem('user'))
    );

  const [user, setUser] = useState({});

  const useForm = useFormik({
    initialValues: currentUser,
    onSubmit: async (data) => {
      console.log(data);
      const res = await fetch('http://localhost:5000/signup/update' + currentUser._id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.status);
      const userdata = await res.json().result;
      console.log(userdata);
      setCurrentUser(userdata);
      sessionStorage.setItem('user', JSON.stringify(userdata));
    },
  })

  const fetchProfileData = () => {
    fetch('http://localhost:5000/signup/getbyid', {
      headers: {
        'x-auth-token': currentUser.token
      }
    })
      .then((result) => {
        console.log(result);
        setUser(result)
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProfileData();

  }, [])

//  const uploadProfileImage = (e) => {
//   const file = e.target.files[0];
//   setSelImage(file.name);
//   const fd = new FormData();
//   fd.append("myfile", file);
//   fetch(url + "/util/uploadfile", {
//     method: "POST",
//     body: fd,
//   }).then((res) => {
//     if (res.status === 200) {
//       console.log("file uploaded");
//       updateProfile({ avatar: file.name });
//     }
//   });
// };

const deleteAccount = async (id) => {
  console.log(id);

  const res = await fetch('http://localhost:3000/user/delete/' + id, { method: 'DELETE' });
  console.log(res.status);
  if (res.status === 200) {
    // fetchPlanningServices();
    // alert.success('User Deleted Successfully');

  }
}

  return (
    <>
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n        font-family: 'Plus Jakarta Sans', sans-serif;\n    }\n"
    }}
  />
  <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
    <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
      <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
        <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
        <Link
          href="/user/profile"
          className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full"
        >
          Pubic Profile
        </Link>
        <Link
          href="#"
          className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full"
        >
          Account Settings
        </Link>
        <Link
          href="#"
          className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  "
        >
          Notifications
        </Link>
        <Link
          href="#"
          className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  "
        >
          PRO Account
        </Link>
      </div>
    </aside>
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
    <form onSubmit={useForm.handleSubmit} >
      <div className="p-2 md:p-4">
        <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                src={'http://localhost:5000/' + currentUser.avatar}
                alt="Bordered avatar"
              />
              <div className="flex flex-col space-y-5 sm:ml-8">
                <button
                  type="button"
                  className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                >
                  Change picture
                </button>
                <button
                  type="button"
                  className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                >
                  Delete picture
                </button>
              </div>
            </div>
            <div className="items-center mt-8 sm:mt-14 text-[#202142]">
              <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    onChange={useForm.handleChange}
                    value={useForm.values.firstName}
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your first name"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    onChange={useForm.handleChange}
                    value={useForm.values.lastName}
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your first name"
                    defaultValue=""
                    required=""
                  />
                </div>
              </div>
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={useForm.handleChange}
                    value={useForm.values.email}
                  className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder="your.email@mail.com"
                  required=""
                />
              </div>
              
              {/* <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Bio
                </label>
                <textarea
                  id="message"
                  onChange={useForm.handleChange}
                    value={useForm.values.bio}
                  rows={4}
                  className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                  placeholder="Write your bio here..."
                  defaultValue={""}
                />
              </div> */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-sky-500  hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </main>
  </div>
</>

    </>
  )
}

export default editPofile;