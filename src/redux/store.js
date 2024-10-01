import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: {
    items: [],
  },
  filters: {
    status: "all",
  },
};

const rootReducer = (state, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
