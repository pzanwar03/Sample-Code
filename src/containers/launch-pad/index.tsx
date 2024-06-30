import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Join from "./Join";
import item_1 from "../../assets/img/launch_pad/item_1.png";
import item_2 from "../../assets/img/launch_pad/item_2.png";
import icon_twitter from "../../assets/img/launch_pad/icon_twitter.png";
import icon_discord from "../../assets/img/launch_pad/icon_discord.png";
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
const Section = styled.div`
  font-family: "Roboto";
`;
const MutchMore = styled.div`
  padding: 80px 0;
  background-color: #030303;
  @media (max-width: 991px) {
    padding-bottom: 0;
  }
`;
const CommingSoon = styled.div`
  background-color: #030303;
  padding: 60px 0 80px;
  @media (max-width: 991px) {
    padding-bottom: 30px;
  }
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
const ItemContainer = styled(Col)`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemBox = styled.div`
  background-color: #121212;
  padding: 23px 25px 40px;
  border-radius: 10px;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemTitle = styled.div`
  padding: 10px 60px;
  color: #E9579F;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 36px;
  text-transform: uppercase;
`;
const ItemContent = styled.div`
  padding: 10px 60px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF
`;
const ButtonContainer = styled.div`
  padding: 10px 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 50px;
  background: #FF4CB5;
  border-radius: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const IconContainer = styled.div`
  margin-left: 20px;
`;

const LaunchPad = () => {

  return (
    <Section>
      <Header />
      <MutchMore>
        <Container>
          <Title className="text-center">UPCOMING PROJECTS</Title>
          <Row>
            <ItemContainer>
              <ItemBox>
                <ImgContainer>
                  <img src={item_1} alt="ITEM" />
                </ImgContainer>
                <ItemTitle>
                  Deez Nuts
                </ItemTitle>
                <ItemContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar amet ut tincidunt eu pellentesque velit urna. Cras quisque malesuada pretium, at.
                </ItemContent>
                <ItemContent>
                  Praesent a dictum erat et lacus tellus. Quisque in aliquet sit amet amet varius et lorem. Velit, fusce adipiscing blandit facilisi.
                </ItemContent>
                <ButtonContainer>
                  <Button>
                    Visit website
                  </Button>
                  <IconContainer>
                    <img src={icon_twitter} alt="Twitter" />
                  </IconContainer>
                  <IconContainer>
                    <img src={icon_discord} alt="Discord" />
                  </IconContainer>
                </ButtonContainer>
              </ItemBox>
            </ItemContainer>
            <ItemContainer>
              <ItemBox>
                <ImgContainer>
                  <img src={item_2} alt="ITEM" />
                </ImgContainer>
                <ItemTitle>
                  Deez Nuts
                </ItemTitle>
                <ItemContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar amet ut tincidunt eu pellentesque velit urna. Cras quisque malesuada pretium, at.
                </ItemContent>
                <ItemContent>
                  Praesent a dictum erat et lacus tellus. Quisque in aliquet sit amet amet varius et lorem. Velit, fusce adipiscing blandit facilisi.
                </ItemContent>
                <ButtonContainer>
                  <Button>
                    Visit website
                  </Button>
                  <IconContainer>
                    <img src={icon_twitter} alt="Twitter" />
                  </IconContainer>
                  <IconContainer>
                    <img src={icon_discord} alt="Discord" />
                  </IconContainer>
                </ButtonContainer>
              </ItemBox>
            </ItemContainer>
          </Row>
        </Container>
      </MutchMore>
      <Join />
      <CommingSoon>
        <Container>
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
export default LaunchPad;
