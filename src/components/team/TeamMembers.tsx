import styled from "styled-components";
import Management from "../../assets/img/management.png";
import Member1 from "../../assets/img/banner/25.jpg";
import Member2 from "../../assets/img/banner/6.jpg";
import Member3 from "../../assets/img/banner/10.jpg";
import { Link } from "react-router-dom";

const Teams = styled.div`
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;
const Title = styled.h4`
  font-size: 11px;
  text-transform: uppercase;
  & img {
    vertical-align: sub;
    margin-right: 5px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
const Members = styled.div`
  margin-top: 25px;
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
  justify-content: flex-start;
  @media (max-width: 767px) {
    display: grid;
    overflow-y: scroll;
    grid-template-columns: 1fr;
  }
`;
const MembersInfo = styled(Link)`
  display: flex;
  justify-content: start;
  background: #121212;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  color: #fff;
  margin-right: 25px;
  cursor: default;
  width: 33%;
  &:hover {
    color: #fff;
  }
  & img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 12px;
  }
  @media (max-width: 991px) {
    padding: 10px 10px 10px;
    margin-right: 10px;
  }
  @media (max-width: 767px) {
    width: 200px;
    margin: auto;
  }
`;
const ProName = styled.div`
  font-size: 9px;
  text-transform: uppercase;
  /* margin-top: 5px; */
`;
const Amount = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  color: #ff4cb5;
  margin-top: 2px;
`;
const Description = styled.div`
  font-size: 13px;
`;

const TeamMembers = () => {
  return (
    <Teams>
      <Title>
        <img src={Management} alt="Team Members" /> Team Members
      </Title>
      <Description>
        The Doge Pound was founded by four friends who set a goal and want to achieve it. Four oddly matched people
        expressing themselves via art and creating something interesting and hilarious.
      </Description>
      <Members>
        <MembersInfo to="/">
          <img src={Member1} alt="Crypto Babe" />
          <div>
            <ProName>CRYPTO BABE</ProName>
            <Amount>260 ETH</Amount>
          </div>
        </MembersInfo>
        <MembersInfo to="/">
          <img src={Member2} alt="Benny The Howler" />
          <div>
            <ProName>Benny The Howler</ProName>
            <Amount>260 ETH</Amount>
          </div>
        </MembersInfo>
        <MembersInfo to="/">
          <img src={Member3} alt="Jimmy Chew" />
          <div>
            <ProName>Jimmy Chew</ProName>
            <Amount>260 ETH</Amount>
          </div>
        </MembersInfo>
      </Members>
    </Teams>
  );
};
export default TeamMembers;
