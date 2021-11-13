import * as Types from "./type";

export const initialState: number | null = null;

export default function UserReducer(
  state = initialState,
  action: Types.UserSelectedActionType
): number | null {
  switch (action.type) {
    case Types.selectedUser: {
      const user = action.payload;
      return user;
    }
    default:
      return state;
  }
}
