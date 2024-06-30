/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, createRef } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";
import { BsChevronUp, BsSearch } from "react-icons/bs";
import NotificationSystem from "react-notification-system";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import InfiniteScroll from "react-infinite-scroll-component";
import PuppyModal from "components/open-puppy-modal";
import PuppyConfirmModal from "components/open-puppy-confirm-modal";
import PuppySuccessmModal from "components/open-puppy-success-modal";
import PuppyDetailsModal from "components/puppy-details-modal/index";
import DogeBuyModal from "components/doge-buy-modal/index";
import PuppiesDetailsModal from "components/puppies-details-modal/index";
import LoadingModal from "components/LoadingModal";
import OpenedPuppy from "./OpenedPuppy";

import { useWallet } from "wallets/wallet";
import { useHashState, useHashHandlers } from "state/transaction/hooks";
import { useUserState, useUserHandlers } from "state/user/hooks";
import { useWeb3Contracts } from "web3/contracts";
import { getPuppies, getPuppyInfo, setPuppyInfo, getDogeInfo } from "../../api"

import UnopenPuppy1 from "../../assets/gif/Cyan.gif";
import UnopenPuppy2 from "../../assets/gif/DarkGreen.gif";
import UnopenPuppy3 from "../../assets/gif/DarkGrey.gif";
import UnopenPuppy4 from "../../assets/gif/DeepBlue.gif";
import UnopenPuppy5 from "../../assets/gif/LightBlue.gif";
import UnopenPuppy6 from "../../assets/gif/LightGreen.gif";
import UnopenPuppy7 from "../../assets/gif/Lightrey.gif";
import UnopenPuppy8 from "../../assets/gif/LightYellow.gif";
import UnopenPuppy9 from "../../assets/gif/Pink.gif";
import UnopenPuppy10 from "../../assets/gif/Purple.gif";
import UnopenPuppy11 from "../../assets/gif/Red.gif";
import UnopenPuppy12 from "../../assets/gif/White.gif";
import UnopenPuppy13 from "../../assets/gif/Yellow.gif";
import HeartIcon from "../../assets/img/icon_heart.png";
import NonHeartIcon from "../../assets/img/icon_empty_heart.png";

const AleadyOpenedModal: React.FC<any> = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Body>
          <div style={{ fontSize: 20, marginTop: 40, textAlign: 'center' }}>
            {props.content}
          </div>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;
