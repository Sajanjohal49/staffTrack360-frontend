import axios from "axios";
import React, { Fragment, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { SPRING_URL } from "../tools/restApi";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${SPRING_URL}user`, user);
    navigate("/");
  };
  return (
    <Fragment>
      <div className="pb-20 dark:bg-gray-900 ">
        <h1 className="mt-6 mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Add
          </span>{" "}
          Employee
        </h1>

        <div className="mx-auto bg-white rounded-lg shadow md:w-1/2 sm:w-full dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="py-10">
            <p className="pl-10 text-lg font-normal text-left text-gray-500 lg:text-xl dark:text-gray-100 mb-9">
              Registration Form
            </p>
            <form className="px-10 mx-auto " onSubmit={(e) => onSubmit(e)}>
              <div className="mb-6 ">
                <label
                  htmlFor="name"
                  className="block mb-2 ml-1 text-sm font-normal text-left text-gray-600 lg:text-base dark:text-white">
                  Name
                </label>
                <input
                  type={"text"}
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block mb-2 ml-1 text-sm font-medium text-left text-gray-600 lg:text-base dark:text-white">
                  Username
                </label>
                <input
                  type={"text"}
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 ml-1 text-sm font-medium text-left text-gray-600 lg:text-base dark:text-white">
                  Email
                </label>
                <input
                  type={"text"}
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex ">
                <button
                  type="submit"
                  className="flex text-white  bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-8 lg:px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                  <AiOutlineSend className="pr-1 text-xl " />
                  Submit
                </button>
                <a
                  href="/"
                  className="flex items-center justify-center px-8 ml-2 text-sm font-medium text-center text-black bg-white border-2 border-gray-500 rounded-lg lg:px-12 dark:hover:border-white hover:bg-gray-300 dark:hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:text-white dark:focus:ring-blue-800">
                  <RxCross2 className="pr-2 text-2xl " />
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddUser;
