/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/json/failed.json";
import styled from "styled-components";

const LoadingContainer = styled.div`
  background-color: #000000af;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const FailedModal: React.FC<any> = (props) => {
  const { show, setShow, size } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (show) {
      setTimeout(function() {
        setShow(false);
      }, 3000);
    }
    return () => {
    }
  }, [show])

  if (show) {
    return (
      <LoadingContainer>
        <Lottie options={defaultOptions} height={size} width={size} />
      </LoadingContainer>
    );
  }

  return <></>;
};

export default FailedModal;
