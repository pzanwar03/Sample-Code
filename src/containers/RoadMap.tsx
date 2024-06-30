import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
// import { useWeb3Contracts } from "web3/contracts";

const RoadBox = styled.div`
  padding: 20px 0;
`;
const ProgressArea = styled.div`
  max-width: 550px;
  margin: 0px auto;
  background-color: #121212;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  @media (max-width: 767px) {
    display: block;
  }
  & h4 {
    font-size: 24px;
    color: #ff4cb5;
    font-weight: 700;
    margin-right: 10px;
    @media (max-width: 767px) {
      font-size: 16px;
      margin: 0;
    }
  }
  & p {
    font-size: 14px;
    margin: 0;
    line-height: 20px;
    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
const RoadProgress = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftProgress = styled.div`
  width: 43%;
`;
const MiddleProgress = styled.div`
  width: 105px;
  justify-content: center;
  display: flex;
  position: relative;
  @media (max-width: 767px) {
    width: 90px;
  }
`;
const RightProgress = styled.div`
  width: 43%;
`;
const ProgressNode = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const ProgressItem = styled.span<any>`
  display: block;
  position: absolute;
  &:nth-child(odd):after {
    height: 10px;
    display: block;
    width: 48px;
    background: ${(props) => (props.progress ? "#ff4cb5" : "#b0b0b0")};
    border-right: 1px white;
    content: "";
    position: absolute;
    bottom: 0;
    @media (max-width: 767px) {
      width: 30px;
      left: 10px;
    }
  }
  &:nth-child(even):before {
    height: 10px;
    display: block;
    width: 48px;
    background: ${(props) => (props.progress ? "#ff4cb5" : "#b0b0b0")};
    border-right: 1px white;
    content: "";
    position: absolute;
    bottom: 0px;
    left: 56px;
    @media (max-width: 767px) {
      width: 30px;
      left: 44px;
    }
  }
