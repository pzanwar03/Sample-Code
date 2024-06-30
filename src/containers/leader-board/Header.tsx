import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import AppBg from "../../assets/img/app/header.png";
import group_1 from "../../assets/img/leader/group_1.png";
import group_2 from "../../assets/img/leader/group_2.png";
import group_3 from "../../assets/img/leader/group_3.png";
import leader_item from "../../assets/img/leader/leader_item.png";
import arrow from "../../assets/img/leader/arrow.png";

const HeaderSec = styled.div`
  font-family: Roboto;
  background-image: url(${AppBg});
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 180px;
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
const Store = styled.div`
  display: flex;
  margin-top: 30px;
  @media (max-width: 991px) {
    display: block;
    margin: auto;
    padding-left: 15px;
  }
  & img {
    width: auto;
    @media (max-width: 991px) {
      width: 100%;
      margin-top: 30px;
    }
  }
`;
const ImgContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
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
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    display: block;
  }
`;
const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9579f;
  font-size: 16px;
  font-weight: 700;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  @media (max-width: 991px) {
    margin: auto;
  }
`;
const Content = styled.div`
  padding-left: 20px;
  font-size: 22px;
  font-weight: 700;
  & a {
    color: #e9579f;
    z-index: 10;
    position: relative;
  }
  & img {
    height: 80px;
    margin-top: -60px;
    margin-left: -80px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  @media (max-width: 991px) {
    padding-left: 0px;
    padding-bottom: 20px;
  }
`;
const Desc = styled.div`
  padding-top: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <HeaderSec>
      <ButtomBG></ButtomBG>
      <Container>
        <Row className="custom-row">
          <CustCol md={6}>
            <ContentArea>
              <h5>OCT 11 - OCT 26</h5>
              <Title>The Doge Pound<br></br>TREASURE HUNT</Title>

              <h4>TO ENTER</h4>
              <ItemContainer>
                <Number>
                  1
                </Number>
                <Content>
                  Download OVR Mobile Apps for <a href="https://apps.apple.com/us/app/ovr-over-the-reality/id1463400310" target="_blank" rel="noreferrer">iPhone</a>
                  <img src={arrow} alt="" />
                  {" "}and <a href="https://play.google.com/store/apps/details?id=com.gezapp.ovr" target="_blank" rel="noreferrer">Android</a>
                  <img src={arrow} alt="" />
                </Content>
              </ItemContainer>
              <ItemContainer>
                <Number>
                  2
                </Number>
                <Content>
                  Go to Doge Pound Treasure Hunt on homepage
                </Content>
              </ItemContainer>
              <ItemContainer>
                <Number>
                  3
                </Number>
                <Content>
                  Start collecting!
                </Content>
              </ItemContainer>
              <Desc>
                The top 3 collectors when the event ends will win the prizes listed below!
              </Desc>
              <Store>
                <img src={group_1} alt="" />
                <img src={group_2} alt="" />
                <img src={group_3} alt="" />
              </Store>
            </ContentArea>
          </CustCol>
          <ImgContainer md={6}>
            <img src={leader_item} alt="" />
          </ImgContainer>
        </Row>
      </Container>
    </HeaderSec>
  );
};
export default Header;
