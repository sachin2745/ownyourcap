'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {

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
    const postForm = useFormik({
        initialValues: {
            name: '',
            category: "",
            description: '',
            price: '',
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
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);

            if (res.status === 200) {
                toast.success("Publish Successfully", { varient: "success" });
            } else if (res.status === 400) {
                toast.error("Something went wrong", { varient: "danger" });
            } else {
                toast.error("Something went wrong", { varient: "danger" });
            }
        },

    })

    return (
        <div className="antialiased bg-mate_black">
                <div className="flex ml-72 mt-28 ">
                    <div className="relative flex w-96 flex-col   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                                Upload Products
                            </h3>
                        </div>
                        <form onSubmit={postForm.handleSubmit} >

                            <div className="flex flex-col gap-4 p-6">
                                <div className="relative h-11 w-full min-w-[200px] mb-3">
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
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px] mb-3">
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
                                    </div>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px] mb-3">
                                    <label
                                        htmlFor="description"
                                        className="font-Jost fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Product Description
                                    </label>
                                    <div className="mt-1 ">
                                        <input
                                            id="description"
                                            value={postForm.values.description}
                                            onChange={postForm.handleChange}
                                            name="description"
                                            type="text"
                                            autoComplete="description"
                                            placeholder="Product Description"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </div>
                                <div className="relative h-11 w-full min-w-[200px] mb-3">
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