import React from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import HeartIcon from "../../assets/img/icon_heart.png";
import ArrowIcon from "../../assets/img/icon_arrow.png";
import QuestionIcon from "../../assets/img/icon_question.png";

const BreedingModal = styled(Modal)`
  & .modal-content {
    padding: 10px;
    width: auto !important;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }
`
const Header = styled.div`
  margin: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`
const Price = styled.span`
  margin-left: 10px;
  color: #ff4cb5;
`
const ExpandedItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  & img {
    margin: 20px;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    border: 1px solid #ff4cb5;
  }
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;
const ResultImgContainer = styled.div`
  background: linear-gradient(131.67deg, #EA6FB7 11.23%, #E895C5 48.29%, #E852AA 85.34%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #ff4cb5;
  & img {
    width: 46px;
    height: 67px;
  }
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const IconContainer = styled.div<{width: number, height: number}>`
  display: flex;
  & img {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`
const IconContainer1 = styled.div<{width: number, height: number}>`
  display: flex;
  & img {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
  }
`
const SubContainer = styled.div`
  padding: 20px;
  font-size: 12px;
  @media (max-width: 767px) {
    padding: 5px;
  }
`
const CustomBtn = styled.a`
  display: flex;
  justify-content: center;
  padding: 7px 10px;
  border: 1.5px solid #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  background: #0a0a0a;
  margin: 0px auto 0;
  width: 200px;
  cursor: pointer;
  &:hover {
    color: #ff4cb5;
  }
  @media (max-width: 767px) {
    padding: 10px 10px;
    width: 150px;
  }
`;

type DogeModalProps = {
  show: boolean,
  onHide: Function,
  selectedDoge: any,
  selectedDoggo: any,
  breedingRequest: Function,
}

const BreedModal: React.FunctionComponent<any> = (props: DogeModalProps) => {

  const { show, onHide, breedingRequest, selectedDoge, selectedDoggo} = props;
  
  return (
    <BreedingModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Header>
          PRICE FOR BREED
          <Price>{selectedDoge?.price}ETH</Price>
        </Header>
      </Modal.Header>
      <ExpandedItem>
        <ImgContainer>
          <img src={selectedDoge?.doge.image} alt="DOGGY #1" />
        </ImgContainer>
        <IconContainer width={40} height={38}>
          <img src={HeartIcon} alt="HEART" />
        </IconContainer>
        <ImgContainer>
          <img src={selectedDoggo?.image} alt="DOGGY #2" />
        </ImgContainer>
        <IconContainer1 width={40} height={15}>
          <img src={ArrowIcon} alt="ARROW" />
        </IconContainer1>
        <ResultImgContainer>
          <img src={QuestionIcon} alt="DOGGY #?" />
        </ResultImgContainer>
      </ExpandedItem>
      <SubContainer>
        <CustomBtn
          onClick={() => {
            onHide();
            breedingRequest();
          }}
        >
          Breed
        </CustomBtn>
      </SubContainer>
    </BreedingModal>
  )
}

export default BreedModal;