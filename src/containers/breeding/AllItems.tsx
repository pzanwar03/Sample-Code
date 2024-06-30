/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useWallet } from "wallets/wallet";
import { BsChevronUp } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { useWeb3Contracts } from "web3/contracts";
import { /*useHashState,*/ useHashHandlers } from "state/transaction/hooks";
import FilterNavigationDropDown from "../../components/FilterNavigationDropDown";
import SelectDogeModal from "./SelectDogeModal";
import BreedModal from "./BreedModal";
import DogeListModal from "components/doge-list-modal";
import PuppyConfirmModal from "components/open-puppy-confirm-modal";
import PuppySuccessmModal from "components/open-puppy-success-modal";
import ConfirmModal from "components/confirm-modal";
import ResultModal from "./ResultModal";
import ArrowDown from "assets/img/arrow_down.png";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import { getBreedingList, createBreedRequest, updateBreedService } from "../../api";
import { useModalHandlers } from "state/modal/hooks";

const ItemContainer = styled.div`
  font-family: TTNorms;
  background-color: #171717;
  margin-top: 15px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ff4cb5;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;
const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: block;
  }
`;
const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ffffff5f;
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
const CustomCol = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-end;
  padding: 15px 50px;
  @media (max-width: 767px) {
    padding: 5px 5px;
  }
`;
const CustomCol1 = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  align-items: flex-end;
  @media (max-width: 767px) {
    padding: 5px 5px;
  }
`;
const ArrowContainer = styled.div<{ extend: boolean }>`
  padding: 20px;
  @media (max-width: 767px) {
    padding: 0px 10px 0px 0px;
  }
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
`;
const CustomBtn = styled.a`
  padding: 7px 10px;
  border: 1.5px solid #ff4cb5;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  background: #ff4cb5;
  width: 200px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  margin-right: 10px;
  &:hover {
    color: #fff;
  }
  @media (max-width: 767px) {
    padding: 10px 10px;
    width: 150px;
  }
`;
const ScrollToTop = styled.div`
  margin: auto;
  background: #ff4cb5;
  position: fixed;
  padding: 10px;
  border-radius: 50%;
  bottom: 30px;
  z-index: 9;
  cursor: pointer;
  right: 0;
  left: 0;
  width: 50px;
  height: 50px;
  @media (max-width: 767px) {
    bottom: 140px;
  }
`;
const TitleItems = styled.div`
  color: #b0b0b0;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  @media (max-width: 767px) {
    top: 40px;
    width: 80%;
    right: 0;
    font-size: 11px;
    display: none;
    justify-content: space-between;
    border-bottom: 0.5px solid #ffffff;
    line-height: 30px;
  }
`;
const ItenName = styled.div`
  min-width: 100px;
  text-align: center;
  @media (max-width: 767px) {
    min-width: 60px;
  }
`;
const ItenDoge = styled.div`
  min-width: 245px;
  text-align: center;
  @media (max-width: 767px) {
    display: none;
  }
`;
const ItenRanking = styled.div`
  min-width: 210px;
  text-align: center;
  @media (max-width: 767px) {
    min-width: 65px;
    text-align: left;
  }
`;
const ItenPrice = styled.div`
  min-width: 80px;
  text-align: center;
  @media (max-width: 767px) {
    min-width: 65px;
    text-align: left;
  }
`;
const ItenTime = styled.div`
  min-width: 270px;
  text-align: center;
  @media (max-width: 767px) {
    min-width: 65px;
    text-align: left;
  }
`;

const initialFilter = {
  Background: "Background",
  Earring: "Earring",
  Eyewear: "Eyewear",
  Hats: "Hats",
  Clothing: "Clothing",
  Mouth: "Mouth",
  Eyes: "Eyes",
  Fur: "Fur",
  Gender: "Gender",
  Puppy: "Puppy"
};

