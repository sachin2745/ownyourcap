"use client";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProduct = () => {

  const [productList, setProductList] = useState([]);

  const fetchProductList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/getall`);
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/delete/` + id, {
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
        <tr className="font-Jost text-lg bg-black text-secondary">
          <th >Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Short Description</th>
          <th>Long Description</th>
          <th>Price</th>
          <th>Shipping Price</th>
          <th>Color</th>
          <th>Style</th>
          <th>Size</th>
          <th>Fabric</th>


          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          productList.map((product) => {
            return <tr className="font-Quicksand">
              <td><img src={"http://localhost:5000/" + product.image} alt="" className="h-full w-full" /></td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.shortdescription}</td>
              <td>{product.longdescription}</td>
              <td>{product.price}</td>
              <td>{product.shippingprice}</td>
              <td>{product.color}</td>
              <td>{product.style}</td>
              <td>{product.size}</td>
              <td>{product.fabric}</td>


              <td>
                <a href={"/admin/updateProduct/" + product._id} className='btn btn-primary'>Edit</a>
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
      <div className="antialiased bg-mate_black h-screen">
        <main className=" h-auto pt-20 ">
          <div className='container'>
            <h1 className="text-center  my-4 text-2xl font-bold font-Sedan text-cyan-300 " >Manage Product</h1>
            {displayPodcastData()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ManageProduct