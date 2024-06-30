/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ArrowDown from "../../assets/img/arrow_down.png";
import TransferModal from "components/transfer-modal";
import { useWallet } from "wallets/wallet";
import DogeListModal from "components/doge-list-modal";
import { useModalHandlers } from "state/modal/hooks";
import { createBreedService } from "api"

const ItemContainer = styled.div`
  font-family: TTNorms;
  background-color: #171717;
  margin-top: 15px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  color: #ff4cb5;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;
const ImageCol = styled.div<{ active: boolean }>`
  margin: ${({ active }) => (active ? "0px" : "15px")} ${({ active }) => (active ? "0px" : "40px")};
  align-items: center;
  width: ${({ active }) => (active ? "0px" : "60px")};
  height: ${({ active }) => (active ? "0px" : "60px")};
  & img {
    width: ${({ active }) => (active ? "0px" : "60px")};
    height: ${({ active }) => (active ? "0px" : "60px")};
    border-radius: 50%;
    border: ${({ active }) => (active ? "0px" : "1px")} solid #ff4cb5;
  }
  @media (max-width: 767px) {
    margin: 5px 5px;
    & img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid #ff4cb5;
    }
  }
`;
const ImageCol1 = styled.div`
  margin: 5px 5px;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #ff4cb5;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;
const CustomCol = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 40px;
  align-items: center;
  @media (max-width: 767px) {
    padding: 5px 5px;
  }
`;
const ArrowContainer = styled.div<{ extend: boolean }>`
  flex: 1;
  text-align: right;
  padding: 20px;
  & img {
    width: 15px;
    height: 7px;
    border: none;
    transition: all 0.2s;
    transform: ${({ extend }) => (extend ? "rotate(180deg)" : "none")};
  }
`;
const ExpandedItem = styled.div`
  display: flex;
  height: 400px;
  @media (max-width: 767px) {
    height: 310px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  margin: 50px 35px;
  & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid #ff4cb5;
  }
  @media (max-width: 767px) {
    margin: 0px;
    width: 0px;
    height: 0px;
    & img {
      width: 0px;
      height: 0px;
      border: none;
    }
  }
