/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import { useUserState } from "../../state/user/hooks";
import styled from "styled-components";
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
import "./style.css";

const ModelInfo = styled.div`
  margin: 30px 0 20px;
  font-style: normal;
  text-align: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & h4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
const Content = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-top: 30px;
`
const CheckCotainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`
const CustomCheckBox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: #C4C4C4;
  }
  &.MuiCheckbox-colorSecondary.Mui-checked {
    color: #FF4CB5;
  }
`
const CheckDes = styled.div`
  font-size: 12px;
  margin-left: 5px;
  cursor: pointer;
  text-align: left;
`

const ListContainer = styled.div`
  background-color: #1C1C1C;
  height: 250px;
  overflow-y: scroll;
  margin: 20px;
  @media (max-width: 767px) {
    margin: 5px;
  }
`
const ItemList = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#E5E5E5' : 'transparent')};
  display: flex;
  cursor: pointer;
  color: #FF4CB5;
  font-size: 16px;
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  & img {
    margin: 10px;
    width: 35px;
    height: 35px;
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
`
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid #FF4CB5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 180px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin: 20px;
`
type PuppyModalDrops = {
  puppyIndex: number,
  openPuppy: Function,
};

const PuppyModal: React.FunctionComponent<any> = (props: PuppyModalDrops) => {
  const { puppyIndex, openPuppy } = props;
  const { myDoge } = useUserState();

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

  const [checked, setChecked] = useState<boolean>(false);
  const [selecteDoge, setSelecteDoge] = useState<number[]>([]);

  useEffect(() => {
    if (puppyIndex !== -1) {
      setSelecteDoge([puppyIndex])
    }
  }, [puppyIndex])

  const checkSelected = (id: number) => {
    const temp = selecteDoge.filter((el: any) => el === id);
    if (temp && temp.length > 0) {
      return true;
    }
    return false;
  }

  const setSelected = (id: number) => {
    let temp = [];
    let exist = false;
    for (let i = 0; i < selecteDoge.length; i++) {
      if (selecteDoge[i] === id) {
        exist = true;
      } else {
        temp.push(selecteDoge[i]);
      }
    }
    if (!exist) {
      temp.push(id);
    }
    
    setSelecteDoge(temp)
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="show-grid">
        <ModelInfo>
          <Title>
            <h4>confirmation</h4>
          </Title>
          <Content>
            <CheckCotainer>
              <CustomCheckBox checked={checked} size="small"
                onChange={(e) => {
                  setChecked(e.target.checked);
                  if (!e.target.checked) {
                    setSelecteDoge([puppyIndex]);
                  }
                }}
              />
              <CheckDes
                onClick={() => setChecked(!checked)}
              >
                I want to open more crates(Maximum is 20)
              </CheckDes>
              <CheckDes style={{ marginLeft: 'auto' }}>{selecteDoge.length}/20</CheckDes>
            </CheckCotainer>
          </Content>
          <ListContainer>
            {
              myDoge && myDoge.map((item, index) => {
                if (item.puppy.minted) {
                  return null;
                }
                return (
                  <ItemList key={index} selected={checkSelected(item.tokenId)}
                  // onClick={() => setSelectedIndex(index)}
                  >
                    <img src={UnopenPuppies[Math.floor(Math.random() * 13)]} alt="DOGGY #1" />
                    <CustomCol>
                      PUPPY #{item.tokenId}
                    </CustomCol>
                    <CustomCheckBox disabled={!checked} checked={checkSelected(item.tokenId)} size="small"
                      onChange={(e) => {
                        if (selecteDoge.length < 20) {
                          setSelected(item.tokenId)
                        }
                      }}
                    />
                  </ItemList>
                )
              })
            }
          </ListContainer>
          <ButtonContainer>
            <Button style={{ backgroundColor: '#FF4CB5' }}
              onClick={() => { openPuppy(selecteDoge) }}
            >
              Open
            </Button>
            <Button
              onClick={() => { openPuppy([]) }}
            >
              Cancel
            </Button>
          </ButtonContainer>
        </ModelInfo>
      </Modal.Body>
    </Modal>
  );
};

export default PuppyModal;
