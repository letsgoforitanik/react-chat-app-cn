import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice";
import { thunkMiddleware } from "./thunkMiddleware";
import { users as usersFromFile } from "../data";

const usersFromStorage = JSON.parse(localStorage.getItem("users"));
const initialState = { users: usersFromStorage || usersFromFile };

export const store = configureStore({
    reducer: { users: usersReducer },
    middleware: [thunkMiddleware],
    preloadedState: initialState,
});
