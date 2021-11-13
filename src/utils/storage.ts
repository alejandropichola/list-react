import { UserType } from "@/types";

export function getUser(): Array<UserType> {
  const data = localStorage.getItem("users");
  return data ? (JSON.parse(data) as Array<UserType>) : [];
}

export function setUser(users: Array<UserType>): void {
  localStorage.setItem("users", JSON.stringify(users));
}
