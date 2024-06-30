/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, createRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import styled from "styled-components";
import NotificationSystem from "react-notification-system";
import UserAvatar from "assets/img/user_profile.gif";
import { useUserState, useUserHandlers } from "state/user/hooks";
import { saveProfile, saveAvatar } from "api";
import { emailValidation, nameValidation } from "utils/validation";
import { useModalHandlers } from "state/modal/hooks";

const ProfileContaner = styled.div`
  background-color: #121212;
  color: #b0b0b0;
  padding: 40px;
  margin-top: 40px;
`;
const SubTitle = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
`;
const ImagePickerContainer = styled.div`
  display: flex;
  align-items: center;
  & input {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
    overflow: hidden;
    z-index: -1;
  }
`;
const AvatarImage = styled.img`
  width: 128px;
  height: 128px;
  border: 1px solid #ff4cb5;
  border-radius: 64px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;
const UploadBtnContainer = styled.div`
  margin-left: 20px;
`;
const UploadBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding-top: 0.5rem;
  border: 1px solid #ff4cb5;
  border-radius: 24px;
  width: 180px;
  cursor: pointer;
  & label {
    cursor: pointer;
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
  }
  &:hover {
    background-color: #ff4cb5;
  }
  @media (max-width: 767px) {
    width: 150px;
  }
`;
const UploadDes = styled.div`
  margin-top: 10px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
