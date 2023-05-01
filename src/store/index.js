import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice";
import { users as usersFromFile } from "../data";

// For creating the initial state, first localstorage is checked
// if nothing is found, the user data is fetched from data.js file
// and then the data is stored in the localstorage, so that next time
// onwards we don't need to rely upon data.js file, and all of our changes
// are persistent.

const usersFromStorage = JSON.parse(localStorage.getItem("users"));
const initialState = { users: usersFromStorage || usersFromFile };

!usersFromStorage && localStorage.setItem("users", JSON.stringify(usersFromFile));

export const store = configureStore({
    reducer: { users: usersReducer },
    preloadedState: initialState,
});
