import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);

  const { name, email } = existingUser || {};
  const [uname, setName] = useState(name || "");
  const [uemail, setEmail] = useState(email || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();

    // Check if the updated email already exists in other users
    const emailExists = users.some(
      (user) => user.email === uemail && user.id != id
    );

    if (emailExists) {
      alert("This email already exists. Please use a different one.");
      return;
    }

    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 sm:p-8">
      <div className="w-full max-w-md">
        <div className="bg-[#1E2939] border border-gray-800 rounded-3xl shadow-2xl shadow-black/20 p-8 sm:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Update Details
            </h2>
            <p className="text-gray-400 text-sm">
              Modify the user information and save your changes.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleUpdate}>
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
                className="w-full px-5 py-3.5 bg-gray-800/50 border border-gray-700 text-white text-sm rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none placeholder:text-gray-500"
                placeholder="e.g. Zaeem Shakeel"
                required
                value={uname}
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
                className="w-full px-5 py-3.5 bg-gray-800/50 border border-gray-700 text-white text-sm rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none placeholder:text-gray-500"
                placeholder="e.g. zaeem@example.com"
                required
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-bold rounded-2xl text-sm px-6 py-4 text-center transition-all shadow-lg shadow-emerald-900/40 cursor-pointer"
              >
                Update User
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

export default Update;
