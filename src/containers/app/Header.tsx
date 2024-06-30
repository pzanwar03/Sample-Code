import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Banner from "./Banner";
import AppBg from "../../assets/img/app/header.png";
import appleStore from "../../assets/img/app/appleStore.png";
import playStore from "../../assets/img/app/playStore.png";

const HeaderSec = styled.div`
  background-image: url(${AppBg});
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 150px;
  padding-bottom: 50px;
  margin-top: -150px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 991px) {
    padding-top: 30px;
    margin-top: 0px;
    padding-bottom: 0px;
  }
  .custom-row {
    @media (max-width: 991px) {
      flex-direction: column-reverse;
    }
  }
`;

const ContentArea = styled.div`
  padding-right: 60px;
  & h4 {
    color: #e9579f;
    font-size: 22px;
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
    @media (max-width: 991px) {
      font-size: 18px;
    }
  }
  @media (max-width: 991px) {
    padding-right: 0;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 44px;
  font-weight: 900;
  color: #fff;
  line-height: 36px;
  text-transform: uppercase;
  margin: 20px 0px 25px;
  @media (max-width: 991px) {
    font-size: 26px;
    margin: 5px 0px 15px;
  }
}
`;
const Description = styled.p`
  letter-spacing: 0.2px;
  line-height: 21px;
`;
const ImgArea = styled.div`
  margin-top: 60px;
  p {
    font-size: 22px;
    font-weight: bold;
    background: linear-gradient(to left, #8f2df0 63%, #ff715b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Segoe Print;
    margin-bottom: 5px;
    @media (max-width: 991px) {
      margin-bottom: 15px;
    }
  }
  @media (max-width: 991px) {
    margin-top: 0px;
  }
`;
const Store = styled.div`
  display: flex;
  & img {
    width: auto;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  & img:first-child {
    padding-right: 25px;
    @media (max-width: 991px) {
      padding-right: 10px;
    }
  }
`;
const ButtomBG = styled.div`
  position: absolute;
  width: 100%;
  height: 206px;
  left: 0px;
  background: linear-gradient(180deg, #030303 0%, rgba(3, 3, 3, 0) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
  bottom: 0;
`;
const CustCol = styled(Col)`
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    height: 660px;
    padding-right: 15px;
  }
`;

const Header = () => {
  return (
    <HeaderSec>
      <Container>
        <Row className="custom-row">
          <CustCol md={6}>
            <ContentArea>
              <h4>Introducing </h4>
              <Title>The Doge Pound App</Title>
              <Description>
                The Doge Pound App is coming soon. Join the leading NFT project to get all the information you need. 
                We are excited to be one of the first NFT projects to have an app. This app will allow you to navigate our website with the optimum experience, 
                adjusted view, and more accessible functions.
              </Description>
              <ImgArea>
                <p>Comming Soon...</p>
                <Store>
                  <a href="/">
                    <img src={appleStore} alt="" />
                  </a>
                  <a href="/">
                    <img src={playStore} alt="" />
                  </a>
                </Store>
              </ImgArea>
            </ContentArea>
          </CustCol>
          <Col md={6}>
            <Banner />
          </Col>
        </Row>
      </Container>
      <ButtomBG></ButtomBG>
    </HeaderSec>
  );
};
export default Header;
