import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import AppBg from "assets/img/app/header.png";
import doge_rocket from "assets/img/launch_pad/doge_rocket.png";

const HeaderSec = styled.div`
  font-family: Roboto;
  background-image: url(${AppBg});
  min-height: 90vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 80px;
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
  & h5 {
    color: #e9579f;
    font-size: 21px;
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
    @media (max-width: 991px) {
      font-size: 27px;
      line-height: 46px;
    }
  }
  & h4 {
    color: #e9579f;
    font-size: 22px;
    font-weight: 700;
    line-height: 36px;
    text-transform: uppercase;
    @media (max-width: 991px) {
      font-size: 27px;
    }
  }
  @media (max-width: 991px) {
    padding-right: 0;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 43px;
  font-weight: 700;
  color: #fff;
  line-height: 52px;
  text-transform: uppercase;
  margin: 20px 0px 25px;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 46px;
    margin: 5px 0px 15px;
  }
}
`;
const ImgContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -100px;
  @media (max-width: 991px) {
    justify-content: center;
  }
  & img {
    width: 295px;
    height: 638px;
    @media (max-width: 991px) {
      width: 205px;
      height: 445px;
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
    padding-right: 15px;
  }
`;
const Desc = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
`;

const Header = () => {
  return (
    <HeaderSec>
      <Container>
        <Row className="custom-row">
          <CustCol md={6}>
            <ContentArea>
              <h5>Introducing</h5>
              <Title>The Doge Pound<br></br>NFT LAUNCHPAD</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar amet ut tincidunt eu pellentesque velit urna. Cras quisque malesuada pretium, at. Praesent a dictum erat et lacus tellus. Quisque in aliquet sit amet amet varius et lorem. Velit, fusce adipiscing blandit facilisi.
              </Desc>
            </ContentArea>
          </CustCol>
          <ImgContainer md={6}>
            <img src={doge_rocket} alt="" />
          </ImgContainer>
        </Row>
      </Container>
      <ButtomBG></ButtomBG>
    </HeaderSec>
  );
};
export default Header;
