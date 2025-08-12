import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/UserReducer";

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen px-4 sm:px-8">
      <h2 className="font-bold text-2xl sm:text-3xl text-center">
        CRUD App with Redux
      </h2>

      <Link
        to="/create"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-lime-300 dark:hover:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-2 sm:px-5 sm:py-2.5 text-center mb-4"
      >
        Create User
      </Link>

      <div className="w-full lg:w-[70%] overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">
                ID
              </th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">
                Name
              </th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3">
                Email
              </th>
              <th scope="col" className="px-4 py-2 sm:px-6 sm:py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <td className="px-4 py-2 sm:px-6 sm:py-4">{user.id}</td>
                <th
                  scope="row"
                  className="px-4 py-2 sm:px-6 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                <td className="px-4 py-2 sm:px-6 sm:py-4">{user.email}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 flex flex-col sm:flex-row justify-center items-center gap-2">
                  <Link
                    to={`/edit/${user.id}`}
                    className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center"
                  >
                    Edit
                  </Link>
                  <button
                    className="w-full sm:w-auto text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-red-300 dark:hover:ring-red-800 font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
