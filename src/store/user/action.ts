import { selectedUser, UserSelectedActionType } from "./type";

export function SelectedUser(payload: number | null): UserSelectedActionType {
    return {
      type: selectedUser,
      payload,
    };
  }