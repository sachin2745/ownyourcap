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
        <tr className="font-Jost text-lg bg-black text-primary">
          <th className='border-2 border-solid border-sky-400'>Image</th>
          <th className='border-2 border-solid border-sky-400'>Name</th>
          <th className='border-2 border-solid border-sky-400'>Category</th>
          <th className='border-2 border-solid border-sky-400'>Short Description</th>
          <th className='border-2 border-solid border-sky-400'>Long Description</th>
          <th className='border-2 border-solid border-sky-400'>Price</th>
          <th className='border-2 border-solid border-sky-400'>Shipping Price</th>
          <th className='border-2 border-solid border-sky-400'>Color</th>
          <th className='border-2 border-solid border-sky-400'>Style</th>
          <th className='border-2 border-solid border-sky-400'>Size</th>
          <th className='border-2 border-solid border-sky-400'>Fabric</th>


          <th colSpan={2} className='border-2 border-solid border-red-400 text-red-400'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          productList.map((product) => {
            return <tr className="font-Quicksand">
              <td className='border-2 border-solid border-sky-400'><img src={`${process.env.NEXT_PUBLIC_API_URL}/` + product.image} alt="" className="h-full w-full" /></td>
              <td className='border-2 border-solid border-sky-400'>{product.name}</td>
              <td className='border-2 border-solid border-sky-400'>{product.category}</td>
              <td className='border-2 border-solid border-sky-400' >{product.shortdescription}</td>
              <td className='border-2 border-solid border-sky-400'>{product.longdescription}</td>
              <td className='border-2 border-solid border-sky-400'>{product.price}</td>
              <td className='border-2 border-solid border-sky-400'>{product.shippingprice}</td>
              <td className='border-2 border-solid border-sky-400'>{product.color}</td>
              <td className='border-2 border-solid border-sky-400'>{product.style}</td>
              <td className='border-2 border-solid border-sky-400'>{product.size}</td>
              <td className='border-2 border-solid border-sky-400'>{product.fabric}</td>


              <td className='border-2 border-solid border-red-400'>
                <a href={"/admin/updateProduct/" + product._id} className='btn btn-primary'>Edit</a>
              </td>
              <td className='border-2 border-solid border-red-400'>
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
            <h1 className="text-center  my-4 text-2xl font-bold font-Sedan text-white " >Manage Product</h1>
            {displayPodcastData()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ManageProduct