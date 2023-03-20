import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineHome,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { SPRING_URL } from "../tools/restApi";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const [clicked, setClicked] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`${SPRING_URL}user/${id}`);
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${SPRING_URL}user/${id}`);
  };
  return (
    <div>
      {" "}
      <div className="pb-20 dark:bg-gray-900 ">
        <h1 className="mt-6 mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            View
          </span>{" "}
          Employee
        </h1>

        <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div
            className="flex justify-end px-4 pt-4 "
            onClick={() => setClicked(!clicked)}>
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className={
                clicked
                  ? "hidden"
                  : "inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              }
              type="button">
              <span className="sr-only">Open dropdown</span>
              <svg
                className={(clicked ? "hidden" : "") + " w-6 h-6 "}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>

            <div
              id="dropdown"
              className={
                "z-10 " +
                (clicked ? "" : "hidden") +
                "  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow  w-40  dark:bg-gray-700"
              }>
              <ul className="py-4 " aria-labelledby="dropdownButton">
                <li>
                  <Link
                    to={`/editUser/${user.id}`}
                    className="flex items-center justify-center py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <AiOutlineEdit className="pr-1 text-xl" />
                    Edit
                  </Link>
                </li>

                <li>
                  <a
                    onClick={() => deleteUser(user.id)}
                    href="/"
                    className="flex items-center justify-center py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    <AiOutlineDelete className="pr-1 text-xl" />
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            {/* <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            /> */}
            <h5 className="mb-1 text-xl font-medium text-gray-900 capitalize dark:text-white">
              {user.name}
            </h5>
            <span className="text-base text-gray-500 dark:text-gray-400">
              Username: {user.username}
            </span>
            <span className="text-base text-gray-500 dark:text-gray-400">
              Email: {user.email}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a
                href="/"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg items-centerinline-flex hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <AiOutlineHome className="pr-1 text-2xl" />
                Back to home
              </a>
              {/* <Link
               to={`/editUser/${user.id}`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                Back to Home
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
