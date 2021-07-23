import { createSlice } from "@reduxjs/toolkit";

const init = {
  todo: [],
};

const todoReducer = createSlice({
  name: "todoReducer",
  initialState: init,
  reducers: {
    addToDo: (state, action) => {
      state.todo.push(action.payload);
    },
  },
});

export const { addToDo } = todoReducer.actions;
export default todoReducer.reducer;
