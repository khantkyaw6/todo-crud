import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const getUserData = createAsyncThunk("user/getUserData", async () => {
  return fetch("http://192.168.100.118:8000/todo-user")
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

// export const getUserDetail = createAsyncThunk(
//   "detail/getUserDetail",
//   async (id) => {
//     return fetch(`http://192.168.100.118:8000/todo-user/${id}`)
//       .then((res) => res.json())
//       .catch((err) => console.log(err));
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getUserData.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    // [getUserDetail.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getUserDetail.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.data = action.payload;
    // },
  },
  reducers: {},
});

export default userSlice.reducer;
