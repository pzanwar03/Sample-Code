import React from "react";
import { Container } from "react-bootstrap";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { BsPlus, BsDash } from "react-icons/bs";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";
// @ts-ignore
import Reveal from "react-reveal/Reveal";
// import { useWeb3Contracts } from "web3/contracts";
import { getEtherscanAddressUrl } from "web3/utils";

const CONTRACT_DOGE_POUND_ADDRESS = String(process.env.REACT_APP_CONTRACT_DOGE_POUND);

const Title = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 900;
  padding-top: 40px;
  @media (max-width: 767px) {
    line-height: 34px;
    padding-top: 20px;
    font-size: 24px;
  }
`;
const FaqArea = styled.div`
  border: 0.5px solid #ff4cb5;
  background-color: #121212;
  padding: 25px;
  border-radius: 5px;
  margin: 25px 0;
  @media (max-width: 767px) {
    padding: 15px;
  }
  & .MuiPaper-root {
    color: #fff;
    background-color: transparent;
    box-shadow: unset;
  }
  & .MuiAccordionSummary-content {
    margin: 5px 0 !important;
  }
  & .MuiAccordion-root.Mui-expanded {
    margin: 0;
  }
  & .MuiAccordionSummary-root.Mui-expanded {
    min-height: auto;
  }
  .MuiAccordionSummary-expandIcon.Mui-expanded {
    transform: rotate(0deg) !important;
  }
  @media (max-width: 767px) {
    & .makeStyles-heading-2 {
      font-size: 14px;
    }
    .MuiTypography-root {
      font-size: 13px !important;
    }
  }
  @media (max-width: 480px) {
    & .MuiTypography-root {
      width: 300px;
    }
  }
  @media (max-width: 380px) {
    & .MuiTypography-root {
      width: 250px;
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(25),
      flexShrink: 0,
      textTransform: "uppercase",
      fontWeight: 900,
    },
  })
);

const CustomScrollbar = styled(Scrollbars)`
  @media (max-width: 767px) {
    height: calc(100vh - 370px) !important;
  }
`;

const nftAttrs = ["Background", "Clothing", "Earring", "Eyes", "Eyewear", "Mouth", "Fur", "Hat"];

const Faq = () => {
  // const { dogePound } = useWeb3Contracts();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Reveal effect="fadeInRight">
      <Container>
        <Title>FAQ</Title>
        <FaqArea>
          <CustomScrollbar style={{ height: "calc(100vh - 410px)" }}>
            <div className={classes.root}>
              {/* <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary
                  expandIcon={expanded === "panel1" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>How will The Doge Pound be launched?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The Doge Pound will be launched on Monday, July 12th at 5 PM EST. Join our&nbsp;
                    <a href="https://discord.gg/6xEq5wxR6M" target="_blank" rel="noreferrer">
                      Discord
                    </a>
                    &nbsp;or follow us on&nbsp;
                    <a href="https://twitter.com/TheDogePoundNFT?s=20" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                    &nbsp;for updates. All Doge purchases will be made at&nbsp;
                    <a href="https://www.thedogepoundnft.com" target="_blank" rel="noreferrer">
                      www.thedogepoundnft.com
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
              <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>What is The Doge Pound?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    It is a collection of 10,000 unique Doge NFTs on Ethereum Blockchain. Each one is thoughtfully
                    designed, specifically picked, and impeccably shaped.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                <AccordionSummary
                  expandIcon={expanded === "panel5" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography className={classes.heading}>How much does each Doge cost?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>The price is 0.069 ETH per piece + gas fee, no bonded curve here.</Typography>
                </AccordionDetails>
              </Accordion> */}
              <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
                <AccordionSummary
                  expandIcon={expanded === "panel6" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography className={classes.heading}>How was The Doge Pound created?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Each Doge Pound has constructed algorithmically by mixing a variety of properties with different
                    possibilities in the following categories:
                    <br />
                    {nftAttrs.slice(0, -1).map((attr: string, index) => `${attr}, `)}
                    and {nftAttrs[nftAttrs.length - 1]}.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
                <AccordionSummary
                  expandIcon={expanded === "panel10" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel10bh-content"
                  id="panel10bh-header"
                >
                  <Typography className={classes.heading}>
                    What is the smart contract address of The Doge Pound?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Verified smart contract address:{" "}
                    <a href={getEtherscanAddressUrl(CONTRACT_DOGE_POUND_ADDRESS)} target="_blank" rel="noreferrer">
                      {CONTRACT_DOGE_POUND_ADDRESS}
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
                <AccordionSummary
                  expandIcon={expanded === "panel10" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel10bh-content"
                  id="panel10bh-header"
                >
                  <Typography className={classes.heading}>
                    What is the smart contract address of Puppy?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Verified smart contract address:{" "}
                    <a href={getEtherscanAddressUrl(CONTRACT_DOGE_POUND_ADDRESS)} target="_blank" rel="noreferrer">
                      {CONTRACT_DOGE_POUND_ADDRESS}
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
                <AccordionSummary
                  expandIcon={expanded === "panel2" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
                  aria-controls="panel12bh-content"
                  id="panel12bh-header"
                >
                  <Typography className={classes.heading}>How are the NFT's distributed?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Each Doge Pound token ID is assigned to an artwork image from the initial sequence with this
                    formula:
                    <p>(tokenId + startingIndex) % 10000 {"->"} Initial Sequence Index.</p>
                    Here is the finalized starting index: 5120
                  </Typography>
                </AccordionDetails>
              </Accordion> */}
            </div>
          </CustomScrollbar>
        </FaqArea>
      </Container>
    </Reveal>
  );
};
export default Faq;
