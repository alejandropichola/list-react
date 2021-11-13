import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserType } from "@/types";
import User from "@/components/User/User";

import "./_user-list.scss";

function UserList() {
  const data: Array<UserType> = useSelector((state: any) => {
    return state.user;
  });

  return (
    <section>
      <div className="header-list">
        <h2>User list</h2>
        <div>
          <Link className="button button__primary" to={`/users`}>
            Create
          </Link>
        </div>
      </div>
      <div className="header-table">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Country</li>
          <li>Phone</li>
          <li>Option</li>
        </ul>
      </div>
      <ul className="user-list">
        {data.map((user, i) => (
          <li key={i}>
            <User
              name={user.name}
              email={user.email}
              phone={user.phone}
              country={user.country}
              id={user.id}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserList;