`;
const InputContaner = styled.div``;
const InputLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
const InputField = styled.div`
  margin-top: 15px;
  & input {
    background: #1b1b1b;
    border: 1px solid #ffffff5f;
    border-radius: 10px;
    color: #ffffff;
    font-size: 13px;
    width: 420px;
    height: 42px;
    padding-left: 20px;
  }
  & input:focus {
    border-radius: 5px;
  }
  & textarea {
    background: #1b1b1b;
    border: 1px solid #ffffff5f;
    border-radius: 10px;
    color: #ffffff;
    font-size: 13px;
    padding: 20px;
    width: 960px;
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
const ValidField = styled.div`
  margin-top: 5px;
  height: 25px;
  font-size: 12px;
  color: red;
`;
const Description = styled.div`
  font-size: 10px;
  font-weight: 600;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const CheckCotainer = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 12px;
  margin-left: 5px;
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
  border-radius: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  margin-top: 30px;
  cursor: pointer;
`;

const UserInfo = () => {
  const notificationSystem: any = createRef();
  const { email, twitter, userName, discord, description, avatar } = useUserState();
  const { toggleLoadingModal, togglesetSuccessModal, toggleFailedModal } = useModalHandlers();
  const { setUserProfile } = useUserHandlers();

  const [imageUploadNumber, setImageUploadNumber] = useState<number>(0);

  const [loadingIamge, setLoadingIamge] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<any>(avatar);
  const [imageData, setImageData] = useState<any>(null);
  const [checked, setChecked] = useState<boolean>(false);

  const [myName, setMyName] = useState<string | undefined>(userName || "");
  const [myDiscord, setMyDiscord] = useState<string | undefined>(discord || "");
  const [myEmail, setMyEmail] = useState<string | undefined>(email || "");
  const [myTwitter, setMyTwitter] = useState<string | undefined>(twitter || "");
  const [myDetail, setMyDetail] = useState<string | undefined>(description || "");

  const [validName, setValidName] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const handleFileChange = (event: any) => {
    const { target } = event;
    const { files } = target;

    if (files && files[0]) {
      var reader = new FileReader();

      reader.onloadstart = () => setLoadingIamge(true);

      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          if (files[0].size < 600000) {
            setImageUrl(files[0]);
            setImageData(result);
          } else {
            setImageUploadNumber(imageUploadNumber + 1);
            setLoadingIamge(false);
          }
        }
      };

      reader.readAsDataURL(files[0]);
    }
  };

  useEffect(() => {
    if (!validName || !validEmail) {
      setChecked(false);
    }
  }, [validName, validEmail]);

  useEffect(() => {
    if (imageUploadNumber) {
      addNotification();
    }
  }, [imageUploadNumber]);

  useEffect(() => {
    if (loadingIamge) {
      saveAvatar(imageUrl).then((res: any) => {
        if (res && res.data) {
          const user = res.data.user;
          setUserProfile(
            user.id,
            user.email,
            user.emailVerified,
            user.discord,
            user.username,
            user.discord,
            user.description,
            user.avatar
          );
          setLoadingIamge(false);
        } else {
        }
      });
    }
  }, [imageUrl]);

  const saveUserProfile = () => {
    if (!checked) return;

    toggleLoadingModal(true);
    saveProfile(myEmail, myTwitter, myName, myDiscord, myDetail).then((res: any) => {
      if (res && res.data) {
        const user = res.data.user;
        setUserProfile(
          user.id,
          user.email,
          user.emailVerified,
          user.discord,
          user.username,
          user.discord,
          user.description,
          user.avatar
        );
        setChecked(false);

        toggleLoadingModal(false);
        togglesetSuccessModal(true);
      } else {
        toggleLoadingModal(false);
        toggleFailedModal(true);
      }
    });
  };

  const addNotification = () => {
    const notification: any = notificationSystem.current;
    notification.addNotification({
      title: "Iamge Upload",
      message: "You try to upload large image. please select small image.",
      level: "error",
    });
  };

  return (
    <ProfileContaner>
      <SubTitle>Set profile photo</SubTitle>
      <ImagePickerContainer>
        <input id="avatar" type="file" accept="image/*" capture={true} onChange={handleFileChange} />
        <AvatarImage
          src={imageUrl ? (imageData ? imageData : `${process.env.REACT_APP_BASE_URL}/${imageUrl}`) : UserAvatar}
          alt="Avatar"
        />
        <UploadBtnContainer>
          <UploadBtn>
            {!loadingIamge && <label htmlFor="avatar">upload photo</label>}
            {loadingIamge && <label>Loading...</label>}
          </UploadBtn>
          <UploadDes>Upload your PNG or JPEG file.</UploadDes>
        </UploadBtnContainer>

        {/* <button type='button' onClick={this.handleClearClick}>
        Clear Image
      </button> */}
      </ImagePickerContainer>
      <Row style={{ marginTop: 50 }}>
        <Col sm={12} md={6}>
          <InputContaner>
            <InputLabel>User Name</InputLabel>
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
            <ValidField>{!validName ? "* Invalid Name" : ""}</ValidField>
          </InputContaner>
        </Col>
        <Col sm={12} md={6}>
          <InputContaner>
            <InputLabel>email</InputLabel>
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
            <ValidField>{!validEmail ? "* Invalid Email" : ""}</ValidField>
          </InputContaner>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <InputContaner>
            <InputLabel>Twitter</InputLabel>
            <InputField>
              <input
                placeholder="Enter your twitter id"
                value={myTwitter}
                onChange={(e) => setMyTwitter(e.target.value)}
              />
            </InputField>
            <ValidField></ValidField>
          </InputContaner>
        </Col>
        <Col sm={12} md={6}>
          <InputContaner>
            <InputLabel>DISCORD</InputLabel>
            <InputField>
              <input
                placeholder="Enter your discord id"
                value={myDiscord}
                onChange={(e) => setMyDiscord(e.target.value)}
              />
            </InputField>
            <ValidField></ValidField>
          </InputContaner>
        </Col>
      </Row>
      <InputContaner>
        <InputLabel>Description</InputLabel>
        <InputField>
          <textarea placeholder="Tell about you" value={myDetail} onChange={(e) => setMyDetail(e.target.value)} />
        </InputField>
      </InputContaner>
      <Description>A short and creative description that represents you</Description>
      <Divider />
      <CheckCotainer>
        <CustomCheckBox
          checked={checked}
          size="small"
          onChange={(e) => {
            if (validName && validEmail) {
              setChecked(e.target.checked);
            }
          }}
        />
        <CheckDes onClick={() => setChecked(!checked)}>I am sure I want to update information</CheckDes>
      </CheckCotainer>
      <SaveBtn disable={!checked} onClick={saveUserProfile}>
        Save Changes
      </SaveBtn>
      <NotificationSystem ref={notificationSystem} />
    </ProfileContaner>
  );
};

export default UserInfo;
