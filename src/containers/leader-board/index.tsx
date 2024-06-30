import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { getRank } from "api";
// import moreImage from "../../assets/img/app/moreImage.png";
import wannaImg from "../../assets/img/app/wannaImg.png";
import TopOneImg from "../../assets/img/app/topOne.png";
import UserImg from "../../assets/img/user_profile.gif";

const Title = styled.h2`
  font-size: 44px;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 991px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;
const Section = styled.div`
  font-family: "Roboto";
`;
const MutchMore = styled.div`
  padding: 80px 0;
  background-color: #030303;
  @media (max-width: 991px) {
    padding-bottom: 0;
  }
`;
const CommingSoon = styled.div`
  background-color: #030303;
  padding: 60px 0 80px;
  @media (max-width: 991px) {
    padding-bottom: 30px;
  }
`;
const DogeImg = styled.div`
  @media (max-width: 767px) {
    margin: 25px -38px -30px;
    border-radius: 43px;
  }
`;
const WannaI = styled.img`
  position: absolute;
  bottom: 0;
  width: 550px;
  right: 18px;
  @media (max-width: 991px) {
    position: relative;
    width: 100%;
    right: 0;
    border-radius: 34px;
  }
`;
const WannaArea = styled.div`
  background-color: #d8629d;
  border-radius: 37px;
  padding: 40px 40px 30px;
  position: relative;
  margin-top: 100px;
  @media (max-width: 991px) {
    margin-top: 20px;
    text-align: center;
  }
  & a {
    background: #212121;
    border-radius: 10px;
    display: inline-block;
    padding: 15px 30px;
    font-size: 13px;
    color: #fff;
    width: 200px;
    text-align: center;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const TopOneUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 45px;
  margin-right: 45px;
  & .topOne {
    width: 95px;
    height: 75px;
  }
  & .avatar {
    width: 216px;
    height: 216px;
    border: 7px solid rgba(255, 255, 255, 0.06);
    border-radius: 108px;
    box-shadow: 0px 0px 15.4699px 17.1888px rgba(0, 0, 0, 0.05);
  }
  & .points {
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    line-height: 50px;
    text-align: center;
    color: white;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  & .pointsLabel {
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 33px;
    text-align: center;
  }
  @media (max-width: 767px) {
    margin-left: 10px;
    margin-right: 10px;
    & .topOne {
      width: 40px;
      height: 42px;
    }
    & .avatar {
      width: 120px;
      height: 120px;
      border-radius: 60px;
    }
    & .points {
      font-size: 45px;
      line-height: 30px;
      margin-top: 10px;
    }
    & .pointsLabel {
      font-size: 20px;
      line-height: 33px;
    }
  }
`;
const TopTwoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .top {
    width: 38px;
    height: 38px;
    border-radius: 19px;
    background: #C0C0C0;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    line-height: 35px;
    margin-bottom: 5px;
  }
  & .topRight {
    width: 38px;
    height: 38px;
    border-radius: 19px;
    background: #CD7F32;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    line-height: 35px;
    margin-bottom: 5px;
  }
  & .avatar {
    width: 130px;
    height: 130px;
    border: 6px solid rgba(255, 255, 255, 0.06);
    border-radius: 65px;
    box-shadow: 0px 0px 15.4699px 17.1888px rgba(0, 0, 0, 0.05);
    margin-bottom: 5px;
  }
  & .points {
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
  }
  & .pointsLabel {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
  }
  @media (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
    & .top {
      width: 30px;
      height: 30px;
      font-size: 17px;
    }
    & .topRight {
      width: 30px;
      height: 30px;
      font-size: 17px;
    }
    & .avatar {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
    & .points {
      font-size: 38px;
      line-height: 30px;
      margin-top: 10px;
    }
    & .pointsLabel {
      font-size: 15px;
      line-height: 33px;
    }
  }
`;
const UserCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserCard = styled.div`
  width: 626px;
  height: 78px;
  background: #353535;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1.2fr 2fr 5fr 1fr;
  grid-row-gap: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  & .num {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: white;
    margin-left: 24px;
  }
  & .avatar {
    width: 60px;
    height: 60px;
    border: 3px solid #FFFFFF;
    border-radius: 30px;
    box-sizing: border-box;
  }
  & .name {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;
    color: white;
  }
  & .point {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #E6973D;
    float: right;
    margin-right: 20px;
  }
  @media (max-width: 767px) {
    width: 95%;
    height: 65px;
    grid-template-columns: 1.8fr 2fr 5fr 1fr;
    & .avatar {
      width: 52px;
      height: 52px;
      border-radius: 26px;
    }
    & .name {
      font-size: 21px;
    }
    & .point {
      font-size: 25px;
    }
  }
`;
const LoadMore = styled.div`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 700;
  padding: 13px 60px;
  background-color: #FF4CB5;
  border-radius: 10px;
  cursor: pointer;
`;

type RankType = {
  user_name: string;
  user_pic: string;
  value: number;
};

const LeaderBoard = () => {
  const [ranks, setRanks] = useState<RankType[]>([]);
  const [dataCount, setDataCount] = useState<number>(9);

  useEffect(() => {
    const fetch = () => {
      try {
        getRank().then((res) => {
          if (res.result === true) {
            // console.log('Rank data', res.rank);
            setRanks(res.rank);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
    const interval = setInterval(async () => {
      fetch();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Header />
      <MutchMore>
        <Container>
          <Title className="text-center">TREASURE HUNT LEADER BOARD</Title>
        </Container>
        {
          ranks.length &&
          <TopWrapper>
            {
              ranks.length >= 2 &&
              <TopTwoUser>
                <div className="top">
                  <span>2</span>
                </div>
                <img src={ranks[1].user_pic ?? UserImg} alt="top1" className="avatar" />
                <span className="points">{ranks[1].value}</span>
                <span className="pointsLabel">{ranks[1].user_name}</span>
              </TopTwoUser>
            }
            <TopOneUser>
              <img src={TopOneImg} alt="top1" className="topOne" />
              <img src={ranks[0].user_pic ?? UserImg} alt="top1" className="avatar" />
              <span className="points">{ranks[0].value}</span>
              <span className="pointsLabel">{ranks[0].user_name}</span>
            </TopOneUser>
            {
              ranks.length >= 3 &&
              <TopTwoUser>
                <div className="topRight">
                  <span>3</span>
                </div>
                <img src={ranks[2].user_pic ?? UserImg} alt="top1" className="avatar" />
                <span className="points">{ranks[2].value}</span>
                <span className="pointsLabel">{ranks[2].user_name}</span>
              </TopTwoUser>
            }
          </TopWrapper>
        }
        {
          ranks.length > 3 &&
          <UserCardWrapper>
            {
              // eslint-disable-next-line array-callback-return
              ranks.slice(3).map((rank, index) => {
                if (index < dataCount) {
                  return (
                    <UserCard key={`user-card-${index}`}>
                      <span className="num">{index + 4}</span>
                      <img src={rank?.user_pic ?? UserImg} alt="user" className="avatar" />
                      <span className="name">{rank?.user_name}</span>
                      <div>
                        <span className="point">{rank?.value}</span>
                      </div>
                    </UserCard>
                  )
                }
              })
            }
            {
              ranks.length > dataCount + 1 &&
              <LoadMore
                onClick={() => setDataCount(dataCount + 5)}
              >
                Load more
              </LoadMore>
            }
          </UserCardWrapper>
        }
      </MutchMore>
      <CommingSoon>
        <Container>
          <WannaArea>
            <Title>Wanna stay in the know</Title>
            <p>Come join one of the best and friendliest Discord channels in the NFT space.</p>
            <a href="https://discord.com/invite/6xEq5wxR6M" target="_blank" rel="noreferrer">
              JOIN DISCORD
            </a>
            <DogeImg>
              <WannaI src={wannaImg} alt="" />
            </DogeImg>
          </WannaArea>
        </Container>
      </CommingSoon>
    </Section>
  );
};
export default LeaderBoard;
