import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import DogearImg from "../../assets/img/app/dogear.png";
import moreImage from "../../assets/img/app/moreImage.png";
import commingImg from "../../assets/img/app/comming.png";
import wannaImg from "../../assets/img/app/wannaImg.png";

const Title = styled.h2`
  font-size: 44px;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 991px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;
const DogerSection = styled.div`
  background-color: #030303;
  padding: 60px 0 80px;
  @media (max-width: 991px) {
    padding: 0px;
    margin-top: -90px;
    text-align: center;
  }
  & p {
    letter-spacing: 0.2px;
    line-height: 21px;
    @media (max-width: 991px) {
      margin-bottom: 20px;
    }
  }
`;
const ImgD = styled.img`
  border-radius: 5px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const Section = styled.div``;
const DogearInfo = styled.div``;
const SubText = styled.p`
  text-align: center;
  max-width: 880px;
  margin: 15px auto;
`;
const MutchMore = styled.div`
  padding: 80px 0;
  background-color: #161616;
  @media (max-width: 991px) {
    padding-bottom: 0;
  }
`;
const ImageArea = styled.div`
  margin: 80px 0;
  @media (max-width: 991px) {
    margin: 30px 0;
  }
  & img {
    width: 100%;
  }
`;
const CommingSoon = styled.div`
  background-color: #0e0e0e;
  padding: 60px 0 80px;
  @media (max-width: 991px) {
    padding-bottom: 30px;
  }
`;
const CommingI = styled.img`
  width: 100%;
  margin: 40px 0;
`;
const DogeImg = styled.div`
  @media (max-width: 767px) {
    margin: 25px -38px -30px;
    border-radius: 43px;
  }
`;
const WannaI = styled.img`
  position: absolute;
  bottom: 0;
  width: 550px;
  right: 18px;
  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    right: 0;
    border-radius: 34px;
  }
`;
const WannaArea = styled.div`
  background-color: #d8629d;
  border-radius: 37px;
  padding: 40px 40px 30px;
  position: relative;
  margin-top: 100px;
  @media (max-width: 991px) {
    margin-top: 20px;
    text-align: center;
  }
  & a {
    background: #212121;
    border-radius: 10px;
    display: inline-block;
    padding: 15px 30px;
    font-size: 13px;
    color: #fff;
    width: 200px;
    text-align: center;
  }
`;
const CustomRow = styled(Row)`
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

const Apps = () => {
  return (
    <Section>
      <Header />
      <DogerSection>
        <Container>
          <CustomRow>
            <Col md={6}>
              <ImgD src={DogearImg} alt="" />
            </Col>
            <Col md={6} style={{ display: "flex", alignItems: "center" }}>
              <DogearInfo>
                <Title>DOGE AR</Title>
                <p>Show your doge in the real world with our Augmented reality feature in the app.</p>
                <p>
                  Proudly presenting the AR feature. With our Augmented Reality feature, you will be able to see your Doge in real world. 
                  You can interact with your Doge in real time and enjoy immersive, engaging experiences that seamlessly blend virtual objects with the real world. 
                  This fantastic feature will be integrated into the app very soon.
                </p>
              </DogearInfo>
            </Col>
          </CustomRow>
        </Container>
      </DogerSection>
      <MutchMore>
        <Container>
          <Title className="text-center">And so much more...</Title>
          <SubText>
            This is only the beginning; we have big plans for the future. We will implement new features, enhancements, adjustments, 
            and updates to improve your overall experience. Make sure to download the app and have fun; great things are on the way.
          </SubText>
        </Container>
        <ImageArea>
          <img src={moreImage} alt="" />
        </ImageArea>
      </MutchMore>
      <CommingSoon>
        <Container>
          <Title className="text-center">Coming soon..</Title>
          <SubText>
            Finding love is hard work, so we made are adding a way to help your doge find the perfect partner...
          </SubText>
          <CommingI src={commingImg} alt="" />
          <WannaArea>
            <Title>Wanna stay in the know</Title>
            <p>Come join one of the best and friendliest Discord channels in the NFT space.</p>
            <a href="https://discord.com/invite/6xEq5wxR6M" target="_blank" rel="noreferrer">
              JOIN DISCORD
            </a>
            <DogeImg>
              <WannaI src={wannaImg} alt="" />
            </DogeImg>
          </WannaArea>
        </Container>
      </CommingSoon>
    </Section>
  );
};
export default Apps;
