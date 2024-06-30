import React from "react";

import { Modal, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "./style.css";

const ModelInfo = styled.div`
  margin: 50px 0 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  & h4 {
    font-size: 20px;
    color: #ff4cb5;
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  & h6 {
    font-size: 13px;
    font-weight: 300;
    color: #b0b0b0;
  }
`;
const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  @media (max-width: 767px) {
    border-radius: 0;
  }
`;
const Opensea = styled.button`
  padding: 13px 30px;
  border: 1px solid #ff4cb5;
  background-color: #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  width: 100%;
  margin-top: 20px;
`;
const ScoreRate = styled.h4`
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    font-size: 16px;
    margin-top: 35px;
    margin-bottom: 30px;
  }
  & span {
    color: #48bc1e;
    margin-left: 8px;
    font-weight: 700;
  }
`;
const ListInfo = styled.div`
  margin-bottom: 20px;
  & h5 {
    font-size: 14px;
    text-transform: uppercase;
    color: #ff4cb5;
    margin-bottom: 5px;
  }
  & h6 {
    font-size: 14px;
    font-weight: 300;
  }
`;
const ImgArea = styled.div`
  @media (max-width: 767px) {
    margin: 0 -1rem;
  }
`;
const Lists = styled.div`
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const DogeDetailsModal: React.FunctionComponent<any> = (props) => {
  const { galleryDetails } = props;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="show-grid">
        <ModelInfo>
          <Row>
            <Col md={7}>
              <Title>
                <h4>{galleryDetails.name}</h4>
              </Title>
              <ImgArea>
                <Image src={galleryDetails?.image} alt="" />
              </ImgArea>
              {/* <TitleFooter>
                <h5>Rarity rank #{galleryDetails.rarity}</h5>
                <h6>
                  Owner: <span>0x1a54</span>
                </h6>
              </TitleFooter> */}
              <Opensea
                onClick={() => {
                  window.open(`https://opensea.io/assets/${process.env.REACT_APP_CONTRACT_DOGE_POUND}/${galleryDetails.tokenId}`, '_blank');
                }}
              >
                view on opensea
              </Opensea>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
              <ScoreRate>
                rarity score: <span>{galleryDetails.rarityScore}</span>
              </ScoreRate>
              <ScoreRate>
                Rarity rank: <span>{galleryDetails.rarity}</span>
              </ScoreRate>
              <Lists>
                {galleryDetails.Hats && (
                  <ListInfo>
                    <h5>hats</h5>
                    <h6>{galleryDetails?.Hats}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Mouth && (
                  <ListInfo>
                    <h5>mouth</h5>
                    <h6>{galleryDetails?.Mouth}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Clothing && (
                  <ListInfo>
                    <h5>clothing</h5>
                    <h6>{galleryDetails?.Clothing}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Fur && (
                  <ListInfo>
                    <h5>fur</h5>
                    <h6>{galleryDetails?.Fur}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Tail && (
                  <ListInfo>
                    <h5>Tail</h5>
                    <h6>{galleryDetails?.Tail}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Eyewear && (
                  <ListInfo>
                    <h5>eyewear</h5>
                    <h6>{galleryDetails?.Eyewear}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Trait && (
                  <ListInfo>
                    <h5>trait count</h5>
                    <h6>8</h6>
                  </ListInfo>
                )}
                {galleryDetails.Background && (
                  <ListInfo>
                    <h5>background</h5>
                    <h6>{galleryDetails?.Background}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Eyes && (
                  <ListInfo>
                    <h5>eyes</h5>
                    <h6>{galleryDetails?.Eyes}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Earring && (
                  <ListInfo>
                    <h5>earring</h5>
                    <h6>{galleryDetails?.Earring}</h6>
                  </ListInfo>
                )}
                {galleryDetails.Minted && (
                  <ListInfo>
                    <h5>PUPPY</h5>
                    <h6>Minted</h6>
                  </ListInfo>
                )}
              </Lists>
              <ScoreRate>
                PUPPY: <span>{galleryDetails?.puppy?.minted ? 'Minted' : 'Not Minted'}</span>
              </ScoreRate>
            </Col>
          </Row>
        </ModelInfo>
      </Modal.Body>
    </Modal>
  );
};

export default DogeDetailsModal;
