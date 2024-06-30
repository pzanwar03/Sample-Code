import React, { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { useUserState } from "../../state/user/hooks";

const BreedingModal = styled(Modal)`
  & .modal-content {
    padding: 10px;
    width: auto !important;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }
`;
const Header = styled.div`
  margin: 20px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;
const ListContainer = styled.div`
  background-color: #1c1c1c;
  height: 250px;
  overflow-y: scroll;
  margin: 20px;
  margin-top: 0px;
  @media (max-width: 767px) {
    margin: 5px;
  }
`;
const ItemList = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#E5E5E5" : "transparent")};
  display: flex;
  cursor: pointer;
  color: #ff4cb5;
  font-size: 16px;
  font-weight: 700;
  & img {
    margin: 10px;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    border: 1px solid #ff4cb5;
  }
  @media (max-width: 767px) {
    & img {
      margin: 7px;
      width: 60px;
      height: 60px;
    }
  }
`;
const CustomCol = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 15px 40px;
  align-items: center;
  @media (max-width: 767px) {
    padding: 5px 5px;
  }
`;
const ExpandedItem = styled.div`
  display: flex;
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
    border-radius: 50%;
    border: 1px solid #ff4cb5;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SubContainer = styled.div`
  width: 500px;
  padding: 20px;
  font-size: 12px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 5px;
    font-size: 11px;
  }
`;
const DetailRow = styled(Row)`
  margin-top: 50px;
  font-size: 12px;
  height: 170px;
  @media (max-width: 767px) {
    margin-top: 10px;
    padding: 10px;
  }
`;
const PropertyContainer = styled(Col)`
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
`;
const PropertyDiv = styled.span`
  margin-left: 10px;
  @media (max-width: 767px) {
    margin-left: 3px;
  }
`;
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
  show: boolean;
  onHide: Function;
  selectDoggo: Function;
  showNextModal: Function;
};

const SelectDogeModal: React.FunctionComponent<any> = (props: DogeModalProps) => {
  const { show, onHide, selectDoggo, showNextModal } = props;
  const { myDoge } = useUserState();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    if (myDoge) {
      const temp = myDoge.filter(item => item.gender === "Doggo");
      if (temp && temp.length > 0) {
        setItems(temp);
      }
    }
  }, [myDoge])

  return (
    <BreedingModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Header>SELECT YOUR DOGGO</Header>
      </Modal.Header>
      <ListContainer>
        {items.map((item: any, index: number) => {
          return (
            <ItemList key={index} selected={index === selectedIndex} onClick={() => setSelectedIndex(index)}>
              <img src={item?.image} alt="DOGGY #1" />
              <CustomCol>{item.name}</CustomCol>
              <CustomCol>{item.rarity}</CustomCol>
            </ItemList>
          );
        })}
      </ListContainer>
      <ExpandedItem>
        <ImgContainer>
          <img src={items[selectedIndex]?.image} alt="DOGGY #1" />
        </ImgContainer>
        <SubContainer>
          <DetailRow>
            {items[selectedIndex]?.Background && (
              <PropertyContainer xs={6} md={4}>
                BACKGROUND:
                <PropertyDiv>{items[selectedIndex]?.Background}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Earring && (
              <PropertyContainer xs={6} md={4}>
                EARRING:
                <PropertyDiv>{items[selectedIndex]?.Earring}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Eyewear && (
              <PropertyContainer xs={6} md={4}>
                EYEWEAR:
                <PropertyDiv>{items[selectedIndex]?.Eyewear}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Hats && (
              <PropertyContainer xs={6} md={4}>
                HATS:
                <PropertyDiv>{items[selectedIndex]?.Hats}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Clothing && (
              <PropertyContainer xs={6} md={4}>
                CLOTHING:
                <PropertyDiv>{items[selectedIndex]?.Clothing}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Mouth && (
              <PropertyContainer xs={6} md={4}>
                MOUTH:
                <PropertyDiv>{items[selectedIndex]?.Mouth}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Eyes && (
              <PropertyContainer xs={6} md={4}>
                EYES:
                <PropertyDiv>{items[selectedIndex]?.Eyes}</PropertyDiv>
              </PropertyContainer>
            )}
            {items[selectedIndex]?.Fur && (
              <PropertyContainer xs={6} md={4}>
                FUR:
                <PropertyDiv>{items[selectedIndex]?.Fur}</PropertyDiv>
              </PropertyContainer>
            )}
            <PropertyContainer xs={6} md={4}>
              GENDER:
              <PropertyDiv>{items[selectedIndex]?.gender}</PropertyDiv>
            </PropertyContainer>
          </DetailRow>
          <CustomBtn
            onClick={() => {
              selectDoggo(items[selectedIndex]);
              onHide();
              showNextModal();
            }}
          >
            Select
          </CustomBtn>
        </SubContainer>
      </ExpandedItem>
    </BreedingModal>
  );
};

export default SelectDogeModal;
