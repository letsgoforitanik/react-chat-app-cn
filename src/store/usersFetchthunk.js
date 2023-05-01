import { users as usersData } from "../data";
import { addUsers } from "./slice";

export const usersFetchThunk = function (dispatch) {
    const users = JSON.parse(localStorage.getItem("users"));

    if (users != null) {
        console.log("users from localstorage -> ", users);
        dispatch(addUsers(users));
        return;
    }

    console.log("users from file -> ", usersData);
    dispatch(addUsers(usersData));
};
