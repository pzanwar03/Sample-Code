/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAsyncEffect } from "hooks/useAsyncEffect";
import { Navbar, NavDropdown, Nav, Container, Row, Col, Modal, Button, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import ConnectWalletModal from "./connect-wallet-modal/index";
import Popover from "@material-ui/core/Popover";
import logo from "../assets/img/logo.png";
import menuIcon from "assets/img/menu_white.png";
import { useWallet } from "wallets/wallet";
import { shortenAddr } from "web3/utils";
import { useWeb3Contracts } from "web3/contracts";
import { useUserState, useUserHandlers } from "../state/user/hooks";
import { useHashState, useHashHandlers } from "../state/transaction/hooks";

import { login, register, getDogeInfo, getPuppyInfo } from "../api";
import { checkTxHashStatus } from "utils/txhash";

import ArrowDown from "../assets/img/arrow_down.png";
import UserProfile from "../assets/img/user_profile.gif";
import IconHouse from "../assets/img/icon_house.png";
import IconSetting from "../assets/img/icon_setting.png";
import IconLogout from "../assets/img/icon_logout.png";

interface IHeaderProps {
  page: string;
}

const CommingSoonModal: React.FC<any> = (props) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title className="mb-4 pb-1 coust-title">Coming soon!</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

const NavArea = styled.div`
  & .navbar-toggler-icon {
    width: 34px;
    height: 34px;
    background-image: url(${menuIcon});
  }
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #f1f1f1 !important;
  text-transform: uppercase;
  margin-right: 35px;
  margin-top: 13px;
  position: relative;
  text-shadow: 0px 3px 14px #000;
  @media (max-width: 1200px) {
    margin-right: 15px;
    text-align: center;
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #ff4cb5 !important;
  }
  @media (max-width: 991px) {
    margin: 0;
    text-align: left;
    padding: 1rem 0rem;
  }
`;
const MenuSubLink = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  width: 170px;
  color: #f1f1f1 !important;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem !important;
  &.active {
    color: #ff4cb5 !important;
  }
  &:hover {
    background-color: #ff4cb5;
  }
`;
const MenuNavHashLink = styled(NavHashLink)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #f1f1f1 !important;
  text-transform: uppercase;
  margin-right: 35px;
  margin-top: 13px;
  position: relative;
  text-shadow: 0px 3px 14px #000;
  @media (max-width: 1200px) {
    margin-right: 15px;
    text-align: center;
  }
  &.active {
    color: #ff4cb5 !important;
  }
  @media (max-width: 991px) {
    margin: 0;
    text-align: left;
    padding: 1rem 0rem;
  }
`;
const LogoImg = styled.img`
  width: 205px;
  @media (max-width: 767px) {
    width: 150px;
    margin-top: 10px;
  }
`;
const NavI = styled(Nav)`
  margin: auto !important;
  @media (max-width: 991px) {
    margin: 0 !important;
    padding-top: 20px;
  }
  & .nav-link:last-child {
    margin-right: 0;
  }
  & a#collasible-nav-dropdown-active {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #ff4cb5 !important;
    text-transform: uppercase;
    margin-right: 35px !important;
    margin-top: 13px;
    position: relative;
    text-shadow: 0px 3px 14px #000;
    @media (max-width: 1200px) {
      margin-right: 15px;
      text-align: center;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #ff4cb5 !important;
    }
    @media (max-width: 991px) {
      margin: 0;
      text-align: left;
      padding: 1rem 0;
    }
  }
  & a#collasible-nav-dropdown {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #f1f1f1 !important;
    text-transform: uppercase;
    margin-right: 35px !important;
    margin-top: 13px;
    position: relative;
    text-shadow: 0px 3px 14px #000;
    @media (max-width: 1200px) {
      margin-right: 15px;
      text-align: center;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #ff4cb5 !important;
    }
    @media (max-width: 991px) {
      margin: 0;
      text-align: left;
      padding: 1rem 0;
    }
  }
  & .dropdown-menu {
    background-color: #171717;
    color: #fff;
    border: 1px solid #ff4cb5;
    border-radius: 7px;
    margin-top: 10px !important;
    & a {
      color: #fff;
    }
  }
`;
const NavLogo = styled(Link)`
  display: block;
  margin-top: 10px;
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
  }
`;
const ConnectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ConnectBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  background-color: transparent;
  border-radius: 24px;
  padding: 5px 20px;
  border: 1px solid #ff4cb5;
  width: 180px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #ff4cb5;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 1px solid #ff4cb5;
  }
  &:not(:disabled):not(.disabled):active {
    background-color: transparent;
    color: #fff;
    border: 1px solid #ff4cb5;
  }
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 5%);
  }
  @media (max-width: 991px) {
    margin-bottom: 25px;
  }
