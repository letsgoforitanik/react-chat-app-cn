import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUsers: function (state, { payload }) {
            return [...payload, ...state];
        },
        addMessage: function (state, { payload }) {
            const { userId, message } = payload;
            return state.map((user) => (user.id == userId ? { ...user, chats: [...user.chats, message] } : user));
        },
    },
});

export const { addUsers, addMessage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
