// import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { IoMdRocket } from "react-icons/io";
import Arrow from "assets/img/arrow.png";

const RoadBox = styled.div``;
const Title = styled.h2`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  line-height: 66px;
  margin-top: 50px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 55px;
    line-height: 55px;
  }
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 45px;
  }
  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 34px;
    margin-top: 40px;
  }
`;
const ProgressArea = styled.div`
  width: 100%;
  margin: 10px 30px 25px;
  font-family: "Roboto";
  @media (max-width: 991px) {
    margin: 15px;
  }
  @media (max-width: 767px) {
    padding-bottom: 10px;
    width: 100%;
    margin: 0 0 28px 16px;
    &.mb0 {
      margin-bottom: 0;
    }
  }
  & p {
    font-size: 18px;
    margin: 0;
    line-height: 24px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
const Description = styled.div`
  width: 100%;
  padding: 20px 30px;
  font-family: "Roboto";
  @media (max-width: 991px) {
    padding: 15px;
  }
  @media (max-width: 767px) {
    padding: 0px;
    width: 100%;
  }
  & p {
    font-size: 18px;
    margin: 0;
    line-height: 24px;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const RoadMapArea = styled.div`
  margin: 0 auto 50px;
`;
const ItemRecord = styled.div`
  text-align: center;
`;
const ItemNum = styled.div`
  height: 80px;
  width: 80px;
  background-color: #ff4cb5;
  border-radius: 50%;
  padding: 18px 5px;
  margin: 0 auto 20px !important;
  @media (max-width: 991px) {
    height: 60px;
    width: 60px;
    padding: 9px 5px;
  }
`;
const ProgressAmount = styled.div`
  font-size: 26px;
  font-weight: 800;
  line-height: 43px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;
const RoadMapItem = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  font-family: "Roboto";
  &:last-child {
    border-bottom: 0;
  }
`;
const RoadItemArea = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const RoadMap = () => {
  // const [days, setDays] = useState(0);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // const [intervalId, setIntervalId] = useState<any>(0);
  // const [countDownShow, setCountDownShow] = useState(true);
  // const timestamp = 1626123600000;

  // useEffect(() => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //   }

  //   const id = setInterval(() => {
  //     const timee = timestamp - Date.now();
  //     const delta = Math.abs(timee);
  //     if (timee <= 0) {
  //       setCountDownShow(false);
  //     }

  //     const _days = Math.floor(delta / (1000 * 60 * 60 * 24));
  //     const _hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  //     const _minutes = Math.floor((delta / 1000 / 60) % 60);
  //     const _seconds = Math.floor((delta / 1000) % 60);

  //     setDays(_days);
  //     setHours(_hours);
  //     setMinutes(_minutes);
  //     setSeconds(_seconds);
  //   }, 1000);
  //   setIntervalId(id);
  // }, []);

  return (
    <RoadBox id="roadmap">
      <Container>
        <RoadMapArea>
          <Title>roadmap</Title>
          <Description className="mb-5 pt-4">
            <p>
              The Doge Pound is a full time project for us now and it will continue to be after the public sale. Below
              is what we're working towards in the short term. Each milestone unlocks when a certain % of doges have
              been minted. Future developments will be decided and voted upon by the community.
              {/* The Doge Pound public sale will take place on our website on Monday July 12th at 5 PM EST. */}
            </p>
            {/* <p style={{ color: "#ff4cb5", textAlign: "center" }} className="mt-2">
              {countDownShow && `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`}
            </p> */}
          </Description>
          <RoadItemArea>
            <RoadMapItem>
              <ItemRecord>
                <ItemNum>
                  <ProgressAmount>20%</ProgressAmount>
                </ItemNum>
                <img src={Arrow} alt="" />
              </ItemRecord>
              <ProgressArea className="pro-border" style={{ textDecorationLine: 'line-through' }}>
                <p>Some of Doge NFTs will be airdropped to our early adopters and fanbase</p>
                <p>
                  We ramp up our Discord and social media management, which will include a pack of community managers
                  and moderators to bring our Doge community to the moon 🌙
                </p>
              </ProgressArea>
            </RoadMapItem>

            <RoadMapItem>
              <ItemRecord>
                <ItemNum>
                  <ProgressAmount>50%</ProgressAmount>
                </ItemNum>
                <img src={Arrow} alt="" />
              </ItemRecord>
              <ProgressArea className="pro-border mb0" style={{ textDecorationLine: 'line-through' }}>
                <p>
                  $20,000 donation fund will be established and with the help of the community we will decide on a
                  charity who is a good partner for our project. With the project we want to bring together a community
                  of doge and dog lovers 🐶
                </p>
              </ProgressArea>
            </RoadMapItem>

            <RoadMapItem>
              <ItemRecord>
                <ItemNum>
                  <ProgressAmount>70%</ProgressAmount>
                </ItemNum>
                <img src={Arrow} alt="" />
              </ItemRecord>
              <ProgressArea className="pro-border" style={{ textDecorationLine: 'line-through' }}>
                <p>
                  An exclusive The Doge Pound merch line will drop. This will be hats, Tshirts, and most importantly
                  apparel for your dogs! We already have several designs done and ready to go!
                </p>
              </ProgressArea>
            </RoadMapItem>

            <RoadMapItem>
              <ItemRecord>
                <ItemNum>
                  <ProgressAmount>90%</ProgressAmount>
                </ItemNum>
                <img src={Arrow} alt="" />
              </ItemRecord>
              <ProgressArea className="pro-border mb0" style={{ textDecorationLine: 'line-through' }}>
                <p>
                  Community grant fund of $30,000 is launched. Create, design, develop, or build something that the
                  community values (e.g. extra utility for the doges, additional art, memes, etc.) and receive funding
                  from The Doge Pound team. In addition to this 2.5% of the OpenSea fees will go into the community
                  grant forever! Building out the longevity and community is our #1 priority.
                </p>
              </ProgressArea>
            </RoadMapItem>

            <RoadMapItem>
              <ItemRecord>
                <ItemNum>
                  <ProgressAmount>100%</ProgressAmount>
                </ItemNum>
                <img src={Arrow} alt="" />
              </ItemRecord>
              <ProgressArea className="pro-border mb0">
                <p>
                  We will establish a liquidity pool and seed it in order to help stabilize the price of the doge
                  NFTs/token. The plan is to launch this 2-3 days after launch and buy up a handful of doges at floor
                  price.
                </p>
              </ProgressArea>
            </RoadMapItem>
            <RoadMapItem>
              <ItemRecord>
                <ItemNum>
                  <ProgressAmount>
                    <IoMdRocket size={38} />
                  </ProgressAmount>
                </ItemNum>
              </ItemRecord>
              <ProgressArea className="mb0">
                <p>
                  🚀🚀 Already in the works 🚀🚀
                  <br></br>
                  We will make Doges ready for MetaVerse / 3D. (We will leak some previews of this as we’ve secretly
                  been working on this for a while)
                  <br></br>
                  <br></br>
                  <div style={{ textDecorationLine: 'line-through' }}>
                    Companion NFT will be dropped. (Every doge lover that is holding a doge down the road will get a
                    companion NFT for free)
                  </div>
                  <br></br>
                  <br></br>
                  The rest of the fate of this project will be determined by YOU, the community! Together, we plan to
                  make this an ultra strong, fun loving, community! Let’s kick some butt! 🐶
                  <br></br>
                  <br></br>
                  Finally, there is a lot being discussed about potential partnerships and future developments of the
                  project. Our focus for the time being is having a super smooth launch and delivering on everything
                  listed above. We don’t think it is fair to over hype things for now that aren’t set in stone.
                </p>
              </ProgressArea>
            </RoadMapItem>
          </RoadItemArea>
        </RoadMapArea>
      </Container>
    </RoadBox>
  );
};
export default RoadMap;
