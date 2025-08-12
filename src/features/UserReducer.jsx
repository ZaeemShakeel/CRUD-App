import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../utils/Data";
import Update from "../components/Update";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const userData = state.find((user) => user.id == id);
      if (userData) {
        userData.name = name;
        userData.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const userData = state.find((user) => user.id == id);
      if (userData) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
