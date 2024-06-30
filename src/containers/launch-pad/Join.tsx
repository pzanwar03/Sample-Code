import { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "@material-ui/core";
import { Row, Col, Container } from "react-bootstrap";
import join_footer from "assets/img/launch_pad/join_footer.png";
import { emailValidation, nameValidation } from "utils/validation";

const HeaderSec = styled.div`
  background-color: #0F0F0F;
  font-family: Roboto;
  min-height: 90vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  position: relative;
  padding-top: 80px;
  padding-bottom: 400px;
  @media (max-width: 991px) {
    padding-top: 30px;
    margin-top: 0px;
    padding-bottom: 0px;
  }
  .custom-row {
    @media (max-width: 991px) {
      flex-direction: column-reverse;
    }
  }
`;

const ContentArea = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 43px;
  font-weight: 700;
  color: #fff;
  line-height: 52px;
  text-transform: uppercase;
  margin: 20px 0px 25px;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 46px;
    margin: 5px 0px 15px;
  }
}
`;
const ButtomBG = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 100%;
  height: 50%;
  position: absolute;
  background-image: url(${join_footer});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
`;
const ButtomBG1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  background: linear-gradient(180deg, #030303 0%, rgba(3, 3, 3, 0) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
  bottom: 0;
`;
const Desc = styled.div`
  max-width: 537px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`;
const InputContaner = styled.div`
  padding-top: 60px;
`;
const InputLabel = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;
const InputField = styled.div`
  margin-top: 15px;
  & input {
    background: #1b1b1b;
    border: 1px solid #ffffff5f;
    border-radius: 10px;
    color: #ffffff;
    font-size: 13px;
    width: 100%;
    height: 42px;
    padding-left: 20px;
  }
  & input:focus {
    border-radius: 5px;
  }
  & select {
    background: #1b1b1b;
    border: 1px solid #ffffff5f;
    border-radius: 10px;
    color: #ffffff;
    font-size: 13px;
    width: 100%;
    height: 42px;
    padding-left: 20px;
    padding-right: 20px;
  }
  & select:focus {
    border-radius: 5px;
  }
  & textarea {
    background: #1b1b1b;
    border: 1px solid #ffffff5f;
    border-radius: 10px;
    color: #ffffff;
    font-size: 13px;
    padding: 20px;
    width: 100%;
    height: 111px;
  }
  & textarea:focus {
    border-radius: 5px;
  }

  @media (max-width: 991px) {
    & input {
      width: 100%;
    }
    & textarea {
      width: 100%;
    }
  }
`;
const CheckCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
`;
const CustomCheckBox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: #c4c4c4;
  }
  &.MuiCheckbox-colorSecondary.Mui-checked {
    color: #ff4cb5;
  }
`;
const CheckDes = styled.div`
  padding-left: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
  cursor: pointer;
`;
const SaveBtn = styled.div<{ disable: boolean }>`
  background-color: ${({ disable }) => (disable ? "transparent" : "#FF4CB5")};
  border: 1px solid #ff4cb5;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  margin-top: 30px;
  cursor: pointer;
`;


const Join = () => {
  const [myName, setMyName] = useState<string | undefined>("");
  const [myEmail, setMyEmail] = useState<string | undefined>("");
  const [myDetail, setMyDetail] = useState<string | undefined>("");
  const [launched/*, setLaunched*/] = useState<string>("default");
  const [checked, setChecked] = useState<boolean>(false);

  const [validName, setValidName] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);

  return (
    <HeaderSec>
      <ButtomBG></ButtomBG>
      <ButtomBG1></ButtomBG1>
      <Container>
        <ContentArea>
          <Title>JOIN THE Launchpad</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar amet ut tincidunt eu pellentesque velit urna. Cras quisque malesuada pretium, at. Praesent a dictum erat et lacus tellus. Quisque in aliquet sit amet amet varius et lorem. Velit, fusce adipiscing blandit facilisi.
          </Desc>
        </ContentArea>
        <Row>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Point of contact name *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your contact name"
                  value={myName}
                  onChange={(e) => {
                    setMyName(e.target.value);
                    setValidName(nameValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Email address *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your email"
                  value={myEmail}
                  onChange={(e) => {
                    setMyEmail(e.target.value);
                    setValidEmail(emailValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Project name *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your project name"
                  value={myName}
                  onChange={(e) => {
                    setMyName(e.target.value);
                    setValidName(nameValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Has your project launched yet? *</InputLabel>
              <InputField>
                <select value={launched}>
                  <option value="default" disabled hidden>
                    Please select
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </InputField>
            </InputContaner>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>What is your projects launch date? *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your user name"
                  value={myName}
                  onChange={(e) => {
                    setMyName(e.target.value);
                    setValidName(nameValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Project Twitter URL *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your email"
                  value={myEmail}
                  onChange={(e) => {
                    setMyEmail(e.target.value);
                    setValidEmail(emailValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Project Site URL *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your user name"
                  value={myName}
                  onChange={(e) => {
                    setMyName(e.target.value);
                    setValidName(nameValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Contract Address ( please provide full etherscan.io URL)*</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your email"
                  value={myEmail}
                  onChange={(e) => {
                    setMyEmail(e.target.value);
                    setValidEmail(emailValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Project Discord URL *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your user name"
                  value={myName}
                  onChange={(e) => {
                    setMyName(e.target.value);
                    setValidName(nameValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
          <Col sm={12} md={6}>
            <InputContaner>
              <InputLabel>Token Type *</InputLabel>
              <InputField>
                <input
                  placeholder="Enter your email"
                  value={myEmail}
                  onChange={(e) => {
                    setMyEmail(e.target.value);
                    setValidEmail(emailValidation(e.target.value));
                  }}
                />
              </InputField>
            </InputContaner>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputContaner>
              <InputLabel>Is there anything else we can do for you to support your launch? *</InputLabel>
              <InputField>
                <textarea placeholder="Tell about you" value={myDetail} onChange={(e) => setMyDetail(e.target.value)} />
              </InputField>
            </InputContaner>
          </Col>
        </Row>
        <Row>
          <Col>
            <CheckCotainer>
              <CustomCheckBox
                checked={checked}
                onChange={(e) => {
                  if (validName && validEmail) {
                    setChecked(e.target.checked);
                  }
                }}
              />
              <CheckDes onClick={() => setChecked(!checked)}>
                Agree to terms text here
              </CheckDes>
            </CheckCotainer>
            <SaveBtn disable={!checked} onClick={() => { }}>
              Save Changes
            </SaveBtn>
          </Col>
        </Row>
      </Container>
    </HeaderSec>
  );
};
export default Join;
