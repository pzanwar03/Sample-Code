import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";
import BannerPuppy from "../components/BannerPuppy";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import ConnectBuyModal from "../components/buy-now-modal/index";
import BannerVideo from "../components/home/Banner";
import RoadMap from "../components/home/RoadMap";
import RankingTool from "../components/home/RankingTool";
import Metareverse from "../components/home/Metareverse";
import Faq from "../components/home/Faq";
import TeamMembers from "../components/home/TeamMembers";

const MainContainer = styled(Container)``;

const BuySell = styled.h4`
  font-size: 20px;
  margin: 90px 0 60px;
  font-family: Roboto !important;
  line-height: 26px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    margin: 40px 0 20px;
  }
  & a {
    color: 03a9f4bf;
    text-decoration: underline !important;
  }
`;
const BuyNow = styled.a`
  padding: 15px 30px;
  border: 1px solid #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  background: #0a0a0a;
  width: 200px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #fff;
    border: 1px solid #d24095;
  }
  @media (max-width: 767px) {
    padding: 10px;
    margin-bottom: 20px;
  }
`;
const BuyItem = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 435px;
  @media (max-width: 767px) {
    text-align: center;
    display: grid;
    justify-content: center;
  }
`;
const BuyArea = styled.div`
  margin-top: 35px;
  @media (max-width: 767px) {
    margin-top: 30px;
  }
`;

const CustomCol = styled(Col)`
  @media (max-width: 767px) {
    order: 2;
  }
`;
const CustomCol1 = styled(Col)`
  & .progressbar {
    padding-left: 50px;
    padding-right: 38px;
  }
  @media (max-width: 767px) {
    order: 1;
    padding-left: 0;
    padding-right: 0;
    & .progressbar {
      padding-left: 25px;
      padding-right: 18px;
    }
  }
`;
const CustomCol2 = styled(Col)`
  @media (max-width: 767px) {
    order: 3;
  }
`;
const CustomCol3 = styled(Col)`
  & .progressbar {
    padding-left: 50px;
    padding-right: 38px;
  }
  @media (max-width: 767px) {
    order: 2;
    padding-left: 0;
    padding-right: 0;
    & .progressbar {
      padding-left: 25px;
      padding-right: 18px;
    }
  }
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  line-height: 66px;
  margin-top: 50px;
  text-align: center;
  @media (max-width: 1200px) {
    font-size: 55px;
    line-height: 55px;
  }
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 45px;
  }
  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 34px;
    margin-top: 40px;
  }
`;

const Home: React.FunctionComponent<any> = () => {
  const history = useHistory();
  const [buyDetailsShow, setBuyDetailsShow] = useState<boolean>(false);

  return (
    <Reveal effect="fadeInRight">
      <>
        <MainContainer>
          <BannerVideo />
          <Row>
            <Col md={12}>
              <Title>WELCOME TO THE DOGE POUND</Title>
            </Col>
            <CustomCol md={7}>
              <BuySell>
                The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of
                diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and
                impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you
                creative and commercial rights, as well as inclusion in the community.
              </BuySell>
              <BuyArea>
                <BuyItem>
                  <BuyNow
                    href="https://opensea.io/assets/the-doge-pound"
                    target="_blank"
                    rel="noreferrer"
                    style={{ background: "#ff4cb5" }}
                  >
                    Buy On OpenSea
                  </BuyNow>
                  {/* <MintNow smooth to="/#buynow">
                    Mint Now
                  </MintNow> */}
                  <BuyNow href="https://discord.gg/6xEq5wxR6M" target="_blank" rel="noreferrer">
                    Join us
                  </BuyNow>
                  <ConnectBuyModal show={buyDetailsShow} onHide={() => setBuyDetailsShow(false)} />
                </BuyItem>
              </BuyArea>
            </CustomCol>
            <CustomCol1 md={5}>
              <Banner />
            </CustomCol1>
            <CustomCol3 md={5}>
              <BannerPuppy />
            </CustomCol3>
            <CustomCol2 md={7}>
              <BuySell>
                Doge Pound Puppies is a collection of 10,000+ art pieces that are only available for The Doge Pound Holders.
                Each OG Doge Holder will be able to mint a puppy with any traits. 
                Proportion is 1:1 which means you can mint as many puppies as you have OG Doges. Open a crate and discover your puppy!
              </BuySell>
              <BuyArea>
                <BuyItem>
                  <BuyNow onClick={() => {
                    history.push({
                      pathname: "/puppy",
                    });
                    }}
                    style={{ background: "#ff4cb5" }}
                  >
                    Open Crate
                  </BuyNow>
                  <BuyNow
                    href="https://opensea.io/collection/doge-pound-puppies-real"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View On OpenSea
                  </BuyNow>
                  <ConnectBuyModal show={buyDetailsShow} onHide={() => setBuyDetailsShow(false)} />
                </BuyItem>
              </BuyArea>
            </CustomCol2>
          </Row>
        </MainContainer>
        <div>
          {/* Road Map */}
          <RoadMap />
          <RankingTool />
          {/* Metareverse */}
          <Metareverse />
          {/* Buy Now */}
          {/* <Buynow /> */}
          <Faq />
          <TeamMembers />
        </div>
      </>
    </Reveal>
  );
};
export default Home;
