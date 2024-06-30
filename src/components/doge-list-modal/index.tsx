import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ModelInfo = styled.div`
  padding: 20px 10px 20px;
  font-family: "TT Norms Pro";
`;
const Title = styled.div`
  font-family: "TT Norms Pro";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  text-transform: uppercase;
  & h4 {
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
const ImgArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  border-radius: 50%;
  margin: auto;
  width: 220px;
  height: 220px
  @media (max-width: 767px) {
    border-radius: 0;
  }
`;
const Name = styled.div`
  padding-top: 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #ff4cb5;
`;
const Button = styled.button`
  padding: 13px 30px;
  background-color: transparent;
  border: 1px solid #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  width: 200px;
  margin-top: 20px;
`;
const Body = styled.div`
  font-size: 16px;
  font-weight: bold;
  & .description {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    & span {
      margin-bottom: 15px;
    }
    & input {
      width: 250px;
      height: 42px;
      background: #1B1B1B;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 0 21px;
      color: white;
      @media (max-width: 767px) {
        width: 100%;
      }
      &:focus-visible {
        outline: none;
      }
    }
    & select {
      width: 250px;
      height: 42px;
      background: #1B1B1B;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 0 21px;
      color: white;
      @media (max-width: 767px) {
        width: 100%;
      }
      &:focus-visible {
        outline: none;
      }
    }
  }
`;
const StyledModal = styled(Modal)`
  & .modal-dialog {
    max-width: 670px;
  }
`;

const DogeListModal: React.FunctionComponent<any> = (props) => {
  const { galleryDetails, breedingPrice, breedingPeriod, setBreedingPrice, setBreedingPeriod, listToBreed, onHide } = props;

  if (!galleryDetails) {
    return null;
  }

  return (
    <StyledModal {...props} centered>
      <Modal.Header closeButton>
        <Title>
          <h4>{'LIST TO BREED'}</h4>
        </Title>
      </Modal.Header>
      <Modal.Body>
        <ModelInfo>
          <Row>
            <Col>
              <ImgArea>
                <Image src={galleryDetails?.image} alt="" />
              </ImgArea>
              <Name>{galleryDetails?.name}</Name>
            </Col>
            <Col>
              <Body>
                <div className="description">
                  <span>BREEDING PRICE</span>
                  <input value={breedingPrice}
                    placeholder="Enter Breeding Price"
                    onChange={e => {
                      if (!isNaN(parseFloat(e.target.value)) || e.target.value === '') {
                        setBreedingPrice(e.target.value);
                      }
                    }}
                  />
                </div>
                <div className="description">
                  <span>TIME PERIOD</span>
                  <select value={breedingPeriod}
                    onChange={(e) => setBreedingPeriod(e.target.value)}
                  >
                    <option value={1}>1 Days</option>
                    <option value={5}>5 Days</option>
                    <option value={7}>7 Days</option>
                  </select>
                </div>
              </Body>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={onHide}
              >
                cancel
              </Button>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                style={{ backgroundColor: '#ff4cb5' }}
                disabled={!breedingPeriod || !breedingPrice}
                onClick={() => {
                  onHide();
                  listToBreed();
                }}
              >
                confirm
              </Button>
            </Col>
          </Row>
        </ModelInfo>
      </Modal.Body>
    </StyledModal>
  );
};

export default DogeListModal;
