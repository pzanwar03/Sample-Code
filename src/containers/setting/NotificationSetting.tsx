/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import styled from "styled-components";
import Switch from "react-switch";

const ProfileContaner = styled.div`
  background-color: #121212;
  color: #B0B0B0;
  padding: 40px;
  margin-top: 40px;
`
const SubTitle = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
`
const CheckCotainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
const CheckDes = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  margin-left: 27px;
  color: #FFFFFF;
`
const Divider = styled.div`
  background-color: #FFF;
  height: 1px;
  width: 100%;
  margin-top: 43px;
`

const NotificationSetting = () => {
  const [enabled, setEnabled] = useState<boolean>(true);

  return (
    <ProfileContaner>
      <SubTitle>
        set your browser Notifications
      </SubTitle>
      <CheckCotainer>
        <Switch onChange={() => setEnabled(!enabled)} checked={enabled}
          offColor="#353535" onColor="#FFBEE4"
          offHandleColor="#787878" onHandleColor="#FF4CB5"
          uncheckedIcon={false} checkedIcon={false}
          height={25} width={52}
        />
        <CheckDes>
          {
            !enabled ?
              'Enable Notifications'
              :
              'disable Notifications'
          }
        </CheckDes>
      </CheckCotainer>
      {
        enabled && (
          <Divider />
        )
      }
    </ProfileContaner>
  )
}

export default NotificationSetting;