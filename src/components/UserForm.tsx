import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import validator from "validator";
import type { UserType } from "@/types";
import { changeUser } from "@/store/users/action";

import "./components.scss";

function UserForm(props: any) {
  const initialValues: UserType = {
    name: "",
    email: "",
    phone: "",
    country: "",
  };
  const [values, setValues] = useState(initialValues);
  const { changeUser, users, match } = props;
  const id: number = parseInt(match.params.id);
  const hisotry = useHistory();

  useEffect(() => {
    if (id) {
      const user = users.find((item: UserType) => item.id === id);
      setValues(user);
    }
  }, [id, users]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      values.id = id;
    }
    changeUser(values);
    hisotry.push("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="centered">
      <h2>{id ? "Update user" : "Add new user"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="label">
          Name
        </label>
        <div className="container-input">
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleInputChange}
          />
          {!values.name ? (
            <span className="error-input">Error name required</span>
          ) : null}
        </div>
        <label htmlFor="" className="label">
          Email
        </label>
        <div className="container-input">
          <input
            placeholder="Email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleInputChange}
          />
          {!validator.isEmail(values.email) ? (
            <span className="error-input">Error email invalid</span>
          ) : null}
        </div>
        <label htmlFor="" className="label">
          Phone
        </label>
        <div className="container-input">
          <input
            placeholder="Phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={handleInputChange}
          />
        </div>
        <label htmlFor="" className="label">
          País
        </label>
        <div className="container-input">
          <input
            placeholder="Country"
            name="country"
            type="text"
            value={values.country}
            onChange={handleInputChange}
          />
        </div>
        <button
          className={`button ${
            !validator.isEmail(values.email) || !values.name
              ? "button_disabled"
              : "button__primary"
          }`}
          disabled={!validator.isEmail(values.email) || !values.name}
          type="submit"
        >
          Aceptar
        </button>

        <Link className="button button__cancel" to="/">
          Cancelar
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = function (state: any) {
  return {
    users: state.user,
  };
};

const mapDispatchToProps = {
  changeUser: changeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
