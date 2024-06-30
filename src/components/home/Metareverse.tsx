import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const MetaSection = styled.div`
  margin-bottom: 100px;
  @media (max-width: 991px) {
    margin-bottom: 70px;
  }
`;
const Title = styled.h2`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  line-height: 66px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;
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
    margin-bottom: 20px;
  }
`;
const Description = styled.div`
  font-size: 18px;
  margin-top: 10px;
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Metareverse = () => {
  return (
    <MetaSection>
      <Container>
        <Title>METAVERSE</Title>
        <Row>
          <Col md={6}>
            {/* <Img src={metaImg} alt="" /> */}
            <video
              autoPlay
              // controlslist="nodownload"
              loop
              // muted
              src={`video/DogMask360.mp4`}
              muted
              style={{width: "100%"}}
            />
            <Description>
              Your 2D Doge NFT becomes 3D! Show off your unique doge to everyone in the metaverse!
            </Description>
          </Col>
          <Col md={6}>
            {/* <Img src={metaImg} alt="" /> */}
            <video
              autoPlay
              // controlslist="nodownload"
              loop
              // muted
              src={`video/Jacket0001-0180.mp4`}
              muted
              style={{width: "100%"}}
            />
            <Description>
              By buying and holding our NFT you will gain exclusive access to The Doge Pound apparel which you can wear in the metaverse!
            </Description>
          </Col>
        </Row>
      </Container>
    </MetaSection>
  );
};
export default Metareverse;
