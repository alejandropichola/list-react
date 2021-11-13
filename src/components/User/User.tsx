import React from "react";
import { UserType } from "../../types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { SelectedUser } from "@/store/user/action";
import "./User.scss";

interface UserParams extends UserType {
  deleteUser: Function;
}

export function User({ name, email, phone, id, country, deleteUser }: UserParams) {
  return (
    <div className="product">
      <span>{name}</span>
      <span>{email}</span>
      <span>{country}</span>
      <span>{phone}</span>
      <span>
        <Link className="button button__primary" to={`/users/${id}`}>
          Editar
        </Link>
        <button
          className="button button__cancel"
          onClick={() => deleteUser(id)}
        >
          Delete
        </button>
      </span>
    </div>
  );
}

const mapDispatchToProps = {
  deleteUser: SelectedUser,
};

export default connect(null, mapDispatchToProps)(User);
