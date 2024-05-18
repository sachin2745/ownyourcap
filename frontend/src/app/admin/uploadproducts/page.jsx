'use client';
import useAppContext from '@/context/AppContext';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';



const page = () => {

    const productSchema = Yup.object().shape({
        name: Yup.string().required('Name is Required').min(3, 'Name is Too Short').max(10, "Name must be at most 10 characters"),
        category: Yup.string().required('Category is Required').min(3, 'Category is Too Short').max(66, "Category must be at most 66 characters or 10 words"),
        shortdescription: Yup.string().required('Short description is Required').min(50, 'Short description is Too Short').max(296, "Short Description must be at most 296 characters or 50 words"),
        longdescription: Yup.string().required('Long description is Required').min(301, 'Long description is Too Short').max(1452, "Long Description must be at most 1452 characters or 250 words"),

    });

    const [selImage, setselImage] = useState('');

    const uploadeImage = async (e) => {
        const file = e.target.files[0];
        setselImage(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
                toast.success('File Uploaded!!');
            }
        });


    }

    const { currentUser, setCurrentUser } = useAppContext();

    const postForm = useFormik({
        initialValues: {
            name: '',
            category: "",
            shortdescription: '',
            longdescription: '',
            price: '',
            shippingprice: '',
            color: '',
            style: '',
            size: '',
            fabric: '',
            image: '',
            postedAt: new Date()
        },
        onSubmit: async (values) => {
            values.image = selImage.name;
            console.log(values);

            const res = await fetch("http://localhost:5000/post/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                    'x-auth-token': currentUser.token
                }
            });
            console.log(res.status);

            if (res.status === 200) {
                toast.success("Uploaded Successfully");
            } else if (res.status === 400) {
                toast.error("Something went wrong");
            } else {
                toast.error("Something went wrong");
            }
        },
        validationSchema: productSchema
    })

    return (
        <div className="antialiased bg-mate_black">
            <div className="flex  mt-28 ">
                <div className="relative flex w-screen  flex-col   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Upload Products
                        </h3>
                    </div>
                    <form onSubmit={postForm.handleSubmit} >

                        <div className="flex flex-col gap-4 p-6">
                            <div className="flex mb-4">
                                <div className="flex-1 relative h-11 w-full min-w-[200px] mb-3 mr-5">
                                    <label
                                        htmlFor="name"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Name
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="name"
                                            value={postForm.values.name}
                                            onChange={postForm.handleChange}
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Product Name"
                                            required=""
                                            aria-describedby="name-error"
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            postForm.touched.name &&
                                            <span className="text-red-500 font-Jost">{postForm.errors.name}</span>
                                        }
                                    </div>
                                </div>
                                <div className=" flex-1 relative h-11 w-full min-w-[200px] mb-3">
                                    <label
                                        htmlFor="category"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Category
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="category"
                                            value={postForm.values.category}
                                            onChange={postForm.handleChange}
                                            name="category"
                                            type="text"
                                            autoComplete="category"
                                            placeholder="Category"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            postForm.touched.category &&
                                            <span className="text-red-500 font-Jost">{postForm.errors.category}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-10">
                                <div className="flex-1  relative h-11 w-full min-w-[200px] mb-3 mr-5">
                                    <label
                                        htmlFor="shortdescription"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Short Description
                                    </label>
                                    <div className="mt-1 ">
                                        <textarea
                                            id="shortdescription"
                                            value={postForm.values.shortdescription}
                                            onChange={postForm.handleChange}
                                            name="shortdescription"
                                            type="text"
                                            autoComplete="shortdescription"
                                            placeholder="Product Short Description"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            postForm.touched.shortdescription &&
                                            <span className="text-red-500 font-Jost">{postForm.errors.shortdescription}</span>
                                        }
                                    </div>

                                </div>
                                <div className="flex-1  relative h-11 w-full min-w-[200px] mb-3">
                                    <label
                                        htmlFor="longdescription"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Long Description
                                    </label>
                                    <div className="mt-1 ">
                                        <textarea
                                            id="longdescription"
                                            value={postForm.values.longdescription}
                                            onChange={postForm.handleChange}
                                            name="longdescription"
                                            type="text"
                                            autoComplete="longdescription"
                                            placeholder="Product Long Description"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            postForm.touched.longdescription &&
                                            <span className="text-red-500 font-Jost">{postForm.errors.longdescription}</span>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="flex mb-4 ">
                                <div className="relative h-11 w-full min-w-[200px] mb-3 mr-5">
                                    <label
                                        htmlFor="price"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Price
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="price"
                                            value={postForm.values.price}
                                            onChange={postForm.handleChange}
                                            name="price"
                                            type="number"
                                            autoComplete="price"
                                            placeholder="Product Price"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </div>
                                <div className="relative h-11 w-full min-w-[200px] mb-3">
                                    <label
                                        htmlFor="shippingprice"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Shipping Price
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="shippingprice"
                                            value={postForm.values.shippingprice}
                                            onChange={postForm.handleChange}
                                            name="shippingprice"
                                            type="number"
                                            autoComplete="shippingprice"
                                            placeholder="Product Shipping Price"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="flex-1 relative h-11 w-full min-w-[200px] mb-3 mr-5">
                                    <label
                                        htmlFor="color"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Color
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="color"
                                            value={postForm.values.color}
                                            onChange={postForm.handleChange}
                                            name="color"
                                            type="text"
                                            autoComplete="color"
                                            placeholder="Product Color"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className=" flex-1 relative h-11 w-full min-w-[200px] mb-3">
                                    <label
                                        htmlFor="style"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Style
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="style"
                                            value={postForm.values.style}
                                            onChange={postForm.handleChange}
                                            name="style"
                                            type="text"
                                            autoComplete="style"
                                            placeholder="Style"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="flex-1 relative h-11 w-full min-w-[200px] mb-3 mr-5">
                                    <label
                                        htmlFor="size"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Size
                                    </label>
                                    <div className="mt-1 ">
                                        <select
                                            id="size"
                                            value={postForm.values.size}
                                            onChange={postForm.handleChange}
                                            name="size"
                                            type="text"
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        >
                                            <option selected="">Product Size</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>Free Size</option>
                                        </select>

                                    </div>
                                </div>
                                <div className=" flex-1 relative h-11 w-full min-w-[200px] mb-3">
                                    <label
                                        htmlFor="fabric"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Fabric
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="fabric"
                                            value={postForm.values.fabric}
                                            onChange={postForm.handleChange}
                                            name="fabric"
                                            type="text"
                                            autoComplete="fabric"
                                            placeholder="Fabric"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px] mb-7">
                                <label
                                    htmlFor="uploade-image"
                                    className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Choose Product photo
                                </label>
                                <div className="mt-1  ">
                                    <input
                                        onChange={uploadeImage}
                                        id="update-image"
                                        name="update-image"
                                        type="file"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                    />

                                </div>

                            </div>

                        </div>
                        <div className="p-6 pt-0">
                            <button
                                data-ripple-light="true"
                                type="submit"
                                className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                Upload
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}

export default page