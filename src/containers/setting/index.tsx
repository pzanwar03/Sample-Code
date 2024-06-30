/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import UserInfo from "./UserInfo";
import NotificationSetting from "./NotificationSetting"

const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 900;
  @media (max-width: 767px) {
    text-align: center;
    font-size: 36px;
  }
`;
const TabContainer = styled.div`
  display: flex;
  margin-top: 20px;
  border: solid 1px #1B1B1B;
  border-width: 0px 0px 1px 0px;
  font-size: 16px;
  font-weight: 700;
`
const Tab = styled.div<{ selected: boolean }>`
  width: 300px;
  text-align: center;
  color: ${({ selected }) => (selected ? '#FF4CB5' : '#FFFFFF')};
  border: ${({ selected }) => (selected ? 'solid 1px #FF4CB5' : 'none')};
  border-width: 0px 0px 1px 0px;
  cursor: pointer;
`

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const getProfileUI = () => {
    if (selectedTab === 0) {
      return (
        <UserInfo />
      )
    } else if (selectedTab === 1) {
      return (
        <NotificationSetting />
      )
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <Title>settings</Title>
          <div>
            Here you can edit your profile, change your information and set notifications.
          </div>
        </Col>
      </Row>
      <TabContainer>
        <Tab selected={selectedTab === 0}
          onClick={() => setSelectedTab(0)}
        >
          User Info
        </Tab>
        <Tab selected={selectedTab === 1}
          onClick={() => setSelectedTab(1)}
        >
          Notifications
        </Tab>
      </TabContainer>
      {getProfileUI()}
    </Container>
  )
}

export default Profile;