`;
const UserInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 991px) {
    position: absolute;
    right: 50px;
    top: -80px;
  }
`;
const TransactionContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-right: 5px;
`;
const TransactionDiv = styled.div`
  background-color: #ff4cb5;
  padding: 5px 20px;
  border-radius: 20px;
  @media (max-width: 767px) {
    & span {
      display: none;
    }
  }
`;
const ProfileIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  text-align: right;
  cursor: pointer;
`;
const ProfileImgContainer = styled.div`
  & img {
    width: 34px;
    height: 34px;
    border-radius: 17px;
  }
`;
const ArrowContainer = styled.div<{ extend: boolean }>`
  margin-left: 10px;
  & img {
    width: 12px;
    height: 5px;
    border: none;
    transition: all 0.2s;
    transform: ${({ extend }) => (extend ? "rotate(180deg)" : "none")};
  }
`;
const CustomPopover = styled(Popover)`
  & .MuiPaper-root {
    background-color: #171717;
    color: #fff;
    border: 1px solid #ffffff5f;
    border-radius: 7px;
    margin-top: 7px;
  }
`;
const ProfileContainer = styled.div`
  min-width: 310px;
`;
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-left: 25px;
  padding-bottom: 5px;
  & img {
    width: 40px;
    height: 40px;
    border: 1px solid #ff4cb5;
    border-radius: 20px;
  }
`;
const WalletContainer = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
`;
const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 25px;
  padding-bottom: 10px;
  cursor: pointer;
  color: #fff !important;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-color: #ff4cb5;
  }
  & img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;
const DisconnetButton = styled.div`
  border-color: #ff4cb5;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 25px;
  padding-bottom: 10px;
  cursor: pointer;
  color: #fff !important;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-color: #ff4cb5;
  }
  & img {
    width: 17px;
    height: 15px;
    margin-right: 10px;
  }
`;
const ProfileName = styled.div`
  margin-left: 30px;
  color: #ff4cb5;
  font-size: 14px;
  font-weight: 700;
`;

