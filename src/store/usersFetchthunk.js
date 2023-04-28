import { users } from "../data";
import { addUsers } from "./slice";

export const usersFetchThunk = function (dispatch, getState) {
    dispatch(addUsers(users));
};
