import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers: function (state, { payload }) {
            return [...payload, ...state];
        },
        getUsers: function (state) {
            return [...state];
        },
        addMessage: function (state, { payload }) {
            const { userId, message } = payload;
            return state.map((user) => (user.id == userId ? { ...user, chats: [...user.chats, message] } : user));
        },
    },
});

export const { addUsers, getUsers, addMessage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
