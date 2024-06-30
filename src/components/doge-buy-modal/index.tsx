import React from "react";

import { Modal } from "react-bootstrap";
import styled from "styled-components";
import "./style.css";

const ModelInfo = styled.div`
  margin: 50px 0 20px;
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
  width: 300px;
  margin-top: 20px;
`;
const ScoreRate = styled.h4`
  font-size: 18px;
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
const Description = styled.div`
  font-size: 14px;
`;

const DogeBuyModal: React.FunctionComponent<any> = (props) => {
  const { galleryDetails } = props

  if (!galleryDetails) {
    return null;
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="show-grid">
        <ModelInfo>
          <ScoreRate>
            You need to own DOGGY #{galleryDetails.tokenId} in order to open this crate.
          </ScoreRate>
          <Description>
            NOTE: Please be aware that puppies can be minted while the DOGGY is listed on OpenSea.
            Especially when placing offers, there could be situations where you may leave an offer on an DOGGY, 
            and they mint the puppy before accepting your offer. 
            To avoid such a situation, please make sure that you only buy a DOGGY that is listed for sale on OpenSea and check the minting status frequently.
          </Description>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Opensea
              onClick={() => {
                window.open(`https://opensea.io/assets/${process.env.REACT_APP_CONTRACT_DOGE_POUND}/${galleryDetails.tokenId}`, '_blank');
              }}
            >
              Buy on opensea
            </Opensea>
          </div>
        </ModelInfo>
      </Modal.Body>
    </Modal>
  );
};

export default DogeBuyModal;