`;
const EmptyImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ff4cb5;
  @media (max-width: 767px) {
    width: 0px;
    height: 0px;
    border: none;
  }
`;
const SubContainer = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 12px;
  @media (max-width: 767px) {
    padding: 0px;
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ffffff5f;
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
const CustomRow = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  @media (max-width: 767px) {
    justify-content: center;
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
  font-weight: 700;
  border-radius: 10px;
  background: #0a0a0a;
  margin: 0px 10px 0;
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

type ItemProps = {
  items: Array<any>;
};

const Doge = (props: ItemProps) => {
  const { items } = props;
  const wallet = useWallet();
  const { toggleLoadingModal, togglesetSuccessModal, toggleFailedModal } = useModalHandlers();
  
  const [openedItem, setOpenedItem] = useState<number>(-1);

  const [showListModal, setShowListModal] = useState<boolean>(false);
  const [depositing, setDepositing] = useState<boolean>(false);

  const [transferModalStatus, setTransferModalStatus] = useState<number>(0);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [targetAddress, setTargetAddress] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const [breedingPrice, setBreedingPrice] = useState<number|undefined>();
  const [breedingPeriod, setBreedingPeriod] = useState<number>(1);

  const setCollapseItem = (index: number) => {
    if (openedItem === index) {
      setOpenedItem(-1);
    } else {
      setOpenedItem(index);
    }
  };

  const listToBreed = () => {
    toggleLoadingModal(true);

    const endDate = (new Date().getTime() / 1000 + 3600 * 24 * breedingPeriod).toFixed(0);
    if (wallet.account) {
      const msgParams = JSON.stringify({
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
          ],
          BreedingRequest: [
            { name: 'dogeId', type: 'uint256' },
            { name: 'price', type: 'string' },
            { name: 'endDate', type: 'uint256' },
          ]
        },
        primaryType: 'BreedingRequest',
        domain: {
          name: 'The Doge Pound',
        },
        message: {
          dogeId: parseInt(items[openedItem].tokenId),
          price: breedingPrice?.toString(),
          endDate
        }
      });

      wallet.library
        .send("eth_signTypedData_v4", [wallet.account, msgParams])
        .then((signature: any) => {
          createBreedService(signature, items[openedItem].tokenId, breedingPrice, endDate)
            .then((res: any) => {
              if (res && res.status) {
                toggleLoadingModal(false);
                togglesetSuccessModal(true);
              } else {
                toggleLoadingModal(false);
                toggleFailedModal(true);
              }
            })
        })
        .catch((e: any) => {
          toggleLoadingModal(false);
          // for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
          if (e?.code !== 4001) {
          }
        });
    }
  }

  return (
    <>
      {items.map((e: any, index: number) => (
        <ItemContainer key={index}>
          {index !== openedItem && (
            <Item
              onClick={() => {
                setCollapseItem(index);
              }}
            >
              <ImageCol active={false}>
                <img src={e?.image} alt="DOGGY #1" />
              </ImageCol>
              <CustomCol>DOGGY #{e.tokenId}</CustomCol>
              <CustomCol>Ranking: {e.rarity}</CustomCol>
              <CustomCol>Score: {e.rarityScore}</CustomCol>
              <ArrowContainer extend={false}>
                <img src={ArrowDown} alt="Arrow Down" />
              </ArrowContainer>
            </Item>
          )}
          {index === openedItem && (
            <ExpandedItem>
              <ImgContainer>
              {
                e.image?
                <img src={e?.image} alt="DOGGY #1" />
                :
                <EmptyImage></EmptyImage>
              }
              </ImgContainer>
              <SubContainer>
                <Item onClick={() => setCollapseItem(-1)}>
                  <ImageCol1>
                    <img src={e?.image} alt="DOGGY #1" />
                  </ImageCol1>
                  <CustomCol>DOGGY #{e.tokenId}</CustomCol>
                  <CustomCol>Ranking: {e.rarity}</CustomCol>
                  <CustomCol>Score: {e.rarityScore}</CustomCol>
                  <ArrowContainer extend={true}>
                    <img src={ArrowDown} alt="Arrow Down" />
                  </ArrowContainer>
                </Item>
                <Divider />
                <DetailRow>
                  {e.Background && (
                    <PropertyContainer xs={6} md={4}>
                      BACKGROUND:
                      <PropertyDiv>{e.Background}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Earring && (
                    <PropertyContainer xs={6} md={4}>
                      EARRING:
                      <PropertyDiv>{e.Earring}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Eyewear && (
                    <PropertyContainer xs={6} md={4}>
                      EYEWEAR:
                      <PropertyDiv>{e.Eyewear}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Hats && (
                    <PropertyContainer xs={6} md={4}>
                      HATS:
                      <PropertyDiv>{e.Hats}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Clothing && (
                    <PropertyContainer xs={6} md={4}>
                      CLOTHING:
                      <PropertyDiv>{e.Clothing}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Mouth && (
                    <PropertyContainer xs={6} md={4}>
                      MOUTH:
                      <PropertyDiv>{e.Mouth}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Eyes && (
                    <PropertyContainer xs={6} md={4}>
                      EYES:
                      <PropertyDiv>{e.Eyes}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  {e.Fur && (
                    <PropertyContainer xs={6} md={4}>
                      FUR:
                      <PropertyDiv>{e.Fur}</PropertyDiv>
                    </PropertyContainer>
                  )}
                  <PropertyContainer xs={6} md={4}>
                    GENDER:
                    <PropertyDiv>{e.gender}</PropertyDiv>
                  </PropertyContainer>
                </DetailRow>
                <CustomRow>
                  {
                    e.gender === "Doge" &&
                    <CustomBtn style={{ backgroundColor: "#ff4cb5" }}
                      onClick={() =>
                        setShowListModal(true)
                      }
                    >
                      LIST TO BREED
                    </CustomBtn>
                  }
                  <CustomBtn onClick={() => {setTransferModalStatus(1)}}>Transfer</CustomBtn>
                </CustomRow>
              </SubContainer>
            </ExpandedItem>
          )}
        </ItemContainer>
      ))}
      <DogeListModal
        show={showListModal}
        onHide={() => {
          setShowListModal(false);
        }}
        galleryDetails={items[openedItem]}
        breedingPrice={breedingPrice}
        setBreedingPrice={setBreedingPrice}
        breedingPeriod={breedingPeriod}
        setBreedingPeriod={setBreedingPeriod}
        listToBreed={listToBreed}
      />
      <TransferModal show={transferModalStatus !== 0}
        onHide={() => {
          setTransferModalStatus(0);
          setTransactionHash("");
          setTargetAddress("");
          setConfirm(false);
          setDepositing(false);
        }}
        doge={items[openedItem]}
        transactionHash={transactionHash}
        setTransactionHash={setTransactionHash}
        targetAddress={targetAddress}
        setTargetAddress={setTargetAddress}
        confirm={confirm}
        setConfirm={setConfirm}
        depositing={depositing}
        setDepositing={setDepositing}
        type={"Doge"}
      />
    </>
  );
};

export default Doge;
