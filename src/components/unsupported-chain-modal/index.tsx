import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { ModalProps } from "react-overlays/Modal";
import { useWallet } from "wallets/wallet";
import { getNetworkName } from "web3/utils";

export type UnsupportedChainModalProps = ModalProps & {};

const WEB3_CHAIN_ID = Number(process.env.REACT_APP_WEB3_CHAIN_ID);

const CustomBtn = styled.button`
  color: white;
  background: #0a0a0a;
  border-radius: 40px;
  width: 150px;
  height: 40px;
  margin: 20px auto 0;
  border: 1.5px solid #ff4cb5;
  text-align: center;
  font-size: 13px;
  padding: 10px 30px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const UnsupportedChainModal: React.FunctionComponent<UnsupportedChainModalProps> = (props) => {
  const { ...modalProps } = props;

  const wallet = useWallet();

  return (
    <Modal centered closable={false} footer={[]} {...modalProps}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Wrong network</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <p>
          Please switch your wallet network to <b>{getNetworkName(WEB3_CHAIN_ID)}</b> to use the app
        </p>
        <p>If you still encounter problems, you may want to switch to a different wallet</p>
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <CustomBtn
            onClick={(ev: React.MouseEvent<HTMLElement>) => {
              // props.onHide?.(ev);
              props.onHide && props.onHide();
              wallet.showWalletsModal();
            }}
          >
            Switch wallet
          </CustomBtn>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UnsupportedChainModal;
