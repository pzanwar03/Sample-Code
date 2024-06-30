import { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import YouTube from "react-youtube";
import VideoBg from "../../assets/img/aboutbg.jpg";
import { BiPlay } from "react-icons/bi";

const AboutSec = styled.div``;

const VideoCont = styled.div`
  /* height: 680px; */
  height: 450px;
  min-height: 300px;
  & iframe {
    width: 100%;
    height: 50vh;
    min-height: 300px;
  }
  @media (max-width: 1200px) {
    height: 530px;
  }
  @media (max-width: 991px) {
    height: 50vh;
  }
`;
const VideoBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${VideoBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  @media (max-width: 1200px) {
    background-size: cover;
  }
`;
const PlayBtn = styled.button`
  margin: auto;
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  width: 150px;
  border: 0;
  & .circle {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: #000;
    margin: auto;
    transform: scale(1, 1);
    padding: 17px;
  }
  & .circle.pulse {
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Banner = () => {
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <AboutSec>
      <Container className="p-0" fluid>
        <VideoCont>
          {playStatus ? (
            <YouTube videoId="JG5XVwAKGWY" onReady={(event: any) => event.target.playVideo()} />
          ) : (
            <VideoBackground>
              <PlayBtn onClick={() => setPlayStatus(true)}>
                <div className="circle pulse"></div>
                <div className="circle">
                  <BiPlay size={38} color={"#ff4cb5"} />
                </div>
              </PlayBtn>
            </VideoBackground>
          )}
        </VideoCont>
        {/* <Details>
            <p>
              The year is 2065. The world as we know it ceased to exist. In the midst of all that madness, one man with
              a lightning mind chose to fight destiny. It was Prof. Elon, a scientist who took the matter into his own
              hands and began the revolution. A long time ago he lost faith in mankind and started to focus on dogs. He
              needed an army of real allies, devoted companions, someone he knew would never let him down. Who better
              than a man's best friend. The dog breed evolved, becoming smarter and more self-aware. His passion drew
              increasing notice and drew more courageous confidants to his side. The army was born eager to conquer the
              globe. It got stronger by the day, propelled by a burning desire for a free world. The war was brutal,
              vigorous, and fierce. And then it stopped.
            </p>
            <p>***** 5 years later Moon World *****</p>
            <p>
              All life is on the Moon. Everyone fled the Earth's post-apocalyptic ruins. The Moon is inhabited by a pack
              of Shiba dogs known as The Doge Pound. This is their narrative.
            </p>
          </Details> */}
      </Container>
    </AboutSec>
  );
};
export default Banner;