const Tab = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;
const TabItem = styled.div<{ active: boolean }>`
  color: ${({ active }) => (active ? "#FF4CB5" : "#C4C4C4")};
  font-size: 13px;
  font-weight: 700;
  margin: 18px 22px 0;
  cursor: pointer;
  text-transform: uppercase;
  border: 1px solid #ff4cb5;
  border-width: ${({ active }) => (active ? "0 0 1px 0" : "0")}; ;
`;
const GalleryArea = styled.div`
  margin: 30px 0 50px;
`;
const ItemContainer = styled.div`
  width: 20%;
  @media (max-width: 767px) {
    width: 50%;
  }
`;
const Item = styled.div`
  text-align: center;
  color: #fff;
  background-color: #000000;
  margin: 14px;
  border-radius: 10px;
  &:hover {
    color: #fff;
  }
  & img {
    width: 150px;
  }
  & h4 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 6px;
  }
  @media (max-width: 767px) {
    & img {
      width: 80%;
    }
    & h4 {
      font-size: 14px;
      margin-top: 6px;
    }
  }
`;
const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  & img {
    width: 17px;
    height: 16px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;
const Btn = styled.div`
  padding: 5px;
  border: 1px solid #ff4cb5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 180px;
  cursor: pointer;
  width: 150px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-color: #ff4cb5;
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
const Toolbar = styled.div`
  display: flex;
  & .input-group-text {
    border-radius: 10px;
    padding: 5px 10px 5px 15px;
    background-color: transparent;
    border: 1px solid #4f4f4f;
  }
  & .form-control {
    color: #fff;
    background-color: transparent;
    border: 1px solid #4f4f4f;
    border-radius: 10px;
    font-size: 12px;
  }
  & .form-control:focus {
    box-shadow: 0 0 0 0 rgb(0 123 255 / 25%);
  }
`;
const StyledFormControl = styled(FormControl)`
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const PuppyCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-bottom: 20px;
`;

const Puppy = () => {
  const notificationSystem: any = createRef();
  const wallet = useWallet();
  const { id, myDoge } = useUserState();
  const { dogePound, puppy } = useWeb3Contracts();
  const { setTxHash } = useHashHandlers();
  const { setUserDoge } = useUserHandlers();
  const { txHash } = useHashState();

  const UnopenPuppies = [
    UnopenPuppy1,
    UnopenPuppy2,
    UnopenPuppy3,
    UnopenPuppy4,
    UnopenPuppy5,
    UnopenPuppy6,
    UnopenPuppy7,
    UnopenPuppy8,
    UnopenPuppy9,
    UnopenPuppy10,
    UnopenPuppy11,
    UnopenPuppy12,
    UnopenPuppy13,
  ];

  const [favorite, setFavorite] = useState<String[]>([]);

  const [userScrolled, setUserScrolled] = useState(false);
  const [minted, setMinted] = useState<boolean>(false);

  const perPage = 20;
  const [offset, setOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [items, setItems] = useState<any[]>([]);
  const [searchId, setSearchId] = useState<undefined | number>(undefined);
  const [searchItem, setSearchItem] = useState<any[]>([]);

  const [showPuppyModal, setShowPuppyModal] = useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showLoadingModal, setShowLoadingModal] = useState<boolean>(false);

  const [alreadyOpened, setAlreadyOpened] = useState<boolean>(false);
  const [needLogin, setNeedLogin] = useState<boolean>(false);

  const [galleryDetailsShow, setGalleryDetailsShow] = useState<boolean>(false);
  const [mintedShow, setMintedShow] = useState<boolean>(false);
  const [dogebuyShow, setDogeBuyShow] = useState<boolean>(false);
  const [galleryDetails, setGalleryDetails] = useState<any>();
  const [mintedPuppy, setMintedPuppy] = useState<any[]>([]);

  useEffect(() => {
    if (!!localStorage.getItem("my_favorite")) {
      const temp = localStorage.getItem("my_favorite")?.split(',');
      if (temp !== undefined) {
        setFavorite(temp);
      }
    }
  }, [])

  useEffect(() => {
    if (showSuccessModal) {
      setTimeout(function () {
        setShowSuccessModal(false);
      }, 7000);
    }
  }, [showSuccessModal]);

  useEffect(() => {
    if (!showSuccessModal && mintedPuppy.length > 0) {
      setMintedShow(true);
    }
  }, [showSuccessModal, mintedPuppy]);

  useEffect(() => {
    if (!txHash) {
      setShowConfirmModal(false);
    }
  }, [txHash])

  useAsyncEffect(async () => {
    if (offset === 0) {
      setShowLoadingModal(true);
      getPuppies(
        offset,
        perPage,
        minted
      )
        .then((res: any) => {
          if (res && res.data) {
            setItems(res.data.result)
            setOffset(offset + perPage);
            setTotalCount(res.data.total);
          }
          setShowLoadingModal(false);
        })
    }
  }, [offset])

  useAsyncEffect(async () => {
    if (searchId && !minted) {
      getPuppyInfo(searchId, 1)
        .then((res: any) => {
          if (res && res.data) {
            setSearchItem(res.data.result);
          }
        })
    } else {
      setSearchItem([]);
    }
  }, [searchId]);

  useAsyncEffect(async () => {
    if (offset !== 0) {
      setOffset(0);
    } else {
      if (offset === 0) {
        setShowLoadingModal(true);
        getPuppies(
          offset,
          perPage,
          minted
        )
          .then((res: any) => {
            if (res && res.data) {
              setItems(res.data.result)
              setOffset(offset + perPage);
              setTotalCount(res.data.total);
            }
            setShowLoadingModal(false);
          })
      }
    }
  }, [minted])

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
    if (!minted) {
      let newItems = [];
      getPuppies(
        offset,
        perPage,
        minted
      )
        .then((res: any) => {
          if (res && res.data) {
            newItems = [...items, ...res.data.result]
            setItems(newItems)
            setOffset(offset + perPage);
            setTotalCount(res.data.total);
          }
        })
    }
  };

  const checkFavorite = (id: number) => {
    if (!favorite) return false;
    const temp = favorite.filter((el: any) => el === id.toString());
    if (temp && temp.length > 0) {
      return true;
    }
    return false;
  }

  const setFavoriteHandler = (id: number) => {
    let temp = [];
    let exist = false;
    for (let i = 0; i < favorite.length; i++) {
      if (favorite[i] === id.toString()) {
        exist = true;
      } else {
        temp.push(favorite[i]);
      }
    }
    if (!exist) {
      temp.push(id.toString());
    }
    localStorage.setItem('my_favorite', temp.toString())
    setFavorite(temp)
  }

  const checkExistingDoge = (id: number) => {
    const selectedId = myDoge.filter((el: any) => el.tokenId === id);
    if (selectedId && selectedId.length > 0) {
      return true;
    }
    return false;
  };

  const openPuppy = async (selectedPuppyArreay: number[]) => {
    setShowPuppyModal(false);
    if (puppy.mintIsActive && selectedPuppyArreay && selectedPuppyArreay.length > 0) {
      setShowConfirmModal(true);
      try {
        const result = await puppy.mintPuppies(selectedPuppyArreay, () => mintPuppySuccess(selectedPuppyArreay));
        // const temp = [...txHashArray, result];
        setTxHash(result)
      } catch (e) {
        setShowConfirmModal(false);
      }
    }
  };

  const mintPuppySuccess = (selectedPuppyArreay: number[]) => {
    setShowSuccessModal(true);
    setShowConfirmModal(false);
    let ids = "";
    for (const id of selectedPuppyArreay) {
      if (!ids) {
        ids = ids.concat(id.toString())
      }
      ids = ids.concat(',', id.toString())
    }
    setPuppyInfo(ids)
      .then(async (res: any) => {
        if (res && res.data) {
          setMintedPuppy(res.data);
          if (dogePound.tokensOfOwner && dogePound.tokensOfOwner.length > 0) {
            let dogeIds = "";
            for (const id of dogePound.tokensOfOwner) {
              if (!dogeIds) {
                dogeIds = dogeIds.concat(id)
              }
              dogeIds = dogeIds.concat(',', id)
            }
            getDogeInfo(dogeIds, dogePound.tokensOfOwner.length)
              .then((res: any) => {
                if (res && res.data) {
                  setUserDoge(res.data.result);
                }
              })
          }
        }
      })
    puppy.reload();
    setOffset(0);
  };

  const handleOpen = async (e: any) => {
    if (!wallet.account) {
      wallet.showWalletsModal();
      return;
    }
    if (id === -1) {
      setNeedLogin(true);
      return;
    }
    if (puppy.mintIsActive) {
      setGalleryDetails(e);
      if (checkExistingDoge(e.tokenId)) {
        const openedAleady = await puppy.existPuppy(e.tokenId);
        if (openedAleady) {
          setAlreadyOpened(true)
        } else {
          setShowPuppyModal(true);
        }
      } else {
        setDogeBuyShow(true);
      }
    } else {
    }
  }

  const PuppyUI = () => {
    if (minted) {
      return (
        <OpenedPuppy />
      )
    }
    if (searchId && searchItem.length > 0) {
      return (
        searchItem.map((e: any, index: number) => {
          if (!e.image) {
            return (
              <ItemContainer key={index}>
                <Item>
                  <ItemHeader>
                    <h4>
                      {minted ? 'PUPPY' : 'Crate'} #{e.tokenId}
                    </h4>
                    {
                      checkFavorite(e.tokenId) ?
                        <img src={HeartIcon} alt="Heart" style={{ cursor: 'pointer' }}
                          onClick={() => setFavoriteHandler(e.tokenId)}
                        />
                        :
                        <img src={NonHeartIcon} alt="Heart" style={{ cursor: 'pointer' }}
                          onClick={() => setFavoriteHandler(e.tokenId)}
                        />
                    }
                  </ItemHeader>
                  <img src={UnopenPuppies[Math.floor(Math.random() * 13)]} alt="PUPPY #1" />
                  <BtnContainer>
                    <Btn
                      onClick={() => handleOpen(e)}
                    >
                      Open
                    </Btn>
                  </BtnContainer>
                </Item>
              </ItemContainer>
            )
          }
          return <></>;
        })
      )
    } else {
      return (
        items.map((e: any, index: number) => {
          if (!e.image) {
            return (
              <ItemContainer key={index}>
                <Item>
                  <ItemHeader>
                    <h4>
                      {minted ? 'PUPPY' : 'Crate'} #{e.tokenId}
                    </h4>
                    {
                      checkFavorite(e.tokenId) ?
                        <img src={HeartIcon} alt="Heart" style={{ cursor: 'pointer' }}
                          onClick={() => setFavoriteHandler(e.tokenId)}
                        />
                        :
                        <img src={NonHeartIcon} alt="Heart" style={{ cursor: 'pointer' }}
                          onClick={() => setFavoriteHandler(e.tokenId)}
                        />
                    }
                  </ItemHeader>
                  <img src={UnopenPuppies[Math.floor(Math.random() * 13)]} alt="PUPPY #1" />
                  <BtnContainer>
                    <Btn
                      onClick={() => handleOpen(e)}
                    >
                      Open
                    </Btn>
                  </BtnContainer>
                </Item>
              </ItemContainer>
            )
          }
          return <></>;
        })
      )
    }
  }
  return (
    <>
      <Reveal effect="fadeInRight">
        <Container>
          <GalleryArea>
            <InfiniteScroll
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={items.length < totalCount}
              loader={null}
              style={{ overflow: "hidden" }}
            >
              <Row>
                <Col md={3}>
                  <Title>Puppies</Title>
                </Col>
                <Col md={6}>
                  <Tab>
                    <TabItem
                      active={!minted}
                      onClick={() => {
                        setMinted(false);
                      }}
                    >
                      Unopened
                    </TabItem>
                    <TabItem
                      active={minted}
                      onClick={() => {
                        setMinted(true);
                      }}
                    >
                      Opened
                    </TabItem>
                  </Tab>
                </Col>
                <Col md={3}>
                  {
                    !minted &&
                    <Toolbar>
                      <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <BsSearch />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <StyledFormControl
                          id="inlineFormInputGroupUsername2"
                          placeholder="SEARCH BY ID"
                          type="number"
                          value={searchId}
                          onChange={(e: any) => setSearchId(e.target.value)}
                        />
                      </InputGroup>
                    </Toolbar>
                  }
                </Col>
              </Row>
              <Row>
                <PuppyCount>
                  {minted ? 'Opened ' : 'Unopened'} {totalCount} / 10000
                </PuppyCount>
              </Row>
              <Row>
                {PuppyUI()}
              </Row>
            </InfiniteScroll>
            {userScrolled && (
              <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <BsChevronUp size={30} />
              </ScrollToTop>
            )}
          </GalleryArea>
        </Container>
      </Reveal>
      <NotificationSystem ref={notificationSystem} />
      <PuppyModal
        show={showPuppyModal}
        onHide={() => setShowPuppyModal(false)}
        puppyIndex={galleryDetails && galleryDetails.tokenId}
        openPuppy={openPuppy}
      />
      <PuppyConfirmModal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} />
      <PuppySuccessmModal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} />
      <PuppyDetailsModal
        show={galleryDetailsShow}
        onHide={() => setGalleryDetailsShow(false)}
        galleryDetails={galleryDetails}
      />
      <DogeBuyModal
        show={dogebuyShow}
        onHide={() => setDogeBuyShow(false)}
        galleryDetails={galleryDetails}
      />
      <PuppiesDetailsModal
        show={mintedShow}
        onHide={() => {
          setMintedPuppy([]);
          setMintedShow(false);
        }}
        galleryDetails={mintedPuppy}
      />
      <AleadyOpenedModal
        show={alreadyOpened}
        onHide={() => setAlreadyOpened(false)}
        content={"This crate has already been opened. Please wait until it refreshes."} />
      <AleadyOpenedModal
        show={needLogin}
        onHide={() => setNeedLogin(false)}
        content={"Please login to open this crate."} />
      <LoadingModal show={showLoadingModal} size={150} />
    </>
  );
};
export default Puppy;
