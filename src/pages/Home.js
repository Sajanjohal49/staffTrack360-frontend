import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SPRING_URL } from "../tools/restApi";
import { CiViewTimeline } from "react-icons/ci";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`${SPRING_URL}users`);
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${SPRING_URL}user/${id}`);
    loadUsers();
  };

  return (
    <div className=" dark:bg-gray-900">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 lg:pl-28 ">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="text-gray-900 bg-white border-b dark:bg-gray-800 dark:border-gray-700 dark:text-slate-200"
                key={index + 1}>
                <td className="px-6 py-4 lg:pl-28 dark:text-slate-200">
                  {index + 1}
                </td>
                <td className="px-6 py-4 dark:text-slate-200">{user.name}</td>
                <td className="px-6 py-4 dark:text-slate-200">
                  {user.username}
                </td>

                <td className="px-6 py-4 font-medium whitespace-nowrap ">
                  {user.email}
                </td>
                <th
                  scope="row"
                  className="px-1 py-2.5 md:flex ark:text-slate-200">
                  <Link
                    to={`/viewUser/${user.id}`}
                    type="button"
                    className="relative inline-flex items-center justify-center p-0.5   mb-2 md:mb-0 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-orange-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative flex items-center justify-center px-2.5 py-2 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
                      <CiViewTimeline className="mr-1 text-xl text-green-800 dark:text-green-400 group-hover:text-white" />
                      <p>View</p>
                    </span>
                  </Link>

                  <Link
                    to={`/editUser/${user.id}`}
                    className="relative inline-flex items-center justify-center p-0.5   mb-2 md:mb-0 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative flex items-center justify-center px-2.5 py-2 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
                      <AiOutlineEdit className="mr-1 text-xl text-purple-500 group-hover:text-white" />
                      <p>Edit</p>
                    </span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => deleteUser(user.id)}
                    className="relative inline-flex items-center justify-center p-0.5   mb-2 md:mb-0 mr-2 overflow-hidden text-sm font-medium text-red-600 rounded-lg group bg-gradient-to-br from-red-600 to-red-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative flex items-center justify-center px-2.5 py-2 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0">
                      <AiOutlineDelete className="mr-1 text-xl text-red-500 group-hover:text-white " />
                      <p className="">Delete</p>
                    </span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