`;

const RoadMap = () => {
  // const { dogePound } = useWeb3Contracts();

  const [progressbar/*, setProgressbar*/] = useState(100);

  // React.useEffect(() => {
  //   if (dogePound.maxDogeSupply && dogePound.totalSupply) {
  //     const percent =
  //       ((parseFloat(dogePound.totalSupply.toString()) / parseFloat(dogePound.maxDogeSupply.toString())) * 100) / 1.2;
  //     setProgressbar(percent);
  //   }
  // }, [dogePound]);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(0);
  const timestamp = 1626123600000;

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      const timee = timestamp - Date.now();
      const delta = Math.abs(timee);

      const _days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const _hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
      const _minutes = Math.floor((delta / 1000 / 60) % 60);
      const _seconds = Math.floor((delta / 1000) % 60);

      setDays(_days);
      setHours(_hours);
      setMinutes(_minutes);
      setSeconds(_seconds);
    }, 1000);
    setIntervalId(id);
  }, []);

  return (
    <Reveal effect="fadeInRight">
      <RoadBox>
        <Container>
          <ProgressArea className="mb-3 ">
            <div>
              <p>
                The Doge Pound is a full time project for us now and it will continue to be after the public sale. Below
                is what we're working towards in the short term. Each milestone unlocks when a certain % of doges have
                been minted. Future developments will be decided and voted upon by the community. Doge Pound public
                sale will take place on our website on Monday July 12th at 5 PM EST.
              </p>
              <p style={{ color: "#ff4cb5", textAlign: "center" }}>
                {`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`}
              </p>
            </div>
          </ProgressArea>
          <RoadProgress>
            <LeftProgress>
              <ProgressArea className="mb-3 mt-1">
                <h4>10%</h4>
                <p>Free Dogecoin will be airdropped to our early adopters and fanbase</p>
              </ProgressArea>

              <ProgressArea className="mb-3 pro100p">
                <h4>50%</h4>
                <p>
                  $20,000 donation fund will be established and with the help of the community we will decide on a
                  charity who is a good partner for our project. With the project we want to bring together a community
                  of doge and dog lovers 🐶
                </p>
              </ProgressArea>
              <ProgressArea className="mb-3 pro40p">
                <h4>90%</h4>
                <p>
                  Community grant fund of $30,000 is launched. Create, design, develop, or build something that the
                  community values (e.g. extra utility for the doges, additional art, memes, etc.) and receive funding
                  from The Doge Pound team. In addition to this 2.5% of the OpenSea fees will go into the community
                  grant forever! Building out the longevity and community is our #1 priority.
                </p>
              </ProgressArea>
            </LeftProgress>
            <MiddleProgress>
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={progressbar}
                  aria-valuemin={0}
                  aria-valuemax={5}
                  style={{ height: progressbar + "%" }}
                >
                  {/* <span className="sr-only">70% Complete</span> */}
                </div>
              </div>
              <ProgressNode>
                <ProgressItem
                  progress={progressbar >= 10 / 1.2 ? true : false}
                  style={{ height: 10 / 1.2 + "%" }}
                ></ProgressItem>
                <ProgressItem
                  progress={progressbar >= 25 / 1.2 ? true : false}
                  style={{ height: 25 / 1.2 + "%" }}
                ></ProgressItem>
                <ProgressItem
                  progress={progressbar >= 50 / 1.2 ? true : false}
                  style={{ height: 50 / 1.2 + "%" }}
                ></ProgressItem>
                <ProgressItem
                  progress={progressbar >= 70 / 1.2 ? true : false}
                  style={{ height: 70 / 1.2 + "%" }}
                ></ProgressItem>
                <ProgressItem
                  progress={progressbar >= 90 / 1.2 ? true : false}
                  style={{ height: 90 / 1.2 + "%" }}
                ></ProgressItem>
                <ProgressItem
                  progress={progressbar >= 100 / 1.2 ? true : false}
                  style={{ height: 100 / 1.2 + "%" }}
                ></ProgressItem>
              </ProgressNode>
            </MiddleProgress>
            <RightProgress>
              <ProgressArea className="mb-3 pro70p">
                <h4>25%</h4>
                <p>
                  We ramp up our Discord and social media management, which will include a pack of community managers
                  and moderators to bring our Doge community to the moon 🌙
                </p>
              </ProgressArea>
              <ProgressArea className="mb-3 pro150p">
                <h4>70%</h4>
                <p>
                  An exclusive The Doge Pound merch line will drop. This will be hats, Tshirts, and most importantly
                  apparel for your dogs! We already have several designs done and ready to go!
                </p>
              </ProgressArea>
              <ProgressArea className="mb-3 pro80p">
                <h4>100%</h4>
                <p>
                  We will establish a liquidity pool and seed it in order to help stabilize the price of the doge
                  NFTs/token. The plan is to launch this 2-3 days after launch and buy up a handful of doges at floor
                  price.
                </p>
              </ProgressArea>
            </RightProgress>
          </RoadProgress>
          <ProgressArea className="mt-3">
            <p>
              🚀🚀 Already in the works 🚀🚀
              <br></br>
              We will make Doges ready for MetaVerse / 3D. (We will leak some previews of this as we’ve secretly been
              working on this for a while)
              <br></br>
              <br></br>
              Companion NFT will be dropped. (Every doge lover that is holding a doge down the road will get a companion
              NFT for free)
              <br></br>
              <br></br>
              The rest of the fate of this project will be determined by YOU, the community! Together, we plan to make
              this an ultra strong, fun loving, community! Let’s kick some butt! 🐶
              <br></br>
              <br></br>
              Finally, there is a lot being discussed about potential partnerships and future developments of the
              project. Our focus for the time being is having a super smooth launch and delivering on everything listed
              above. We don’t think it is fair to over hype things for now that aren’t set in stone.
            </p>
          </ProgressArea>
        </Container>
      </RoadBox>
    </Reveal>
  );
};
export default RoadMap;
