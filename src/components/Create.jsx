import React, { useState } from "react";
import { addUser } from "../features/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      alert("A user with this email already exists!");
      return;
    }
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-5 sm:p-8">
      <div className="w-full max-w-md">
        <div className="bg-[#1E2939] border border-gray-800 rounded-3xl shadow-2xl shadow-black/20 p-8 sm:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Add New User
            </h2>
            <p className="text-gray-400 text-sm">
              Please fill in the details below to create a new account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2 ml-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-5 py-3.5 bg-gray-800/50 border border-gray-700 text-white text-sm rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none placeholder:text-gray-500"
                placeholder="e.g. Zaeem Shakeel"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2 ml-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-5 py-3.5 bg-gray-800/50 border border-gray-700 text-white text-sm rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none placeholder:text-gray-500"
                placeholder="e.g. zaeem@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold rounded-2xl text-sm px-6 py-4 text-center transition-all shadow-lg shadow-indigo-900/40 cursor-pointer"
              >
                Create User
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="hidden sm:block px-6 py-4 text-sm font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-800 rounded-2xl transition-all border border-gray-700 cursor-pointer"
              >
                Cancel
              </button>
            </div>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="sm:hidden w-full px-6 py-4 text-sm font-semibold text-gray-300 bg-gray-800/50 hover:bg-gray-800 rounded-2xl transition-all border border-gray-700 cursor-pointer"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
