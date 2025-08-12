import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/UserReducer";
import { useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      }),
      navigate("/")
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <form
        className="max-w-sm mx-auto bg-[#1E2939] p-10 rounded-2xl w-full"
        onSubmit={handleUpdate}
      >
        <div className="mb-5">
          <h2 className="font-bold text-3xl text-white mb-4">
            Edit Your Details
          </h2>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-blue-500 hover:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-blue-500 dark:hover:border-blue-500"
            placeholder="ex: Ali Ahmed"
            required
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-blue-500 hover:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:ring-blue-500 dark:hover:border-blue-500"
            placeholder="ex: ali@gmail.com"
            required
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br hover:ring-4 hover:outline-none hover:ring-green-300 dark:hover:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
