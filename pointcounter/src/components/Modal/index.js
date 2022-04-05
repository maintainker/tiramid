import React from "react";
import styled from "styled-components";
import ModalPortal from "./Portal";

const Modal = ({ isOpened = false, closeModal, children }) => {
  return (
    <ModalPortal>
      {isOpened && (
        <ModalContainer>
          <Dim onClick={closeModal} />
          <Contents>{children}</Contents>
        </ModalContainer>
      )}
    </ModalPortal>
  );
};

export default Modal;
const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
`;
const Dim = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Contents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;
