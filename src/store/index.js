import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice";
import { users as usersFromFile } from "../data";

const usersFromStorage = JSON.parse(localStorage.getItem("users"));
const initialState = { users: usersFromStorage || usersFromFile };

!usersFromStorage && localStorage.setItem("users", JSON.stringify(usersFromFile));

export const store = configureStore({
    reducer: { users: usersReducer },
    preloadedState: initialState,
});
