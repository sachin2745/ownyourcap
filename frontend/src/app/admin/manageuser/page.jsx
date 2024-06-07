"use client";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const ManageUser = () => {

  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUserList(data);
  }

  useEffect(() => {
    fetchUserList();
  }, [])

  const deleteUser = async (id) => {
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/` + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success('User Deleted Successfully', { variant: 'success' });
      fetchUserList();

    }

  }

  const displayUserData = () => {

    return <table className='table shadow  rounded '>
      <thead>
        <tr className="font-Jost text-lg bg-black text-primary">
          <th className='border-2 border-solid border-sky-400'>Avatar</th>
          <th className='border-2 border-solid border-sky-400'>Name</th>
          <th className='border-2 border-solid border-sky-400'>Email</th>
          <th className='border-2 border-solid border-sky-400'>Password</th>
          <th className='border-2 border-solid border-sky-400'>Created At</th>

          <th colSpan={2} className='border-2 border-solid border-red-400 text-red-400'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          userList.map((user) => {
            return <tr className='font-Jost' >
              <td className='border-2 border-solid border-white'><img src={`${process.env.NEXT_PUBLIC_API_URL}/` + user.avatar} alt="" style={{ height: 40 }} /></td>
              <td className='border-2 border-solid border-white'>{user.firstName} {user.lastName} </td>
              <td className='border-2 border-solid border-white'>{user.email}</td>
              <td className='border-2 border-solid border-white'>{user.password}</td>
              <td className='border-2 border-solid border-white'>{user.createdAt}</td>

              
              <td className='border-2 border-solid border-red-400'>
                <button className='btn btn-error' onClick={e => deleteUser(user._id)} >Delete</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  }

  return (
    <div>
      <div className="antialiased bg-mate_black h-screen ">
        <main className=" h-auto pt-20">
          <div className='container'>
            <h1 className='text-center my-4 text-3xl font-bold font-Sedan text-white' >Manage User</h1>
            {displayUserData()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ManageUser