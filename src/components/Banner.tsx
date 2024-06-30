import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import Banner01 from "../assets/img/banner/1.jpg";
import Banner02 from "../assets/img/banner/2.jpg";
import Banner03 from "../assets/img/banner/3.jpg";
import Banner04 from "../assets/img/banner/4.jpg";
import Banner05 from "../assets/img/banner/5.jpg";
import Banner06 from "../assets/img/banner/6.jpg";
import Banner07 from "../assets/img/banner/7.jpg";
import Banner08 from "../assets/img/banner/8.jpg";
import Banner09 from "../assets/img/banner/9.jpg";
import Banner10 from "../assets/img/banner/10.jpg";
import Banner11 from "../assets/img/banner/11.jpg";
import Banner12 from "../assets/img/banner/12.jpg";
import Banner13 from "../assets/img/banner/13.jpg";
import Banner14 from "../assets/img/banner/14.jpg";
import Banner15 from "../assets/img/banner/15.jpg";
import Banner16 from "../assets/img/banner/16.jpg";
import Banner17 from "../assets/img/banner/17.jpg";
import Banner18 from "../assets/img/banner/18.jpg";
import Banner19 from "../assets/img/banner/19.jpg";
import Banner20 from "../assets/img/banner/20.jpg";
import Banner21 from "../assets/img/banner/21.jpg";
import Banner22 from "../assets/img/banner/22.jpg";
import Banner23 from "../assets/img/banner/23.jpg";
import Banner24 from "../assets/img/banner/24.jpg";
import Banner25 from "../assets/img/banner/25.jpg";
import Banner26 from "../assets/img/banner/26.jpg";
import Banner27 from "../assets/img/banner/27.jpg";
import Banner28 from "../assets/img/banner/28.jpg";

import BackIcon from "../assets/img/back.png";
import FrontIcon from "../assets/img/front.png";
// @ts-ignore
import { Carousel } from "3d-react-carousal";

const BannerArea = styled.div`
  position: relative;
  margin: 60px auto 0;
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
    width: 100%;
    display: inline-flex;
    border: 10px solid #fff;
    filter: grayscale(100%);
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
      background-image: url("${BackIcon}");
      height: 50px;
      width: 50px;
      background-size: 70%;
      background-repeat: no-repeat;
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
      background-image: url("${FrontIcon}");
      height: 50px;
      width: 50px;
      background-size: 70%;
      background-repeat: no-repeat;
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
`;
const Single = styled.div`
  border: 1px solid #ff4cb5;
  padding: 3px;
  position: absolute;
  width: 71%;
  height: 78.7%;
  z-index: 99;
  left: 0;
  right: 0;
  margin: auto;
  top: -3px;
  @media (max-width: 1200px) {
    height: 60.3%;
  }
  @media (max-width: 991px) {
    height: 49.3%;
  }
  @media (max-width: 767px) {
    height: 82.3%;
  }
`;
const ArrowText = styled.div`
  margin: 44px auto 0;
  text-align: center;
  width: 220px;
  @media (max-width: 991px) {
    font-size: 12px;
  }
  @media (max-width: 767px) {
    margin: 50px auto 0;
  }
`;
const TopLeft = styled.div`
  position: absolute;
  left: -32px;
  top: -32px;
  z-index: 9;
  transform: rotateZ(45deg);
  @media (max-width: 767px) {
    left: -20px;
    top: -20px;
  }
  & svg {
    @media (max-width: 767px) {
      height: 40px;
      width: 40px;
    }
  }
`;
const TopRight = styled.div`
  position: absolute;
  right: -32px;
  top: -32px;
  z-index: 9;
  transform: rotateZ(135deg);
  @media (max-width: 767px) {
    right: -20px;
    top: -20px;
  }
  & svg {
    @media (max-width: 767px) {
      height: 40px;
      width: 40px;
    }
  }
`;
const BottomLeft = styled.div`
  position: absolute;
  left: -32px;
  bottom: -32px;
  z-index: 9;
  transform: rotateZ(-45deg);
  @media (max-width: 767px) {
    left: -20px;
    bottom: -20px;
  }
  & svg {
    @media (max-width: 767px) {
      height: 40px;
      width: 40px;
    }
  }
`;
const BottomRight = styled.div`
  position: absolute;
  right: -32px;
  bottom: -32px;
  z-index: 9;
  transform: rotateZ(-135deg);
  @media (max-width: 767px) {
    right: -20px;
    bottom: -20px;
  }
  & svg {
    @media (max-width: 767px) {
      height: 40px;
      width: 40px;
    }
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
    <BannerBg>
      <img src={Banner04} alt="Banner04" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner05} alt="Banner05" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner06} alt="Banner06" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner07} alt="Banner07" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner08} alt="Banner08" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner09} alt="Banner09" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner10} alt="Banner10" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner11} alt="Banner11" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner12} alt="Banner12" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner13} alt="Banner13" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner14} alt="Banner14" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner15} alt="Banner15" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner16} alt="Banner16" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner17} alt="Banner17" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner18} alt="Banner18" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner19} alt="Banner19" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner20} alt="Banner20" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner21} alt="Banner21" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner22} alt="Banner22" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner23} alt="Banner23" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner24} alt="Banner24" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner25} alt="Banner25" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner26} alt="Banner26" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner27} alt="Banner27" />
    </BannerBg>,
    <BannerBg>
      <img src={Banner28} alt="Banner28" />
    </BannerBg>,
  ];
  return (
    <BannerArea className="homeBanner">
      <Single>
        <TopLeft>
          <BsChevronLeft size={70} color="#ff4cb5" />
        </TopLeft>
        <TopRight>
          <BsChevronLeft size={70} color="#ff4cb5" />
        </TopRight>
        <BottomLeft>
          <BsChevronLeft size={70} color="#ff4cb5" />
        </BottomLeft>
        <BottomRight>
          <BsChevronLeft size={70} color="#ff4cb5" />
        </BottomRight>
      </Single>
      <SliderFront>
        <Carousel slides={slides} autoplay={true} interval={2000} />
      </SliderFront>
      <ArrowText>The Doge Pound Collections</ArrowText>
    </BannerArea>
  );
};
export default Banner;
