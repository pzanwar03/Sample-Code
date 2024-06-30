import React, { useState } from "react";
import styled from "styled-components";
import { Container, Modal } from "react-bootstrap";
import buyNowBg from "../../assets/img/buyNowBg.png";
// import ConnectedWallet from "components/connected-wallet";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import BigNumber from "bignumber.js";
// import { useWeb3Contracts } from "web3/contracts";
import { useWallet } from "wallets/wallet";
// import { web3 } from "web3/utils";
// import { useAsyncEffect } from "hooks/useAsyncEffect";
import { formatBigValue, getHumanValue, getEtherscanTxUrl } from "web3/utils";

const NoLiveModal: React.FC<any> = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title className="mb-4 pb-1 coust-title">We are not live yet.</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 10,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 10,
      backgroundColor: "#ff4cb5",
    },
  })
)(LinearProgress);

const BuySection = styled.div`
  background-image: url(${buyNowBg});
  padding: 20px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const BuyInfo = styled.div`
  background: rgba(11, 8, 8, 0.9);
  width: 500px;
  padding: 40px 30px;
  @media (max-width: 991px) {
    width: 100%;
    padding: 15px;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
  margin: 20px 0 40px;
  @media (max-width: 767px) {
    font-size: 36px;
  }
`;
const PriceInfo = styled.div`
  width: 65%;
  margin: 30px auto;
  @media (max-width: 767px) {
    width: 100%;
    margin: auto;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 15px;
  margin-bottom: 15px;
  &:last-child {
    border-bottom: 0;
  }
`;
const ItemName = styled.div`
  font-size: 13px;
  text-transform: uppercase;
`;
const ItemValue = styled.div`
  font-size: 18px;
  color: #ff4cb5;
  font-weight: 400;
`;
const ItemInc = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-between;
  align-items: center;
  & button {
    font-size: 18px;
    border: 0;
    background-color: transparent;
    color: #fff;
  }
  & span {
    font-size: 24px;
    color: #ff4cb5;
    font-weight: 500;
  }
`;
const MaxBtn = styled.button`
  border: 0;
  background-color: #ff4cb5;
  color: #fff;
  border-radius: 30px;
  font-size: 13px;
  padding: 7px 25px;
`;
const BtnArea = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnWidth = styled.div`
  width: 100%;
  margin: auto;
`;
// const MintNow = styled.button<{ disabled?: boolean }>`
//   color: ${({ disabled }) => (disabled ? "grey" : "white")};
//   background-color: #ff4cb5;
//   font-size: 13px;
//   border-radius: 84px;
//   padding: 10px 15px;
//   border: 1px solid #ff4cb5;
//   width: 230px;
//   margin-top: 20px;
//   text-transform: uppercase;
//   position: relative;
//   &:focus {
//     box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
//   }
// `;
const ProgressBar = styled.div`
  margin-top: 30px;
  & h6 {
    font-size: 14px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  & .MuiTypography-colorTextSecondary {
    color: #ff4cb5;
    font-size: 18px;
    font-weight: 900;
  }
`;

const TitleP = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-weight: 500;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
const BarInfo = styled.div``;

const Buynow = () => {
  const wallet = useWallet();
  // const { dogePound } = useWeb3Contracts();

  const [progressVal/*, setProgressVal*/] = useState(100);
  const [count, setCount] = useState(1);
  const [ethBalance/*, setEthBalance*/] = React.useState<BigNumber | undefined>(new BigNumber(0));
  const [ethAmount/*, setEthAmount*/] = React.useState<BigNumber>(new BigNumber(0));
  // const [depositing, setDepositing] = React.useState(false);
  const [transactionHash/*, setTransactionHash*/] = React.useState("");
  const [modalShow, setModalShow] = useState(false);

  // React.useEffect(() => {
  //   if (dogePound.maxDogeSupply && dogePound.totalSupply) {
  //     const percent =
  //       (parseFloat(dogePound.totalSupply.toString()) / parseFloat(dogePound.maxDogeSupply.toString())) * 100;
  //     setProgressVal(percent);
  //   }
  // }, [dogePound]);

  // useAsyncEffect(async () => {
  //   if (wallet.account) {
  //     try {
  //       const balance = new BigNumber(await web3.eth.getBalance(wallet.account));
  //       setEthBalance(balance);
  //     } catch (err) {
  //     }
  //   }
  // }, [wallet, depositing, dogePound]);

  // React.useEffect(() => {
  //   if (dogePound.mintPrice) {
  //     const amount = dogePound.mintPrice.times(count);
  //     setEthAmount(amount);
  //   }
  // }, [count, dogePound.mintPrice]);

  // const mint = async () => {
  //   if (!dogePound.saleIsActive) {
  //     setModalShow(true);
  //     return;
  //   }
  //   setDepositing(true);

  //   try {
  //     const result = await dogePound.mintDoges(ethAmount, count);
  //     setTransactionHash(result);
  //   } catch (e) {
  //   }

  //   setDepositing(false);
  // };

  return (
    <BuySection id="buynow">
      <Container>
        <Title>buy doges</Title>
        <BuyInfo>
          {/* <TitleP>10,000 NFT’s | Same price (0.069 ETH)</TitleP> */}
          <TitleP>10,000 NFT’s</TitleP>
          <PriceInfo>
            <Item>
              <ItemName>MY ETH BALANCE</ItemName>
              <ItemValue>{wallet.account ? formatBigValue(getHumanValue(ethBalance, 18), 3) : 0} ETH</ItemValue>
            </Item>
            <Item>
              <ItemName>AMOUNT</ItemName>
              <ItemInc>
                <button
                  onClick={() => count > 0 && setCount(count - 1)}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={() => {
                    if (30 > count) setCount(count + 1);
                  }}
                >
                  +
                </button>
              </ItemInc>
              <MaxBtn
                disabled={true}
                onClick={() => {
                  setCount(30);
                }}
              >
                MAX
              </MaxBtn>
            </Item>
            <Item>
              <ItemName>TOTAL PRICE</ItemName>
              <ItemValue>{formatBigValue(getHumanValue(ethAmount, 18), 3)} ETH</ItemValue>
            </Item>
          </PriceInfo>
          <BtnWidth>
            <BtnArea>
              <span>WE ARE OFFICIALLY SOLD OUT!</span>
              <div className="text-center" style={{ marginTop: "10px" }}>
                <a href="https://opensea.io/assets/the-doge-pound" target="_blank" rel="noreferrer">
                  Buy on OpenSea
                </a>
              </div>
              {/* <ConnectedWallet /> */}
              {/* {
                wallet.account && dogePound.totalSupply < 10000 &&
                <MintNow
                  disabled={depositing || !ethBalance || ethAmount.gt(ethBalance) || !dogePound.saleIsActive || count < 1}
                  onClick={() => {
                    mint();
                  }}
                >
                  {depositing ? <div className="loader"></div> : ""}
                  mint now
                </MintNow>
              } */}
            </BtnArea>
          </BtnWidth>
          {transactionHash && (
            <div className="text-center" style={{ marginTop: "10px" }}>
              <a href={getEtherscanTxUrl(transactionHash)} target="_blank" rel="noreferrer">
                View on Etherscan
              </a>
            </div>
          )}
          <ProgressBar className="progressbar">
            <span>Progress</span>
            <BarInfo>
              <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                  <BorderLinearProgress variant="determinate" value={progressVal} />
                </Box>
                <Box minWidth={35}>
                  <Typography variant="body2" color="textSecondary">{`${progressVal.toFixed(2)}%`}</Typography>
                </Box>
              </Box>
            </BarInfo>
          </ProgressBar>
        </BuyInfo>
      </Container>
      <NoLiveModal show={modalShow} onHide={() => setModalShow(false)} />
    </BuySection>
  );
};
export default Buynow;
