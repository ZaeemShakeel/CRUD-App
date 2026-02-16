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
    <div className="flex flex-col items-center justify-center gap-8 py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
          CRUD App with Redux
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          Manage your users with a modern interface powered by Redux Toolkit.
        </p>
      </div>

      <Link
        to="/create"
        className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200"
      >
        <svg
          className="w-5 h-5 mr-2 transition-transform group-hover:rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Create User
      </Link>

      <div className="w-full overflow-hidden bg-[#1E2939] border border-gray-800 rounded-2xl shadow-2xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs text-gray-400 uppercase bg-[#111827] border-b border-gray-800">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">ID</th>
                <th scope="col" className="px-6 py-4 font-semibold">Name</th>
                <th scope="col" className="px-6 py-4 font-semibold">Email</th>
                <th scope="col" className="px-6 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {users.map((user, index) => (
                <tr
                  className="bg-[#1E2939] hover:bg-gray-800/50 transition-colors duration-150"
                  key={index}
                >
                  <td className="px-6 py-4 font-medium text-gray-500">#{user.id}</td>
                  <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-400">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-3">
                      <Link
                        to={`/edit/${user.id}`}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-lg hover:bg-blue-400/20 transition-colors border border-blue-400/20"
                      >
                        Edit
                      </Link>
                      <button
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-400 bg-red-400/10 rounded-lg hover:bg-red-400/20 transition-colors border border-red-400/20 cursor-pointer"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {users.length === 0 && (
          <div className="py-12 text-center text-gray-500 italic">
            No users found. Create one to get started!
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
