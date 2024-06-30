import { Container } from "react-bootstrap";
import styled from "styled-components";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
// @ts-ignore
import { MobilePDFReader } from "react-read-pdf";

const PageInfo = styled.div`
  font-size: 16px;
  padding: 0;
  border-radius: 5px;
  margin: 0;
  background-color: #121212;
  height: 690px;
  position: relative;
  @media (max-width: 767px) {
    margin: 0 20px 0 0;
  }
`;
const PageInfoWrapper = styled.div`
  background-color: #121212;
  border: 0.5px solid #ff4cb5;
  border-radius: 5px;
`;
const Whitepaper = () => {
  return (
    <Reveal effect="fadeInRight">
      <Container style={{ paddingTop: "35px" }}>
        <PageInfoWrapper>
          <PageInfo>
            <MobilePDFReader url="./whitepaper.pdf" showAllPage={false} isShowFooter={false} isShowHeader={false} />
          </PageInfo>
        </PageInfoWrapper>
      </Container>
    </Reveal>
  );
};
export default Whitepaper;
