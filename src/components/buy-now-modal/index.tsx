import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import styled from "styled-components";

import BigNumber from "bignumber.js";
// import { useWallet } from "wallets/wallet";
// import { useWeb3Contracts } from "web3/contracts";
// import { web3 } from "web3/utils";
// import { useAsyncEffect } from "hooks/useAsyncEffect";
import { formatBigValue, getHumanValue, getEtherscanTxUrl } from "web3/utils";

const BuyNow = styled.button<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? "grey" : "white")};
  background: #0a0a0a;
  border-radius: 40px;
  width: 260px;
  height: 56px;
  margin: 20px auto 10px;
  border: 1.5px solid #ff4cb5;
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ModelInfo = styled.div`
  & p {
    font-size: 13px;
    & a {
      color: #ff4cb5;
    }
  }
  & .MuiCircularProgress-colorSecondary {
    color: #ff4cb5;
    margin: 25px auto;
  }
`;
const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 15px;
  & label {
    font-size: 13px;
    text-transform: uppercase;
    margin: 0;
    padding-top: 4px;
  }
  & span {
    font-size: 18px;
    text-transform: uppercase;
    color: #ff4cb5;
    font-weight: 500;
  }
  &:last-child {
    border: 0;
  }
`;
const Counter = styled.div`
  display: flex;
  width: 75px;
  justify-content: space-between;
`;
const CounterNum = styled.button`
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;
const MaxAmount = styled.button`
  border: 2px solid #ff4cb5;
  background-color: #0a0a0a;
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  padding: 5px 20px;
  border-radius: 40px;
`;
const Number = styled.div`
  font-size: 24px;
  color: #ff4cb5;
  font-weight: 500;
`;

const ConnectBuyModal: React.FunctionComponent<any> = (props) => {
  // const wallet = useWallet();
  // const { dogePound } = useWeb3Contracts();

  const [count, setCount] = useState(1);
  // const [ethBalance, setEthBalance] = React.useState<BigNumber | undefined>(new BigNumber(0));
  const [ethAmount, setEthAmount] = React.useState<BigNumber>(new BigNumber(0));
  const [depositing/*, setDepositing*/] = React.useState(false);
  const [transactionHash, setTransactionHash] = React.useState("");

  // useAsyncEffect(async () => {
  //   if (wallet.account) {
  //     try {
  //       const balance = new BigNumber(await web3.eth.getBalance(wallet.account));
  //       setEthBalance(balance);
  //     } catch (err) {
  //     }
  //   }
  // }, [wallet, depositing, dogePound]);

  React.useEffect(() => {
    // if (dogePound.mintPrice) {
    //   const amount = dogePound.mintPrice.times(count);
    //   setEthAmount(amount);
    // }
    const amount = new BigNumber(0.069).times(count);
    setEthAmount(amount);
  }, [count/*, dogePound.mintPrice*/]);

  const mint = async () => {
    // setDepositing(true);

    // try {
    //   const result = await dogePound.mintDoges(ethAmount, count);
    //   setTransactionHash(result);
    // } catch (e) {
    // }

    // setDepositing(false);
  };

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => {
          setTransactionHash("");
          props.onHide();
        }}
      >
        <Modal.Header closeButton style={{ flexDirection: "column" }}>
          <Modal.Title id="contained-modal-title-vcenter">MINT DOGES</Modal.Title>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", fontSize: "13px" }}>
            <span>10,000 NFT’s | Same price (0.069 ETH)</span>
          </div>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <ModelInfo>
            <Balance>
              <label>MY ETH BALANCE</label>
              {/* <span>{formatBigValue(getHumanValue(ethBalance, 18), 3)}</span> */}
            </Balance>
            <Balance>
              <label style={{ paddingTop: "9px" }}>AMOUNT</label>
              <Counter>
                <CounterNum
                  onClick={() => {
                    if (30 > count) setCount(count + 1);
                  }}
                >
                  +
                </CounterNum>
                <Number>{count}</Number>
                <CounterNum onClick={() => count > 0 && setCount(count - 1)}>-</CounterNum>
              </Counter>
              <MaxAmount
                onClick={() => {
                  setCount(30);
                }}
              >
                Max
              </MaxAmount>
            </Balance>
            <Balance className="border-0">
              <label>TOTAL PRICE</label>
              <span>{formatBigValue(getHumanValue(ethAmount, 18), 3)} ETH</span>
            </Balance>
            <div className="text-center">
              <BuyNow
                // disabled={depositing || !ethBalance || ethAmount.gt(ethBalance) || !dogePound.saleIsActive || count < 1}
                disabled={true}
                onClick={() => {
                  mint();
                }}
              >
                {depositing ? <div className="loader"></div> : ""}
                Confirm
              </BuyNow>
            </div>
            {transactionHash && (
              <div className="text-center" style={{ marginTop: "10px" }}>
                <a href={getEtherscanTxUrl(transactionHash)} target="_blank" rel="noreferrer">
                  View on Etherscan
                </a>
              </div>
            )}
          </ModelInfo>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConnectBuyModal;
