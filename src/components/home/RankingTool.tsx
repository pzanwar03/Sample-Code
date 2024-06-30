import styled from "styled-components";
import { Container } from "react-bootstrap";

const RankingSection = styled.div`
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
const StyledLink = styled.a`
  padding: 15px 20px;
  border: 1px solid #ff4cb5;
  background-color: #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  min-width: 240px;
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
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 435px;
  margin: 0px 10px;
  @media (max-width: 767px) {
    text-align: center;
    display: grid;
    justify-content: center;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  @media (max-width: 767px) {
    margin-top: 30px;
    flex-direction: column;
    & :first-child {
      margin-right: 0;
    }
  }
`;
const Description = styled.div`
  width: 100%;
  padding: 20px 30px;
  font-family: "Roboto";
  @media (max-width: 991px) {
    padding: 15px;
  }
  @media (max-width: 767px) {
    padding: 0px;
    width: 100%;
  }
  & p {
    font-size: 18px;
    margin: 0;
    line-height: 24px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const RankingTool = () => {
  return (
    <RankingSection>
      <Container>
        <Title>RANKING TOOL</Title>
        <Description>
          <p>
            Here are some helpful tools created by The Doge Pound community. Please note that these are unofficial in nature.
            Every assignment of an doge's overall value or rarity is inherently subjective.
          </p>
        </Description>
        <ButtonArea>
          <Item>
            <StyledLink href="https://rarityranks.io/project/the-doge-pound" target="_blank" rel="noreferrer">
              The Doge Pound
            </StyledLink>
          </Item>
          <Item>
            <StyledLink href="https://rarityranks.io/project/doge-pound-puppies-real" target="_blank" rel="noreferrer">
              Doge Pound Puppies
            </StyledLink>
          </Item>
          <Item>
            <StyledLink href="https://rarityranks.io/project/doge-pound-halloween" target="_blank" rel="noreferrer">
              Doge Pound Halloween
            </StyledLink>
          </Item>
        </ButtonArea>
      </Container>
    </RankingSection>
  );
};
export default RankingTool;
