import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice";
import { thunkMiddleware } from "./thunkMiddleware";

export const store = configureStore({ reducer: { users: usersReducer }, middleware: [thunkMiddleware] });
