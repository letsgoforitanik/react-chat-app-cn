import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers: function (state, { payload }) {
            return [...payload, ...state];
        },
    },
});

export const { addUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
