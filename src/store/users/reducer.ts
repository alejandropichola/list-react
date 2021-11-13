import * as Types from "./type";
import { UserType } from "@/types";
import { getUser, setUser } from "@/utils/storage";

export const initialState: Array<UserType> = getUser();

export default function UserReducer(
  state = initialState,
  action: Types.UserActionType
): Array<UserType> {
  switch (action.type) {
    case Types.listUser: {
      const users = getUser();
      return users;
    }
    case Types.setUsers: {
      return action.payload;
    }
    case Types.updateUsers: {
      if (action.payload.id) {
        const users = state.map((item) =>
          item.id === action.payload.id ? { ...action.payload } : item
        );
        setUser(users);
        return users;
      }
      const data = state;
      const id =
        data.length > 0 ? (data[data.length - 1].id as number) : data.length;
      data.push({ ...action.payload, id: id + 1 });
      setUser(data);
      return data;
    }
    case Types.deleteUser: {
      const data = state.filter((item) => item.id !== action.payload);
      setUser(data);
      return data;
    }
    default:
      return state;
  }
}
