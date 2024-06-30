import React from "react";
import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

import { OverlayTrigger, Button } from "react-bootstrap";
import { useWallet } from "wallets/wallet";
import { getEtherscanAddressUrl, shortenAddr } from "web3/utils";
import { ReactComponent as RadioSvg } from "assets/svg/icons/radio.svg";
import { ReactComponent as CreditCardSvg } from "assets/svg/icons/credit-card.svg";
import { ReactComponent as GlobekSvg } from "assets/svg/icons/globe.svg";
import { ReactComponent as UserSvg } from "assets/svg/icons/user.svg";

import s from "./styles.module.css";

const ContacthBtn = styled(Button)`
  background-color: transparent;
  font-size: 13px;
  border-radius: 84px;
  padding: 10px 15px;
  border: 1px solid #ff4cb5;
  width: 230px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #ff4cb5;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 1px solid #ff4cb5;
  }
  &:not(:disabled):not(.disabled):active {
    background-color: transparent;
    color: #fff;
    border: 1px solid #ff4cb5;
  }
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 5%);
  }
`;

const ConnectedWallet: React.FunctionComponent = (props) => {
  const wallet = useWallet();

  function handleWalletConnect() {
    wallet.showWalletsModal();
  }

  const handleWalletDisconnect = () => {
    wallet.disconnect();
  };

  if (wallet.connecting) {
    return (
      <div className={s.component}>
        <OverlayTrigger
          placement="bottom"
          trigger="click"
          rootClose
          overlay={
            <div
              style={{
                width: "255px",
                background: "#0a0a0a",
                zIndex: 9999,
                border: "1px solid #ff4cb5",
                marginTop: "15px",
              }}
            >
              <div className={s.stats} style={{ padding: "20px 20px 0 20px" }}>
                <div className={s.statRow}>
                  <div>
                    <RadioSvg className={s.statIcon} />
                  </div>
                  <div>
                    <span className={s.statName}>Status</span>
                  </div>
                  <div>
                    <div className={s.statTag}>Connecting...</div>
                  </div>
                </div>
                <div className={s.statRow}>
                  <div>
                    <CreditCardSvg className={s.statIcon} />
                  </div>
                  <div>
                    <span className={s.statName}>Wallet</span>
                  </div>
                  <div>
                    <span className={s.statValue}>{wallet.connecting?.name}</span>
                  </div>
                </div>
              </div>
              <div className={s.disconnectBtnRow}>
                <Button type="ghost" className={s.disconnectBtn} onClick={handleWalletDisconnect}>
                  Disconnect
                </Button>
              </div>
            </div>
          }
        >
          <div className={s.connectBtn}>Connecting...</div>
        </OverlayTrigger>
      </div>
    );
  }

  if (!wallet.isActive) {
    return (
      <div className={s.component}>
        <ContacthBtn onClick={() => handleWalletConnect()}>
          <BiPlus size={20} /> CONNECT WALLET
        </ContacthBtn>
      </div>
    );
  }

  return (
    <div className={s.component}>
      <div className={s.walletBox}>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          rootClose
          overlay={
            <div style={{ background: "#0a0a0a", zIndex: 9999, border: "1px solid #ff4cb5", marginTop: "5px" }}>
              <div className={s.walletHeader}>
                <div className={s.walletAvatarCol}>
                  <UserSvg className={s.walletAvatar} />
                </div>
                <div>
                  <a href={getEtherscanAddressUrl(wallet.account!)} className={s.walletPreviewHash}>
                    {shortenAddr(wallet.account!, 8, 8)}
                  </a>
                </div>
              </div>
              <div className={s.stats}>
                <div className={s.statRow}>
                  <div>
                    <RadioSvg className={s.statIcon} />
                  </div>
                  <div>
                    <span className={s.statName}>Status</span>
                  </div>
                  <div>
                    <span className={s.statTag}>Connected</span>
                  </div>
                </div>
                <div className={s.statRow}>
                  <div>
                    <CreditCardSvg className={s.statIcon} />
                  </div>
                  <div>
                    <span className={s.statName}>Wallet</span>
                  </div>
                  <div>
                    <span className={s.statValue}>{wallet.connector?.name}</span>
                  </div>
                </div>
                <div className={s.statRow}>
                  <div>
                    <GlobekSvg className={s.statIcon} />
                  </div>
                  <div>
                    <span className={s.statName}>Network</span>
                  </div>
                  <div>
                    <span className={s.statValue}>{wallet.networkName}</span>
                  </div>
                </div>
              </div>
              <div className={s.disconnectBtnRow} style={{ cursor: "pointer" }}>
                <Button type="ghost" className={s.disconnectBtn} onClick={handleWalletDisconnect}>
                  Disconnect
                </Button>
              </div>
            </div>
          }
        >
          <div className={s.walletPreview}>
            <div>
              <span className={s.walletPreviewHashOnBtn}>{shortenAddr(wallet.account!, 4, 4)}</span>
            </div>
          </div>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default ConnectedWallet;
