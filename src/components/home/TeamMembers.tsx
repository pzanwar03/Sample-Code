import styled from "styled-components";
import { Container } from "react-bootstrap";
import Member1 from "../../assets/img/team/cryptobabe.png";
import Member2 from "../../assets/img/team/johnlemon.png";
import Member4 from "../../assets/img/team/whitefang.png";

const Teams = styled.div`
  margin: 80px 0;
  @media (max-width: 767px) {
    margin: 40px 0 50px;
  }
`;
const Title = styled.h2`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  line-height: 66px;
  margin-top: 50px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
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
    margin-top: 50px;
  }
`;
const Members = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 30px;
  justify-content: flex-start;
  @media (max-width: 767px) {
    overflow-y: scroll;
    grid-template-columns: 1fr;
  }
`;
const MembersInfo = styled.div`
  display: flex;
  justify-content: start;
  padding: 20px;
  color: #fff;
  margin-right: 25px;
  cursor: default;
  border: 1px solid #feffe2;
  box-sizing: border-box;
  border-radius: 16px;
  &:hover {
    color: #fff;
  }
  & img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin-right: 12px;
    @media (max-width: 767px) {
      height: 50px;
      width: 50px;
    }
  }
  @media (max-width: 991px) {
    padding: 10px 10px 10px;
    margin-right: 10px;
  }
`;
const ProName = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  color: #ff4cb5;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
const Amount = styled.div`
  font-size: 16px;
  margin-top: 2px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const Description = styled.div`
  font-size: 18px;
  margin-bottom: 45px;
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const TeamMembers = () => {
  return (
    <Container>
      <Teams>
        <Title>CO-TEAM MEMBERS</Title>
        <Description>
          The Doge Pound was founded by three friends who set a goal and want to achieve it. Three oddly matched people
          expressing themselves via art and creating something interesting and hilarious.
        </Description>
        <Members>
          <MembersInfo>
            <img src={Member1} alt="Crypto Babe" />
            <div>
              <ProName>CRYPTO BABE</ProName>
              <Amount>Art Director & Designer</Amount>
            </div>
          </MembersInfo>
          <MembersInfo>
            <img src={Member2} alt="Benny The Howler" />
            <div>
              <ProName>JOHN LEMON</ProName>
              <Amount>Marketing Lead & Coordinator</Amount>
            </div>
          </MembersInfo>
          <MembersInfo>
            <img src={Member4} alt="White Fang" />
            <div>
              <ProName>WHITE FANG</ProName>
              <Amount>Lead Developer & Tech</Amount>
            </div>
          </MembersInfo>
        </Members>
      </Teams>
    </Container>
  );
};
export default TeamMembers;
