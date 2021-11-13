import {
  updateUsers,
  listUser,
  setUsers,
  UserActionType,
  deleteUser
} from "./type";
import { UserType } from "@/types";

export function changeUser(payload: UserType): UserActionType {
  return {
    type: updateUsers,
    payload,
  };
}

export function getUsersAction(): UserActionType {
  return {
    type: listUser,
  };
}

export function setUserAction(payload: Array<UserType>): UserActionType {
  return {
    type: setUsers,
    payload,
  };
}

export function deleteUserAction(payload: number): UserActionType {
  return {
    type: deleteUser,
    payload,
  };
}