"use client";
import useAppContext from "@/context/AppContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageProduct = () => {
  const [orderList, setOrderList] = useState([]);
  const { currentUser, setCurrentUser } = useAppContext();

  const fetchOrderData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/getall`, {
      headers: {
        "x-auth-token": currentUser.token,
      },
    })
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setOrderList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const deleteOrder = (id) => {
    fetch("http://localhost:5000/order/delete/" + id, { method: "DELETE" })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Successfully deleted!");
          fetchOrderData();
        } else {
          toast.error("Some error occured");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some error occured");
      });
  };

  return (
    <>
      <div className="mt-24 relative flex flex-col w-full h-full font-Jost text-white bg-mate_black shadow-md bg-clip-border rounded-xl">
       <h1 className="text-center my-5 text-4xl font-Sedan">Manage Orders</h1>
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-2 border-solid border-sky-400">
                <p className="block font-bold text-sm antialiased  leading-none text-sky-500">
                  User
                </p>
              </th>
              <th className="p-4 border-2 border-solid border-sky-400">
              <p className="block font-bold text-sm antialiased  leading-none text-sky-500">
                  Order ID
                </p>
              </th>
              <th className="p-4 border-2 border-solid border-sky-400 ">
              <p className="block font-bold text-sm antialiased  leading-none text-sky-500">
                  Product Name
                </p>
              </th>
              <th className="p-4 border-2 border-solid border-sky-400 ">
              <p className="block font-bold text-sm antialiased  leading-none text-sky-500">
                  Address
                </p>
              </th>
              <th className="p-4 border-2 border-solid border-sky-400 ">
              <p className="block font-bold text-sm antialiased  leading-none text-sky-500">
                  Price
                </p>
              </th>
              <th className="p-4 border-2 border-solid border-sky-400 ">
              <p className="block font-bold text-sm antialiased  leading-none text-sky-500">
                  Status
                </p>
              </th>
              <th className="p-4 border-2 border-solid border-red-400 ">
              <p className="block font-bold text-sm antialiased  leading-none text-red-500">
                  Delete
                </p>
              </th>
              
            </tr>
          </thead>
          {orderList.map((order) => {
            return (
              <tbody key={orderList._id}>
                <tr className="even:bg-blue-gray-50/50 ">
                  {/* <td className="p-4 border gray-200">
                    <div class="h-[30px] w-[30px] rounded-full">
                      <img class="h-full w-full rounded-full" alt="" />
                    </div>
                  </td> */}
                  <td className="p-4 border-2 border-solid border-gray-200">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                      {order.shipping.name}
                    </p>
                  </td>
                  <td className="p-4 border-2 border-solid border-gray-200">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                      {order._id}
                    </p>
                  </td>
                  <td className="p-4 border-2 border-solid border-gray-200">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                      {order.items.map((item) => (
                        <div>
                          {item.name}
                        </div>
                      ))}
                    </p>
                  </td>


                  <td className="p-4 border-2 border-solid border-gray-200">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                      {order.shipping.address.line1}
                    </p>
                  </td>
                  <td className="p-4 border-2 border-solid border-gray-200">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                      ₹{order.details.amount / 100}
                    </p>
                  </td>
                  <td className="p-4 border-2 border-solid border-gray-200 ">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                      {order.status}
                    </p>
                  </td>




                  <td className="p-4 border-2 border-solid border-red-500 ">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 border gray-200"
                      onClick={() => {
                        deleteOrder(order._id);
                      }}
                    >
                      Trash
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ManageProduct;