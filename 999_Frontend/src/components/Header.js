import React, { useState } from "react";
import Modal from "./Modal";
import "../css/modal.css";
import "../css/header.css";

function Header() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="header">
      <button className="signup-btn">Sign-Up</button>

      <React.Fragment>
        <button className="login-btn" onClick={openModal}>
          Login
        </button>
        <Modal open={modalOpen} close={closeModal} header="Login"></Modal>
      </React.Fragment>
    </div>
  );
}

export default Header;
