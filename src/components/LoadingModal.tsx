import Lottie from "react-lottie";
import animationData from "../assets/json/loading.json";
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

const LoadingModal: React.FC<any> = (props) => {
  const { show, size } = props;
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  if (show) {
    return (
      <LoadingContainer>
        <Lottie options={defaultOptions} height={size} width={size} />
      </LoadingContainer>
    );
  }

  return <></>;
};

export default LoadingModal;