const AllItems: React.FC<any> = () => {
  const wallet = useWallet();
  const { puppy } = useWeb3Contracts();
  // const { txHash } = useHashState();
  const { setTxHash } = useHashHandlers();
  const [userScrolled, setUserScrolled] = useState(false);
  const { toggleLoadingModal, togglesetSuccessModal, toggleFailedModal } = useModalHandlers();

  // const [offset, setOffset] = useState<number>(0);
  // const perPage = 10;
const [total/*, setTotal*/] = useState<number>(0);
  const [breedingItems, setBreedingItems] = useState<any[]>([]);

  const [filter, setFilter] = useState(initialFilter);
  
  const [searchId, setSearchId] = useState<undefined | number>(undefined);
  const [items/*, setItems*/] = useState<any[]>([]);
  const [openedItem, setOpenedItem] = useState<number>(0);

  const [selectedDoge, setSelectedDoge] = useState<any>();
  const [selectedDoggo, setSelectedDoggo] = useState<any>();

  const [showSelectDogeModal, setShowSelectDogeModal] = useState<boolean>(false);
  const [showBreedModal, setShowBreedModal] = useState<boolean>(false);
  const [showListModal, setShowListModal] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showRemoveConfirmModal, setShowRemoveConfirmModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const [breedingPrice, setBreedingPrice] = useState<number|undefined>();
  const [breedingPeriod, setBreedingPeriod] = useState<number>(1);

  useEffect(() => {
    if (breedingItems.length === 0) {
      getBreedingList().then((res: any) => {
        if (res && res.data) {
          setBreedingItems(res.data.result);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(function () {
        setShowResultModal(true);
        setShowSuccessModal(false);
      }, 7000);
    }
  }, [showSuccessModal]);

  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        setUserScrolled(true);
      } else {
        setUserScrolled(false);
      }
    };
  });

  const fetchMoreData = async () => {
    setTimeout(() => {

    }, 500);
  };

  const setCollapseItem = (index: number) => {
    if (openedItem === index) {
      setOpenedItem(-1);
    } else {
      setOpenedItem(index);
    }
  };

  const getLeftTime = (endDate:number) => {
    const timee = Math.floor(endDate - Date.now() / 1000);
    const delta = timee > 0 ? timee : 0;

    const _days = Math.floor(delta / (60 * 60 * 24));
    const _hours = Math.floor((delta / (60 * 60)) % 24);
    const _minutes = Math.floor((delta / 60) % 60);
    return `${_days} D ${_hours} H ${_minutes} M`
  }


  const breedingRequest = () => {
    toggleLoadingModal(true);

    if (wallet.account) {
      const msgParams = JSON.stringify({
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
          ],
          BreedingRequest: [
            { name: 'doggoId', type: 'uint256' },
            { name: 'serviceId', type: 'uint256' },
          ]
        },
        primaryType: 'BreedingRequest',
        domain: {
          name: 'The Doge Pound',
        },
        message: {
          doggoId: selectedDoggo.tokenId,
          serviceId: selectedDoge.id,
        }
      });

      wallet.library
        .send("eth_signTypedData_v4", [wallet.account, msgParams])
        .then((signature: any) => {
          createBreedRequest(signature, selectedDoggo.tokenId, selectedDoge.id)
            .then(async(res: any) => {
              if (res && res.status) {
                setShowConfirmModal(true);
                toggleLoadingModal(false);
                try {
                  // const deadline = (new Date().getTime() / 1000 + 300).toFixed(0);
  
                  const result = await puppy.mintPuppyByDoge(
                    res.data.breedPrice,
                    res.data.doggoId,
                    res.data.dogeOwner,
                    res.data.dogeId,
                    res.data.deadline,
                    res.data.v,
                    res.data.r,
                    res.data.s,
                    () => mintPuppySuccess()
                  );
                  setTxHash(result);
                } catch (e) {
                  setShowConfirmModal(false);
                }
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

  const mintPuppySuccess = () => {
    setShowSuccessModal(true);
    setShowConfirmModal(false);
    puppy.reload();
  }

  const updateList = (cancel: boolean) => {
    toggleLoadingModal(true);

    const endDate = (new Date().getTime() / 1000 + 3600 * 24 * breedingPeriod).toFixed(0);
    if (wallet.account) {
      const msgParams = JSON.stringify({
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
          ],
          BreedingRequest: [
            { name: 'id', type: 'uint256' },
            { name: 'price', type: 'string' },
            { name: 'endDate', type: 'uint256' },
            { name: 'cancel', type: 'bool' },
          ]
        },
        primaryType: 'BreedingRequest',
        domain: {
          name: 'The Doge Pound',
        },
        message: {
          id: selectedDoge.id,
          price: breedingPrice? breedingPrice.toString() : '0',
          endDate,
          cancel
        }
      });
      
      wallet.library
        .send("eth_signTypedData_v4", [wallet.account, msgParams])
        .then((signature: any) => {
          updateBreedService(signature, selectedDoge.id, breedingPrice? breedingPrice: '0', endDate, cancel)
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
    <Reveal effect="fadeInRight">
      <>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={items.length < total}
          loader={null}
          style={{ overflow: "hidden" }}
        >
          <Row>
            <Col md={3}>
              {/* <FilterNavigation /> */}
              <FilterNavigationDropDown
                filter={filter}
                setFilter={setFilter}
                searchId={searchId}
                setSearchId={setSearchId}
              />
            </Col>
            <Col md={9} className="mt-3">
              <>
                <TitleItems>
                  <ItenDoge>Doge</ItenDoge>
                  <ItenName>Name</ItenName>
                  <ItenRanking>ranking</ItenRanking>
                  <ItenPrice>price</ItenPrice>
                  <ItenTime>time left</ItenTime>
                </TitleItems>
                {breedingItems.map((e: any, index: number) => (
                  <ItemContainer key={index}>
                    {e?.doge && index !== openedItem && (
                      <Item
                        onClick={() => {
                          setCollapseItem(index);
                        }}
                      >
                        <ImageCol active={false}>
                          <img src={e?.doge.image} alt="DOGGY #1" />
                        </ImageCol>
                        <Container1>
                          <Container2>
                            <CustomCol>{e.doge.name}</CustomCol>
                            <CustomCol>{e.doge.rarity}</CustomCol>
                          </Container2>
                          <Container2>
                            <CustomCol>{`${e.price}ETH`}</CustomCol>
                            <CustomCol>
                              {getLeftTime(e.endDate)}
                            </CustomCol>
                          </Container2>
                        </Container1>
                        <ArrowContainer extend={false}>
                          <img src={ArrowDown} alt="Arrow Down" />
                        </ArrowContainer>
                      </Item>
                    )}
                    {e?.doge && index === openedItem && (
                      <ExpandedItem>
                        <ImgContainer>
                        {
                          e?.doge?.image?
                          <img src={e?.doge?.image} alt="DOGGY #1" />
                          :
                          <EmptyImage></EmptyImage>
                        }
                        </ImgContainer>
                        <SubContainer>
                          <Item onClick={() => setCollapseItem(-1)}>
                            <ImageCol1>
                              <img src={e?.doge?.image} alt="DOGGY #1" />
                            </ImageCol1>
                            <Container1>
                              <Container2>
                                <CustomCol1>{e.doge.name}</CustomCol1>
                                <CustomCol1>{e.doge.rarity}</CustomCol1>
                              </Container2>
                              <Container2>
                                <CustomCol1>{`${e.price}ETH`}</CustomCol1>
                                <CustomCol1>
                                  {getLeftTime(e.endDate)}
                                </CustomCol1>
                              </Container2>
                            </Container1>
                            <ArrowContainer extend={true}>
                              <img src={ArrowDown} alt="Arrow Down" />
                            </ArrowContainer>
                          </Item>
                          <Divider />
                          <DetailRow>
                            {e.doge.Background && (
                              <PropertyContainer xs={6} md={4}>
                                BACKGROUND:
                                <PropertyDiv>{e.doge.Background}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Earring && (
                              <PropertyContainer xs={6} md={4}>
                                EARRING:
                                <PropertyDiv>{e.doge.Earring}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Eyewear && (
                              <PropertyContainer xs={6} md={4}>
                                EYEWEAR:
                                <PropertyDiv>{e.doge.Eyewear}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Hats && (
                              <PropertyContainer xs={6} md={4}>
                                HATS:
                                <PropertyDiv>{e.doge.Hats}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Clothing && (
                              <PropertyContainer xs={6} md={4}>
                                CLOTHING:
                                <PropertyDiv>{e.doge.Clothing}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Mouth && (
                              <PropertyContainer xs={6} md={4}>
                                MOUTH:
                                <PropertyDiv>{e.doge.Mouth}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Eyes && (
                              <PropertyContainer xs={6} md={4}>
                                EYES:
                                <PropertyDiv>{e.doge.Eyes}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            {e.doge.Fur && (
                              <PropertyContainer xs={6} md={4}>
                                FUR:
                                <PropertyDiv>{e.doge.Fur}</PropertyDiv>
                              </PropertyContainer>
                            )}
                            <PropertyContainer xs={6} md={4}>
                              GENDER:
                              <PropertyDiv>{e.doge.gender}</PropertyDiv>
                            </PropertyContainer>
                          </DetailRow>
                          <CustomRow>
                            {
                              wallet.account?.toLowerCase() === e.originOwner ?
                              <>
                                <CustomBtn
                                  style={{ backgroundColor: 'transparent' }}
                                  onClick={() => {
                                    setSelectedDoge(e);
                                    setShowRemoveConfirmModal(true);
                                  }}
                                >
                                  Cancel Your List
                                </CustomBtn>
                                <CustomBtn
                                  onClick={() => {
                                    setSelectedDoge(e);
                                    setShowListModal(true);
                                  }}
                                >
                                  Update Your List
                                </CustomBtn>
                              </>
                              :
                              <CustomBtn
                                onClick={() => {
                                  if (wallet.account) {
                                    setSelectedDoge(e);
                                    setShowSelectDogeModal(true)
                                  }
                                }}
                              >
                                Select
                              </CustomBtn>
                            }
                        </CustomRow>
                      </SubContainer>
                    </ExpandedItem>
                  )}
                  </ItemContainer>
                ))}
              </>
            </Col>
          </Row>
        </InfiniteScroll>

        <SelectDogeModal
          show={showSelectDogeModal}
          onHide={() => setShowSelectDogeModal(false)}
          selectDoggo={setSelectedDoggo}
          showNextModal={() => setShowBreedModal(true)}
        />

        <BreedModal
          show={showBreedModal}
          onHide={() => setShowBreedModal(false)}
          selectedDoge={selectedDoge}
          selectedDoggo={selectedDoggo}
          breedingRequest={breedingRequest}
        />

        <DogeListModal
          show={showListModal}
          onHide={() => {
            setShowListModal(false);
          }}
          galleryDetails={selectedDoge?.doge}
          breedingPrice={breedingPrice}
          setBreedingPrice={setBreedingPrice}
          breedingPeriod={breedingPeriod}
          setBreedingPeriod={setBreedingPeriod}
          listToBreed={() => {
            updateList(false)
          }}
        />

        <PuppyConfirmModal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} />
        <PuppySuccessmModal show={showSuccessModal} onHide={() => {}} />

        <ConfirmModal
          show={showRemoveConfirmModal}
          onHide={() => {
            setShowRemoveConfirmModal(false);
          }}
          confirm={() => {
            updateList(true);
          }}
          title={"Close List"}
          content={"Do you want to remove this doge from breeding list?"}
        />

        <ResultModal show={showResultModal} onHide={() => setShowResultModal(false)} />
        
        {userScrolled && (
          <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <BsChevronUp size={30} />
          </ScrollToTop>
        )}
      </>
    </Reveal>
  );
};
export default AllItems;
