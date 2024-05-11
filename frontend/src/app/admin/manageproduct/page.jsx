"use client";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProduct = () => {

  const [productList, setProductList] = useState([]);

  const fetchProductList = async () => {
    const res = await fetch("http://localhost:5000/post/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    fetchProductList();
  }, [])

  const deletepodcast = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/post/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      toast.success('Product Deleted Successfully', { variant: 'success' });
      fetchProductList();

    }

  }

  const displayPodcastData = () => {

    return <table className='table shadow  rounded '>
      <thead>
        <tr className="font-Jost text-lg bg-black">
          <th >Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>

          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          productList.map((product) => {
            return <tr className="font-Quicksand">
              <td><img src={"http://localhost:3000/" + product.image} alt="" style={{ height: 70 }} /></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>

              <td>
                <a href={`/admin/update/${product._id}`} className='btn btn-primary'>Edit</a>
              </td>
              <td>
                <button className='btn btn-error font-Jost' onClick={e => deletepodcast(product._id)} >Delete</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  }

  return (
    <div>
      <div className="antialiased">
        <main className="p-4 md:ml-64 h-auto pt-20">
          <div className='container'>
            <h1 className="text-center f my-4 text-xl font-Sedan " >Manage Product</h1>
            {displayPodcastData()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ManageProduct