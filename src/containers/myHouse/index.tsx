/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import FilterNavigationDropDown from "../../components/FilterNavigationDropDown";
import FilterNavigationDropDownPuppy from "../../components/FilterNavigationDropDownPuppy";
import { BsChevronUp } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import { useUserState } from "../../state/user/hooks";
import Doge from "./Doge";
import Puppy from "./Puppy";

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
const DogeArea = styled.div`
  margin: 30px 0 50px;
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
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    margin-top: 30px;
    margin-bottom: 10px;
    justify-content: center;
  }
`;
const ToggleButton = styled.div<{ right: boolean; active: boolean }>`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 8px 30px;
  width: 150px;
  border: 1px solid #ff4cb5;
  border-radius: 10px;
  margin-right: ${({ right }) => (right ? "0px" : "-27px")};
  background-color: ${({ active }) => (active ? "#ff4cb5" : "transparent")};
  cursor: pointer;
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

const initialFilterForPuppy = {
  Background: "Background",
  Tail: "Tail",
  Eyewear: "Eyewear",
  Hats: "Hats",
  Clothing: "Clothing",
  Mouth: "Mouth",
  Eyes: "Eyes",
  Fur: "Fur"
};

const MyHouse = () => {
  const perPage = 8;
  const { myDoge, myPuppy } = useUserState();

  const [type, setType] = useState<string>("Doge");
  const [userScrolled, setUserScrolled] = useState(false);

  const [filter, setFilter] = useState(initialFilter);
  const [filterPuppy, setFilterPuppy] = useState(initialFilterForPuppy);
  const [searchId, setSearchId] = useState<undefined | number>(undefined);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyFilter = (myItems: any[],filter: any, initialFilter: any) => {
    return myItems.filter((attribute: any) => {
      const keys = Object.keys(initialFilter);
      for (const key of keys) {
        if (key === "Puppy") {
          if (filter[key] === "Puppy") {
            return true
          } else {
            if (filter[key] === "Minted") {
              return attribute[key.toLowerCase()].minted;
            } else {
              return !attribute[key.toLowerCase()].minted;
            }
          }
        }
        if (
          filter[key] !== (initialFilter as any)[key] &&
          attribute[key] !== filter[key] &&
          attribute[key.toLowerCase()] !== filter[key]
        ) {
          return false;
        }
      }
      return true;
    });
  };

  useEffect(() => {
    if (searchId) {
      const temp = type === "Doge" ? myDoge.filter((item) => item.tokenId.toString() === searchId) : myPuppy.filter((item) => item.tokenId.toString() === searchId);
      if (temp) {
        setItems(temp);
      } else {
        setItems([]);
      }
      return;
    }
    const temp = type === "Doge" ? applyFilter(myDoge, filter, initialFilter) : applyFilter(myPuppy, filterPuppy, initialFilterForPuppy);
    setFilteredItems(temp);
    setItems(temp.slice(0, temp.length > perPage ? perPage : temp.length));
  }, [filter, filterPuppy, searchId, type, myPuppy, myDoge]);

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
      let newItems = filteredItems
        .filter((el: any, key: any) => key < items.length + perPage)
        ?.map((el1: any) => {
          return el1;
        });
      setItems(newItems);
    }, 500);
  };

  return (
    <Container>
      <DogeArea>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={items.length < filteredItems.length}
          loader={null}
          style={{ overflow: "hidden" }}
        >
          <Row>
            <Col md={3}>
              <Title>My House</Title>
              {
                type === "Doge" ?
                  <FilterNavigationDropDown
                    filter={filter}
                    setFilter={setFilter}
                    searchId={searchId}
                    setSearchId={setSearchId}
                  />
                  :
                  <FilterNavigationDropDownPuppy
                    filter={filterPuppy}
                    setFilter={setFilterPuppy}
                    searchId={searchId}
                    setSearchId={setSearchId}
                  />
              }
            </Col>
            <Col md={9}>
              <ToggleContainer>
                <ToggleButton right={false} active={type === "Doge"} onClick={() => setType("Doge")}>
                  DOGGY
                </ToggleButton>
                <ToggleButton right={true} active={type === "Puppies"} onClick={() => setType("Puppies")}>
                  PUPPY
                </ToggleButton>
              </ToggleContainer>
              {
                type === 'Doge' ?
                  <Doge
                    items={items}
                  />
                  :
                  <Puppy items={items} />
              }
            </Col>
          </Row>
        </InfiniteScroll>
        {userScrolled && (
          <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <BsChevronUp size={30} />
          </ScrollToTop>
        )}
      </DogeArea>
    </Container>
  );
};

export default MyHouse;
