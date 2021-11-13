export const selectedUser = "SELECTED_USER";
interface SelectedUserId {
  type: typeof selectedUser;
  payload: number | null;
}

export type UserSelectedActionType =
  | SelectedUserId