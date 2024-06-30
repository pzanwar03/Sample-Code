import styled from "styled-components";
import Banner01 from "../../assets/img/app/banner01.png";
import Banner02 from "../../assets/img/app/banner02.png";
import Banner03 from "../../assets/img/app/banner03.png";
// @ts-ignore
import { Carousel } from "3d-react-carousal";

const BannerArea = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 440px;
  @media (max-width: 991px) {
    height: 270px;
    width: 300px;
  }
  @media (max-width: 767px) {
    margin: 30px auto 5px;
    height: 406px;
    width: 470px;
    min-height: auto;
  }
  @media (max-width: 480px) {
    height: 313px;
    width: 360px;
  }
  @media (max-width: 360px) {
    height: 261px;
    width: 300px;
  }
`;
const BannerBg = styled.div`
  & img {
    width: 90%;
    display: inline-flex;
  }
`;
const SliderFront = styled.div`
  margin: 0px auto;
  width: 100%;
  & .react-3d-carousel .slider-container {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    margin: auto;
  }
  & .react-3d-carousel .slider-container .slider-left {
    height: 61px;
    bottom: -115px;
    left: -10px;
    @media (max-width: 767px) {
      bottom: -112px;
    }
    & div {
      border: 0;
    }
  }
  & .react-3d-carousel .slider-container .slider-right {
    height: 61px;
    bottom: -115px;
    left: 93%;
    @media (max-width: 767px) {
      bottom: -112px;
    }
    & div {
      border: 0;
    }
  }
  & .active .slider-single-content img {
    filter: unset;
  }
  & .slider-single-content {
    opacity: 1 !important;
  }
  .react-3d-carousel .slider-container .slider-content .slider-single {
    transition: unset;
  }
  & .react-3d-carousel .slider-container .slider-content {
    width: 100%;
    @media (max-width: 767px) {
      width: 70%;
    }
  }
  & .react-3d-carousel .slider-container .slider-content .slider-single .slider-single-content {
    box-shadow: unset;
  }
`;

const Banner = () => {
  let slides = [
    <BannerBg>
      <img src={Banner01} alt="Banner01" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner02} alt="Banner02" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner03} alt="Banner03" />
    </BannerBg>,
  ];
  return (
    <BannerArea className="homeBanner">
      <SliderFront>
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </SliderFront>
    </BannerArea>
  );
};
export default Banner;
