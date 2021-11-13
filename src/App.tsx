import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList/UserList";
import ModalUser from "./components/ModalUser";
import { connect } from "react-redux";

import "./styles.scss";

interface AppParams {
  user?: number | null
}

export function App({ user }: AppParams) {
  return (
    <div className="app layout">
      {user ? <ModalUser user={user} /> : null}
      <aside>
        <header>
          {" "}
          <div className="logo" />{" "}
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                User List
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Users</h1>
        </header>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/users" component={UserForm} />
          <Route exact path="/users/:id" component={UserForm} />
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = function (state: any) {
  return {
    user: state.userSelected,
  };
};

export default connect(mapStateToProps, null)(React.memo(App));
