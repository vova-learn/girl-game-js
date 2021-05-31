import {data} from "../mocks/data";
import {getUsers} from "../utils";

const users = getUsers(data);

export const state = {
    users,
    friends: data.friends,
};