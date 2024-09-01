import { createSlice } from "@reduxjs/toolkit";

interface produceState {
  user: { id: number; name: string; email: string; company: { name: string } };
}

const initialState: produceState = {
  user: { id: 1, name: "", email: "", company: { name: "" } },
};

const productSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Other reducers go here
  },
});

export const { setUser } = productSlice.actions;

export default productSlice.reducer;
