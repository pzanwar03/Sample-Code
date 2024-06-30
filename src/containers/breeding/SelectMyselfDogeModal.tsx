import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Row, Col, Modal } from "react-bootstrap";
import { useUserState } from "state/user/hooks";

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
  text-transform: uppercase;
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
    margin: 5px 10px;
    width: 66px;
    height: 66px;
    border-radius: 50%;
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
  border-radius: 10px;
  background: #ff4cb5;
  margin-left: auto;
  width: 200px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  @media (max-width: 767px) {
    padding: 10px 10px;
    width: 150px;
  }
`;

type DogeModalProps = {
  show: boolean;
  onHide: Function;
  selectedType: string;
  selectItem: Function;
};

const SelectMyselfDogeModal: React.FunctionComponent<any> = (props: DogeModalProps) => {
  const { show, onHide, selectedType, selectItem } = props;
  const { myDoge } = useUserState();

  const [doge, setDoge] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  useEffect(() => {
    if (myDoge && myDoge.length > 0) {
      const temp = myDoge.filter((item) => item.gender === selectedType);
      setDoge(temp);
    }
  }, [myDoge, selectedType])
  
  return (
    <BreedingModal show={show} onHide={onHide} centered>
      <Header>{`SELECT YOUR ${selectedType}`}</Header>
      <ListContainer>
        {doge.map((item: any, index: number) => {
          return (
            <ItemList
              key={index}
              selected={index === selectedIndex}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <img src={item?.image} alt="DOGGY #1" />
              <CustomCol>{item.name}</CustomCol>
              <CustomCol>Ranking: {item.rarity}</CustomCol>
            </ItemList>
          );
        })}
      </ListContainer>
      <ExpandedItem>
        <ImgContainer>
        {
          doge[selectedIndex]?.image ?
          <img src={doge[selectedIndex]?.image} alt="DOGGY #1" />
          :
          <div style={{width: 200}} />
        }
        </ImgContainer>
        <SubContainer>
          <DetailRow>
            {doge[selectedIndex]?.Background && (
              <PropertyContainer xs={6} md={4}>
                BACKGROUND:
                <PropertyDiv>{doge[selectedIndex].Background}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Earring && (
              <PropertyContainer xs={6} md={4}>
                EARRING:
                <PropertyDiv>{doge[selectedIndex].Earring}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Eyewear && (
              <PropertyContainer xs={6} md={4}>
                EYEWEAR:
                <PropertyDiv>{doge[selectedIndex].Eyewear}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Hats && (
              <PropertyContainer xs={6} md={4}>
                HATS:
                <PropertyDiv>{doge[selectedIndex].Hats}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Clothing && (
              <PropertyContainer xs={6} md={4}>
                CLOTHING:
                <PropertyDiv>{doge[selectedIndex].Clothing}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Mouth && (
              <PropertyContainer xs={6} md={4}>
                MOUTH:
                <PropertyDiv>{doge[selectedIndex].Mouth}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Eyes && (
              <PropertyContainer xs={6} md={4}>
                EYES:
                <PropertyDiv>{doge[selectedIndex].Eyes}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.Fur && (
              <PropertyContainer xs={6} md={4}>
                FUR:
                <PropertyDiv>{doge[selectedIndex].Fur}</PropertyDiv>
              </PropertyContainer>
            )}
            {doge[selectedIndex]?.gender && (
              <PropertyContainer xs={6} md={4}>
                GENDER:
                <PropertyDiv>{doge[selectedIndex].gender}</PropertyDiv>
              </PropertyContainer>
            )}
          </DetailRow>
          <CustomBtn
            onClick={() => {
              selectItem(doge[selectedIndex]);
              onHide();
              setSelectedIndex(0);
            }}
          >
            {doge.length > 0? 'Select' : 'Cancel'}
          </CustomBtn>
        </SubContainer>
      </ExpandedItem>
    </BreedingModal>
  );
};

export default SelectMyselfDogeModal;
