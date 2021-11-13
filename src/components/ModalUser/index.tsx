import React from "react";
import { connect } from "react-redux";
import { SelectedUser } from "@/store/user/action";
import { deleteUserAction } from "@/store/users/action";

import "./modal.scss";

interface ModalParams {
  user: number;
  DeleteUserAction: Function;
  SelectedUser: Function;
}

function ModalUser(props: ModalParams) {
  const { DeleteUserAction, SelectedUser, user } = props;
  const closeModal = () => SelectedUser(null);

  const deleteUser = () => {
    DeleteUserAction(user);
    SelectedUser(null);
  };

  return (
    <div className="app-modal">
      <div className="app-modal__container">
        <div className="app-modal__header">
          <h1 className="app-modal__title">Delete user {user}</h1>
          <button onClick={closeModal} className="app-modal__button-close">
            X
          </button>
        </div>
        <div className="app-moda__body">
          <p>Are you sure to delete?</p>
          <div className="app-modal__action">
            <button onClick={deleteUser} className="button button__danger">
              Yes
            </button>
            <button onClick={closeModal} className="button cursor-pointer box-shadow">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  SelectedUser: SelectedUser,
  DeleteUserAction: deleteUserAction,
};

export default connect(null, mapDispatchToProps)(ModalUser);
