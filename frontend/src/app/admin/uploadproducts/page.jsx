'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const page = () => {

    const postForm = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            image: '',
            postedAt: new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            // sending request to backend

            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body: JSON.stringify(values),  // convert js to json
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((response) => {
                    console.log(response.status);
                    toast.success("Post Saved Successfully");
                }).catch((err) => {
                    console.log(err);
                });


        }
    })

    return (

        <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
            <div className="card w-auto h-auto py-20 px-20 bg-primary text-primary-content items-center text-center">
                <h1 className="text-4xl font-bold pb-5">Upload Products</h1>
                <form onSubmit={postForm.handleSubmit} className="flex flex-col items-center justify-center">
                    <input type="text"
                        id="name"
                        onChange={postForm.handleChange}
                        value={postForm.values.name}                                             
                        placeholder="Product Name" className="p-2 m-2 border border-gray-300 rounded-lg " />
                    <input type="text"
                        id="description"
                        onChange={postForm.handleChange}
                        value={postForm.values.description}
                        placeholder="Product Description" className="p-2 m-2 border border-gray-300 rounded-lg " />
                    <input type="number"
                        id="price"
                        onChange={postForm.handleChange}
                        value={postForm.values.price}
                        placeholder="Product Price" className="p-2 m-2 border border-gray-300 rounded-lg " />
                    <input type="text"
                        id="image"
                        onChange={postForm.handleChange}
                        value={postForm.values.image}
                        placeholder="Product Image" className="p-2 m-2 border border-gray-300 rounded-lg " />
                    <button type="submit" className="p-2 m-2 bg-black text-white rounded-lg">Upload</button>
                </form>
            </div>
        </div>


    )
}

export default page