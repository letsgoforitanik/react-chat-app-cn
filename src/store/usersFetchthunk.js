import { users as usersData } from "../data";
import { addUsers } from "./slice";

export const usersFetchThunk = function (dispatch) {
    const users = JSON.parse(localStorage.getItem("users"));

    if (users) {
        console.log("users fetched from localstorage");
        dispatch(addUsers(users));
    } else {
        console.log("users fetched from data.js file");
        dispatch(addUsers(usersData));
    }
};
