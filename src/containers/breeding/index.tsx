/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import AllItems from "./AllItems";
import MyselfItems from "./MyselfItems";
import SortBy from "./SortBy";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 36px;
  }
`;
const GalleryArea = styled.div`
  margin: 30px 0 50px;
`;
const PageMenu = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  & a {
    margin-right: 50px;
    display: inline-block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    color: #c4c4c4;
    letter-spacing: 1px;
    &.active {
      color: #ff4cb5;
      border-bottom: 1px solid #ff4cb5;
      line-height: 27px;
    }
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;
const PageHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
  }
`;
const ShortByArea = styled.div`
  display: flex;
  align-items: center;
`;
const STitle = styled.div`
  font-size: 14px;
  color: #b0b0b0;
  text-transform: uppercase;
  font-weight: 500;
  margin-right: 25px;
`;

const Breeding: React.FC<any> = ({ match }) => {
  return (
    <Container>
      <GalleryArea>
        <Row>
          <Col md={3}>
            <Title>Breeding</Title>
          </Col>
          <Col md={9}>
            <PageHead>
              <PageMenu>
                <Link to="/breeding/all" className={match.params.page === "all" ? "active" : ""}>
                  Listed Doges
                </Link>
                <Link to="/breeding/myself" className={match.params.page === "myself" ? "active" : ""}>
                  My House
                </Link>
              </PageMenu>
              <ShortByArea>
                <STitle>Sort by:</STitle>
                <SortBy />
              </ShortByArea>
            </PageHead>
          </Col>
        </Row>
        <Switch>
          <Route path="/breeding/all" render={() => <AllItems />} />
          <Route path="/breeding/myself" render={() => <MyselfItems />} />
        </Switch>
      </GalleryArea>
    </Container>
  );
};
export default Breeding;
