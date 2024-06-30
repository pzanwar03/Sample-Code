import { Container } from "react-bootstrap";
import styled from "styled-components";
// @ts-ignore
import Reveal from "react-reveal/Reveal";

const PageInfo = styled.div`
  font-size: 16px;
  padding: 0 35px;
  border-radius: 5px;
  margin: 25px 0;
  background-color: #121212;
  height: 200px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 0 20px;
    margin: 15px 0;
  }
  & P {
    margin-bottom: 10px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const PageInfoWrapper = styled.div`
  background-color: #121212;
  border: 0.5px solid #ff4cb5;
  border-radius: 5px;
`;
const RecordTitle = styled.h4`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 36px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Staking = () => {
  return (
    <Reveal effect="fadeInRight">
      <Container style={{ paddingTop: "35px" }}>
        <PageInfoWrapper>
          <PageInfo>
            <RecordTitle>Coming soon!</RecordTitle>
          </PageInfo>
        </PageInfoWrapper>
      </Container>
    </Reveal>
  );
};
export default Staking;
