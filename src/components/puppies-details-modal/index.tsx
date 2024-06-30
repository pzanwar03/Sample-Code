import React, { useState } from "react";

import { Modal, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./style.css";

const ModelInfo = styled.div`
  margin: 50px 0 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
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
  @media (max-width: 767px) {
    width: 300px;
  }
`;
const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4cb5;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 10px;
  }
`;
const Image = styled.img`
  border-radius: 10px;
  width: 400px;
  margin: auto;
  @media (max-width: 767px) {
    border-radius: 0;
    width: 300px;
  }
`;
const OpenseaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const Opensea = styled.button`
  padding: 13px 30px;
  border: 1px solid #ff4cb5;
  background-color: #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  width: 400px;
  margin: 20px 0px;
  @media (max-width: 767px) {
    width: 300px;
    margin: 20px 0px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const PuppiesDetailsModal: React.FunctionComponent<any> = (props) => {
  const { galleryDetails, onHide } = props;
  const [index, setIndex] = useState<number>(0);

  if (!galleryDetails || galleryDetails.length < 1) {
    return null;
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="show-grid">
        <ModelInfo>
          <Row>
            <Col md={7}>
              <Title>
                <h4>{galleryDetails[index].name}</h4>
                <h6>{index + 1} / {galleryDetails.length}</h6>
              </Title>
              <ImgArea>
                {
                  galleryDetails.length > 1 &&
                  <IconContainer
                    onClick={() => {
                      if (index > 0) {
                        setIndex(index - 1);
                      }
                    }}
                  >
                    <BsChevronLeft />
                  </IconContainer>
                }
                <Image src={galleryDetails[index].image} alt="" />
                {
                  galleryDetails.length > 1 &&
                  <IconContainer
                    onClick={() => {
                      if (index < galleryDetails.length - 1) {
                        setIndex(index + 1);
                      }
                    }}
                  >
                    <BsChevronRight />
                  </IconContainer>
                }
              </ImgArea>
              <OpenseaContainer>
                <Opensea
                  onClick={() => {
                    window.open(`https://opensea.io/assets/${process.env.REACT_APP_CONTRACT_PUPPY_POUND}/${galleryDetails[index].tokenId}`, '_blank');
                    onHide();
                  }}
                >
                  view on opensea
                </Opensea>
              </OpenseaContainer>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
              <Lists>
                {galleryDetails[index].Hats && (
                  <ListInfo>
                    <h5>hats</h5>
                    <h6>{galleryDetails[index].Hats}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Mouth && (
                  <ListInfo>
                    <h5>mouth</h5>
                    <h6>{galleryDetails[index].Mouth}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Clothing && (
                  <ListInfo>
                    <h5>clothing</h5>
                    <h6>{galleryDetails[index].Clothing}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Fur && (
                  <ListInfo>
                    <h5>fur</h5>
                    <h6>{galleryDetails[index].Fur}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Gender && (
                  <ListInfo>
                    <h5>gender</h5>
                    <h6>{galleryDetails[index].Gender}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Eyewear && (
                  <ListInfo>
                    <h5>eyewear</h5>
                    <h6>{galleryDetails[index].Eyewear}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Trait && (
                  <ListInfo>
                    <h5>trait count</h5>
                    <h6>8</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Background && (
                  <ListInfo>
                    <h5>background</h5>
                    <h6>{galleryDetails[index].Background}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Eyes && (
                  <ListInfo>
                    <h5>eyes</h5>
                    <h6>{galleryDetails[index].Eyes}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Earring && (
                  <ListInfo>
                    <h5>earring</h5>
                    <h6>{galleryDetails[index].Earring}</h6>
                  </ListInfo>
                )}
                {galleryDetails[index].Minted && (
                  <ListInfo>
                    <h5>PUPPY</h5>
                    <h6>Minted</h6>
                  </ListInfo>
                )}
              </Lists>
            </Col>
          </Row>
        </ModelInfo>
      </Modal.Body>
    </Modal>
  );
};

export default PuppiesDetailsModal;
