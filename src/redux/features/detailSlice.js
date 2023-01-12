import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useParams } from "react-router-dom";

// const { id } = useParams();
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const getDetail = createAsyncThunk("detail/getDetail", async (id) => {
  return fetch(`http://192.168.100.118:8000/todo-user/${id}`).then((res) =>
    res.json()
  );
});

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default detailSlice.reducer;
