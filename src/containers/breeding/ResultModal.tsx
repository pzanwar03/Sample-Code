import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
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
  margin: 0 20px 20px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`;
const ExpandedItem = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: block;
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
const CustomBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
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
};

const ResultModal: React.FunctionComponent<any> = (props: DogeModalProps) => {
  const history = useHistory();

  const { show, onHide } = props;
  const { myDoge } = useUserState();

  if (!myDoge || !myDoge.length) {
    return null;
  }

  return (
    <BreedingModal show={show} onHide={onHide} centered>
      <ExpandedItem>
        <SubContainer>
          <Header>SUCCESS!</Header>
          <CustomBtn
            onClick={() => {
              history.push({
                pathname: "/house",
              });
            }}
          >
            GO TO MY HOUSE
          </CustomBtn>
        </SubContainer>
      </ExpandedItem>
    </BreedingModal>
  );
};

export default ResultModal;
