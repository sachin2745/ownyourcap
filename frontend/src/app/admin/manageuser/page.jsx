"use client";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const ManageUser = () => {

  const [userList, setUserList] = useState([]);

  const fetchUserList = async () => {
    const res = await fetch("http://localhost:5000/signup/getall");
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

    const res = await fetch("http://localhost:5000/signup/delete/" + id, {
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
        <tr className="font-Jost text-lg bg-black text-secondary">
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Created At</th>

          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          userList.map((user) => {
            return <tr className='font-Jost' >
              <td><img src={"http://localhost:5000/" + user.avatar} alt="" style={{ height: 40 }} /></td>
              <td>{user.firstName} {user.lastName} </td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.createdAt}</td>

              <td>
                {/* <a href={`/admin/update/${pod._id}`} className='btn btn-primary'>Edit</a> */}
              </td>
              <td>
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
            <h1 className='text-center my-4 text-2xl font-bold font-Sedan text-cyan-300' >Manage User</h1>
            {displayUserData()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ManageUser