const Header: React.FC<IHeaderProps> = (params) => {
  const { page } = params;

  const accessToken = localStorage.getItem("access_token");

  const history = useHistory();
  const wallet = useWallet();
  const { dogePound, puppy } = useWeb3Contracts();
  const { id, userName, avatar } = useUserState();
  const { txHash } = useHashState();
  const { setTxHash } = useHashHandlers();

  const { setUserProfile, setUserDoge, setUserPuppy } = useUserHandlers();

  const [walletShow, setWalletShow] = useState<boolean>(false);
  const [commingShow, setCommingShow] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<any>(false);
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const hideDropDown = () => {
    const element: any = document.querySelectorAll(".dropdown-menu");
    element.forEach((e: any) => {
      e.classList.remove("show");
      e.click();
    });
  };

  const open = Boolean(anchorEl);
  const CustomPopoverId = open ? "simple-popover" : undefined;

  useEffect(() => {
    if (commingShow === false && history.location["pathname"] === "/gallery")
      history.push({
        pathname: "/",
      });
  }, [commingShow, history]);

  useAsyncEffect(async () => {
    if (txHash) {
      const interval = setInterval(async () => {
        try {
          const result = await checkTxHashStatus(txHash);
          if (result) {
            setTxHash("");
            clearInterval(interval);
          }
        } catch {
          setTxHash("");
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [txHash]);

  useEffect(() => {
    if (wallet.account) {
      if (!accessToken) {
        signWithWallet();
      } else {
        console.log("Will be added with backend");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.account, accessToken]);

  useEffect(() => {
    if (wallet.account) {
      dogePound.reload();
      puppy.reload();
    }
  }, [wallet.account]);

  useAsyncEffect(async () => {
    setUserDoge([]);
    if (dogePound.tokensOfOwner && dogePound.tokensOfOwner.length > 0 && id !== -1) {
      let ids = "";
      for (const id of dogePound.tokensOfOwner) {
        if (!ids) {
          ids = ids.concat(id);
        }
        ids = ids.concat(",", id);
      }
      getDogeInfo(ids, dogePound.tokensOfOwner.length).then((res: any) => {
        if (res && res.data) {
          setUserDoge(res.data.result);
        }
      });
    }
  }, [dogePound.tokensOfOwner, id]);

  useAsyncEffect(async () => {
    setUserPuppy([]);
    if (puppy.tokensOfOwner && puppy.tokensOfOwner.length > 0 && id !== -1) {
      let ids = "";
      for (const id of puppy.tokensOfOwner) {
        if (!ids) {
          ids = ids.concat(id);
        }
        ids = ids.concat(",", id);
      }
      getPuppyInfo(ids, puppy.tokensOfOwner.length).then((res: any) => {
        if (res && res.data) {
          setUserPuppy(res.data.result);
        }
      });
    }
  }, [puppy.tokensOfOwner, id]);

  const handleWalletConnect = (event: any) => {
    if (!wallet.account) {
      wallet.showWalletsModal();
    } else {
      signWithWallet();
    }
  };

  const openProfile = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const loginOrSign = (signature: any, deadline: any) => {
    login(wallet.account, signature, deadline).then((res: any) => {
      if (res && res.data) {
        localStorage.setItem("access_token", res.data.jwt);
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
      } else {
        register(wallet.account, signature, deadline).then((res: any) => {
          if (res && res.data) {
            localStorage.setItem("access_token", res.data.jwt);
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
          } else {
          }
        });
      }
    });
  };

  const signWithWallet = () => {
    const deadline = (new Date().getTime() / 1000 + 300).toFixed(0);
    if (wallet.account) {
      const msgParams = JSON.stringify({
        types: {
          EIP712Domain: [{ name: "name", type: "string" }],
          User: [
            { name: "Url", type: "string" },
            { name: "Address", type: "string" },
            { name: "Deadline", type: "uint256" },
          ],
        },
        primaryType: "User",
        domain: {
          name: "The Doge Pound",
        },
        message: {
          Url: "thedogepoundnft.com",
          Address: wallet.account,
          Deadline: deadline,
        },
      });

      wallet.library
        .send("eth_signTypedData_v4", [wallet.account, msgParams])
        .then((signature: any) => {
          loginOrSign(signature, deadline);
        })
        .catch((e: any) => {
          // for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
          if (e?.code !== 4001) {
          }
        });
    }
  };

  const profile = () => {
    return (
      <ProfileContainer>
        <AvatarContainer>
          <img src={avatar ? `${process.env.REACT_APP_BASE_URL}/${avatar}` : UserProfile} alt="PROFILE" />
          <ProfileName>
            {userName || "None"}
            <WalletContainer>{shortenAddr(wallet.account!, 7, 7)}</WalletContainer>
          </ProfileName>
        </AvatarContainer>
        <ProfileLink to="/house" onClick={handleClose}>
          <img src={IconHouse} alt="House" />
          My House
        </ProfileLink>
        <ProfileLink to="/setting" onClick={handleClose}>
          <img src={IconSetting} alt="Setting" />
          Settings
        </ProfileLink>
        <DisconnetButton
          onClick={() => {
            localStorage.removeItem("access_token");
            setUserProfile(0, null, null, null, null, null, null, null);
            handleClose();
            wallet.disconnect();
          }}
        >
          <img src={IconLogout} alt="Logout" />
          Logout
        </DisconnetButton>
      </ProfileContainer>
    );
  };

  return (
    <NavArea>
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={expanded}
        className="menu-area navbar-dark bg-darks"
        style={{ zIndex: 10 }}
      >
        <Container>
          <Row style={{ width: "100%" }} className="m-0">
            <Col lg={2} style={{ padding: 0 }}>
              <NavLogo to="/">
                <LogoImg src={logo} />
              </NavLogo>
            </Col>
            <Col lg={10} className="pt-0" style={{ display: "flex", padding: 0 }}>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => setExpanded(expanded ? false : "expanded")}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <NavI>
                  <NavDropdown title="dog house"
                    id={page === "/doge" || page === "/puppy" ? "collasible-nav-dropdown-active" : "collasible-nav-dropdown"}
                  >
                    <MenuSubLink
                      to="/doge"
                      className={"nav-link "}
                      onClick={() => {
                        setExpanded(false);
                        hideDropDown();
                      }}
                    >
                      Doggy
                    </MenuSubLink>
                    <MenuSubLink
                      to="/puppy"
                      className={"nav-link "}
                      onClick={() => {
                        setExpanded(false);
                        hideDropDown();
                        // setCommingShow(true);
                      }}
                    >
                      Puppy
                    </MenuSubLink>
                  </NavDropdown>

                  {/* <NavDropdown title="Provenance" id="collasible-nav-dropdown">
                    <MenuSubLink
                      to="/provenance"
                      className={"nav-link "}
                      onClick={() => {
                        hideDropDown();
                        setExpanded(false);
                        // setCommingShow(true);
                      }}
                    >
                      Doggy
                    </MenuSubLink>
                    <MenuSubLink
                      to="/provenance"
                      className={"nav-link "}
                      onClick={() => {
                        setExpanded(false);
                        hideDropDown();
                        // setCommingShow(true);
                      }}
                    >
                      Puppy
                    </MenuSubLink>
                  </NavDropdown> */}

                  <NavDropdown title="Utilities"
                    id={page === "/breeding" || page === "/feeding" || page === "/staking" || page === "/leader-board" ? "collasible-nav-dropdown-active" : "collasible-nav-dropdown"}
                  >
                    <MenuSubLink
                      to="/breeding/all"
                      className={"nav-link "}
                      onClick={() => {
                        setCommingShow(true);
                        setExpanded(false);
                        hideDropDown();
                      }}
                    >
                      Breeding
                    </MenuSubLink>
                    <MenuSubLink
                      to="/feeding"
                      className={"nav-link "}
                      onClick={() => {
                        setExpanded(false);
                        hideDropDown();
                        // setCommingShow(true);
                      }}
                    >
                      Feeding
                    </MenuSubLink>
                    {/* <MenuSubLink
                      to="/staking"
                      className={"nav-link "}
                      onClick={() => {
                        setExpanded(false);
                        hideDropDown();
                      }}
                    >
                      Staking
                    </MenuSubLink> */}
                    <MenuSubLink
                      to="/leader-board"
                      className={"nav-link "}
                      onClick={() => {
                        setExpanded(false);
                        hideDropDown();
                      }}
                    >
                      leader board
                    </MenuSubLink>
                  </NavDropdown>
                  <MenuNavHashLink
                    to="/app"
                    className={"nav-link " + (page === "/app" ? "active" : "")}
                    onClick={() => {
                      setExpanded(false);
                    }}
                  >
                    APP
                  </MenuNavHashLink>
                  {/* <MenuNavHashLink smooth to="/launch-pad" onClick={() => setExpanded(false)} activeClassName="active">
                    Launch Pad
                  </MenuNavHashLink> */}
                  <MenuLink href="https://store.thedogepoundnft.com/" onClick={() => setExpanded(false)} target="_blank">
                    merch
                  </MenuLink>
                  <MenuLink href="https://the-doge-pound.gitbook.io/doc/" onClick={() => setExpanded(false)} target="_blank">
                    Wiki
                  </MenuLink>
                </NavI>
                <ConnectContainer>
                  {(!wallet.account || !accessToken || id === -1) && (
                    <ConnectBtn onClick={handleWalletConnect}>
                      {!wallet.account ? "CONNECT WALLET" : "LOG IN"}
                    </ConnectBtn>
                  )}
                </ConnectContainer>
                <CustomPopover
                  id={CustomPopoverId}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {profile()}
                </CustomPopover>
              </Navbar.Collapse>
              {wallet.account && accessToken && id !== -1 ? (
                <UserInfoContainer>
                  {txHash && (
                    <TransactionContainer
                      onClick={() => {
                        window.open(`https://etherscan.io/tx/${txHash}`, "_blank");
                      }}
                    >
                      <TransactionDiv>
                        <Spinner animation="border" role="status" size={"sm"}></Spinner>
                        <span>{` Pending...`}</span>
                      </TransactionDiv>
                    </TransactionContainer>
                  )}
                  <ProfileIconContainer onClick={openProfile}>
                    <ProfileImgContainer>
                      <img
                        src={avatar ? `${process.env.REACT_APP_BASE_URL}/${avatar}` : UserProfile}
                        alt="User Profile"
                      />
                    </ProfileImgContainer>
                    <ArrowContainer extend={open}>
                      <img src={ArrowDown} alt="Arrow Down" />
                    </ArrowContainer>
                  </ProfileIconContainer>
                </UserInfoContainer>
              ) : null}
            </Col>
          </Row>
        </Container>
        <ConnectWalletModal show={walletShow} onHide={() => setWalletShow(false)} />
        <CommingSoonModal
          show={commingShow}
          onHide={() => {
            setCommingShow(false);
            history.push({
              pathname: "/",
            });
          }}
        />
      </Navbar>
    </NavArea>
  );
};

export default Header;
