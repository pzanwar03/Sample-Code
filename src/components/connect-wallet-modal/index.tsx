import React from "react";

import { Modal } from "react-bootstrap";
import styled from "styled-components";
import MetamaskIcon from "../../assets/img/metamask-logo.svg";
import walletIcon from "../../assets/img/walletconnect.svg";
// import trezorIcon from "../../assets/img/trezor-logo.svg";
import coinbaseIcon from "../../assets/img/coinbase-logo.svg";

import { WalletConnector } from "wallets/types";
import { useWallet, WalletConnectors } from "wallets/wallet";

const Wallet = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
  background: #0a0a0a;
  border-radius: 40px;
  width: 200px;
  height: 45px;
  margin: 10px 5px;
  border: 1.5px solid #ff4cb5;
  font-size: 13px;
  padding: 8px 17px;
  & img {
    width: 24px;
    margin-right: 10px;
  }
`;
const ModelInfo = styled.div`
  & p {
    font-size: 13px;
    & a {
      color: #ff4cb5;
    }
  }
`;
const StyledModal = styled(Modal)`
  .modal-dialog {
    width: 350px;
  }
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-body {
    padding-top: 20px !important;
    padding-bottom: 12px !important;
  }
  @media (max-width: 576px) {
    .modal-dialog {
      width: 100%;
    }
  }
`;

const ConnectWalletModal: React.FunctionComponent<any> = (props) => {
  const wallet = useWallet();

  // const [ledgerModal, setLedgerModal] = React.useState<boolean>(false);

  function handleConnectorSelect(connector: WalletConnector) {
    if (wallet.isActive) {
      return;
    }

    if (connector.id === 'ledger') {
      // return setLedgerModal(true);
    }

    return wallet.connect(connector);
  }

  return (
    <>
      <StyledModal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Connect to a wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModelInfo>
            <div className="btn-wrapper">
              <Wallet onClick={() => handleConnectorSelect(WalletConnectors[0])}>
                <img src={MetamaskIcon} alt="" />
                <span>METAMASK</span>
              </Wallet>
              <Wallet onClick={() => handleConnectorSelect(WalletConnectors[1])}>
                <img src={walletIcon} alt="" />
                <span>WALLET CONNECT</span>
              </Wallet>
              {/* <Wallet onClick={() => handleConnectorSelect(WalletConnectors[2])}>
                <img src={ledgerIcon} alt="" />
                <span>LEDGER WALLET</span>
              </Wallet> */}
              {/* <Wallet onClick={() => handleConnectorSelect(WalletConnectors[3])}>
                <img src={trezorIcon} alt="" />
                <span>TREZOR WALLET</span>
              </Wallet> */}
              <Wallet onClick={() => handleConnectorSelect(WalletConnectors[4])}>
                <img src={coinbaseIcon} alt="" />
                <span>COINBASE WALLET</span>
              </Wallet>
              {/* <Wallet onClick={() => handleConnectorSelect(WalletConnectors[5])}>
                <img src={portisIcon} alt="" />
                <span>PORTIS WALLET</span>
              </Wallet> */}
            </div>
          </ModelInfo>
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default ConnectWalletModal;
