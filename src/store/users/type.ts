import { UserType } from "@/types";

export const updateUsers = "UPDATE_USERS";
export const deleteUser = "DELETE_USER";
export const listUser = "List_USER";
export const setUsers = "SET_USERS";

interface BaseAction {
  type: typeof updateUsers;
  payload: UserType;
}

interface ListAction {
  type: typeof listUser;
}

interface setUsersAction {
  type: typeof setUsers;
  payload: Array<UserType>;
}

interface deleteUserAction {
  type: typeof deleteUser;
  payload?: number;
}

export type UserActionType =
  | BaseAction
  | ListAction
  | setUsersAction
  | deleteUserAction;
