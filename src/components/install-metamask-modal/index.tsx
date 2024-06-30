import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { ModalProps } from "react-overlays/Modal";

export type InstallMetaMaskModalProps = ModalProps & {};

const CustomBody = styled(Modal.Body)`
  padding: 8px 20px 20px 20px !important;
`;
const CustomBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #0a0a0a;
  border-radius: 40px;
  width: 200px;
  height: 40px;
  margin: 10px auto 0;
  border: 1.5px solid #ff4cb5;
  text-align: center;
  font-size: 13px;
  padding: 5px 30px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const InstallMetaMaskModal: React.FunctionComponent<InstallMetaMaskModalProps> = (props) => {
  const { ...modalProps } = props;

  return (
    <Modal centered closable={false} footer={[]} {...modalProps}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Warning</Modal.Title>
      </Modal.Header>
      <CustomBody>
        <p>You need to have MetaMask installed to continue. Once you have installed it, please refresh the page</p>
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <CustomBtn
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
          >
            Install METAMASK
          </CustomBtn>
        </div>
      </CustomBody>
    </Modal>
  );
};

export default InstallMetaMaskModal;
