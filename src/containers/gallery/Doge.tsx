/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import styled from "styled-components";
import FilterNavigationDropDown from "../../components/FilterNavigationDropDown";
import { BsChevronUp } from "react-icons/bs";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
import InfiniteScroll from "react-infinite-scroll-component";
import DogeDetailsModal from "components/doge-details-modal/index";
import LoadingModal from "components/LoadingModal";

import { getDoges, getDogeInfo } from "../../api"

const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 36px;
  }
`;
const GalleryArea = styled.div`
  margin: 30px 0 50px;
`;
const Item = styled.a`
  margin-top: 15px;
  display: block;
  color: #fff;
  min-width: 200px;
  min-height: 200px;
  &:hover {
    color: #fff;
  }
  & img {
    width: 100%;
  }
  & h4 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 15px;
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

const Doge = () => {
  const [userScrolled, setUserScrolled] = useState(false);

  const [filter, setFilter] = useState(initialFilter);
  const [galleryDetailsShow, setGalleryDetailsShow] = useState<boolean>(false);
  const [showLoadingModal, setShowLoadingModal] = useState<boolean>(false);
  const [galleryDetails, setGalleryDetails] = useState<any>([]);

  const perPage = 20;
  const [offset, setOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [items, setItems] = useState<any[]>([]);
  const [searchId, setSearchId] = useState<undefined | number>(undefined);
  const [searchItem, setSearchItem] = useState<any[]>([]);

  useAsyncEffect(async () => {
    if (offset === 0) {
      setShowLoadingModal(true);
      getDoges(
        offset,
        perPage,
        filter.Background === "Background" ? '' : filter.Background,
        filter.Earring === "Earring" ? '' : filter.Earring,
        filter.Eyewear === "Eyewear" ? '' : filter.Eyewear,
        filter.Hats === "Hats" ? '' : filter.Hats,
        filter.Clothing === "Clothing" ? '' : filter.Clothing,
        filter.Mouth === "Mouth" ? '' : filter.Mouth,
        filter.Eyes === "Eyes" ? '' : filter.Eyes,
        filter.Fur === "Fur" ? '' : filter.Fur,
        filter.Gender === "Gender" ? '' : filter.Gender,
        filter.Puppy === "Puppy" ? '' : filter.Puppy
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
    if (searchId) {
      getDogeInfo(searchId, 1)
        .then((res: any) => {
          if (res && res.data) {
            setSearchItem(res.data.result);
          }
        })
    } else {
      setSearchItem([]);
    }
  }, [searchId]);

  useEffect(() => {
    if (filter) {
      setOffset(0);
    }
  }, [filter])

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
    let newItems = [];
    getDoges(
      offset,
      perPage,
      filter.Background === "Background" ? '' : filter.Background,
      filter.Earring === "Earring" ? '' : filter.Earring,
      filter.Eyewear === "Eyewear" ? '' : filter.Eyewear,
      filter.Hats === "Hats" ? '' : filter.Hats,
      filter.Clothing === "Clothing" ? '' : filter.Clothing,
      filter.Mouth === "Mouth" ? '' : filter.Mouth,
      filter.Eyes === "Eyes" ? '' : filter.Eyes,
      filter.Fur === "Fur" ? '' : filter.Fur,
      filter.Gender === "Gender" ? '' : filter.Gender,
      filter.Puppy === "Puppy" ? '' : filter.Puppy,
    )
      .then((res: any) => {
        if (res && res.data) {
          newItems = [...items, ...res.data.result]
          setItems(newItems)
          setOffset(offset + perPage);
        }
      })
  };

  const DogeUI = () => {
    if (searchId && searchItem.length > 0) {
      return (
        searchItem.map((e: any, index: number) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Item
              href="#"
              onClick={() => {
                setGalleryDetailsShow(true);
                setGalleryDetails(e);
              }}
              rel="noreferrer"
            >
              <img src={e?.image} alt="DOGGY #1" />
              <h4>{e.name}</h4>
            </Item>
          </Col>
        ))
      )
    } else {
      return (
        items && items.map((e: any, index: number) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Item
              href="#"
              onClick={() => {
                setGalleryDetailsShow(true);
                setGalleryDetails(e);
              }}
              rel="noreferrer"
            >
              <img src={e?.image} alt="DOGGY #1" />
              <h4>{e.name}</h4>
            </Item>
          </Col>
        ))
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
                  <Title>Doggy</Title>
                  <FilterNavigationDropDown
                    filter={filter}
                    setFilter={setFilter}
                    searchId={searchId}
                    setSearchId={setSearchId}
                  />
                </Col>
                <Col md={9}>
                  <Row>
                    {DogeUI()}
                  </Row>
                </Col>
              </Row>
            </InfiniteScroll>
            {userScrolled && (
              <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <BsChevronUp size={30} />
              </ScrollToTop>
            )}
          </GalleryArea>
        </Container>
        <DogeDetailsModal
          show={galleryDetailsShow}
          onHide={() => setGalleryDetailsShow(false)}
          galleryDetails={galleryDetails}
        />
      </Reveal>
      <LoadingModal show={showLoadingModal} size={150} />
    </>
  );
};
export default Doge;
