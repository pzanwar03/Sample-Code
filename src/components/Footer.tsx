import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Twitter from "../assets/img/twitter.png";
import Discord from "../assets/img/discord.png";
import Youtube from "../assets/img/youtube.png";
import Opensea from "../assets/img/opensea.png";
import Medium from "../assets/img/medium.png";
import Instagram from "../assets/img/instagram1.png";

const Footers = styled.footer`
  padding: 15px;
`;
const FooterRight = styled.div`
  justify-content: flex-end;
  display: flex;
`;
const FooterButtom = styled.div`
  @media (max-width: 991px) {
  }
`;
const SocialMedia = styled(Row)`
  margin: 0;
  padding: 0;
  width: 400px;
  list-style: none;
  @media (max-width: 767px) {
    text-align: center;
    margin: 20px 0 0;
  }
`;
const SocialMediaItem = styled(Col)`
  display: inline-block;
  padding: 10px;
  @media (max-width: 420px) {
    padding: 5px;
  }
`;
const Copy = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  width: 140px;
  text-align: center;
  line-height: 18px;
  margin: 10px 0;
  @media (max-width: 767px) {
    width: 100%;
  }
  & a {
    color: #fff;
    &:hover {
      color: #ff4cb5;
    }
  }
`;

const Footer = () => {
  return (
    <Footers>
      <Container>
        <FooterButtom>
          <Row>
            <Col md="6">
              <Copy>
                @ 2021 The Doge Pound <br />
                <Link to="/terms" style={{ color: "#ff4cb5" }}>
                  Terms & Condtions
                </Link>
              </Copy>
            </Col>
            <Col md="6">
              <FooterRight>
                <SocialMedia>
                  <SocialMediaItem xs="4" md="2">
                    <a href="https://opensea.io/collection/the-doge-pound" target="_blank" rel="noreferrer">
                      <img src={Opensea} style={{ width: "35px" }} alt="Opensea" />
                    </a>
                  </SocialMediaItem>
                  <SocialMediaItem xs="4" md="2">
                    <a href="https://medium.datadriveninvestor.com/how-to-buy-and-sell-the-doge-pound-nft-7c7bff7601f5" target="_blank" rel="noreferrer">
                      <img src={Medium} style={{ width: "35px" }} alt="Medium" />
                    </a>
                  </SocialMediaItem>
                  <SocialMediaItem xs="4" md="2">
                    <a href="https://www.instagram.com/thedogepoundnfts/" target="_blank" rel="noreferrer">
                      <img src={Instagram} style={{ width: "35px" }} alt="Instagram" />
                    </a>
                  </SocialMediaItem>
                  <SocialMediaItem xs="4" md="2">
                    <a href="https://twitter.com/TheDogePoundNFT?s=20" target="_blank" rel="noreferrer">
                      <img src={Twitter} style={{ width: "35px" }} alt="Twitter" />
                    </a>
                  </SocialMediaItem>
                  <SocialMediaItem xs="4" md="2">
                    <a href="https://discord.gg/6xEq5wxR6M" target="_blank" rel="noreferrer">
                      <img src={Discord} style={{ width: "35px" }} alt="Discord" />
                    </a>
                  </SocialMediaItem>
                  <SocialMediaItem xs="4" md="2">
                    <a href="https://www.youtube.com/watch?v=JG5XVwAKGWY" target="_blank" rel="noreferrer">
                      <img src={Youtube} style={{ width: "35px" }} alt="Youtube" />
                    </a>
                  </SocialMediaItem>
                </SocialMedia>
              </FooterRight>
            </Col>
          </Row>
        </FooterButtom>
      </Container>
    </Footers>
  );
};

export default Footer;
