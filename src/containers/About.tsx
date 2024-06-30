import { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import YouTube from "react-youtube";
import VideoBg from "../assets/img/aboutbg.jpg";
import { BiPlay } from "react-icons/bi";
// @ts-ignore
import Reveal from "react-reveal/Reveal";

const AboutSec = styled.div`
  padding-top: 40px;
`;
const Details = styled.div`
  margin-top: 25px;
  font-size: 14px;
  & p {
    margin-bottom: 10px;
  }
`;
const VideoCont = styled.div`
  height: calc(100vh - 300px);
  min-height: 300px;
  & iframe {
    width: 100%;
    height: calc(100vh - 300px);
    min-height: 300px;
  }
`;
const VideoBackground = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  background-image: url(${VideoBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
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

const About = () => {
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <Reveal effect="fadeInRight">
      <AboutSec>
        <Container className="p-0" fluid>
          <VideoCont>
            <div style={{ display: playStatus ? "block" : "none" }}>
              <YouTube videoId="JG5XVwAKGWY" onReady={(event: any) => event.target.playVideo()} />
            </div>
            <VideoBackground style={{ display: playStatus === false ? "block" : "none" }}>
              <PlayBtn onClick={() => setPlayStatus(true)}>
                <div className="circle pulse"></div>
                <div className="circle">
                  <BiPlay size={38} color={"#66acb7"} />
                </div>
              </PlayBtn>
            </VideoBackground>
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
    </Reveal>
  );
};
export default About;
