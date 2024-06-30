import React from "react";
import { Container } from "react-bootstrap";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { BsPlus, BsDash } from "react-icons/bs";
import styled from "styled-components";
// import { useWeb3Contracts } from "web3/contracts";
import { getEtherscanAddressUrl } from "web3/utils";

const CONTRACT_DOGE_POUND_ADDRESS = String(process.env.REACT_APP_CONTRACT_DOGE_POUND);
const CONTRACT_PUPPY_POUND_ADDRESS = String(process.env.REACT_APP_CONTRACT_PUPPY_POUND);

const StyledContainer = styled(Container)`
  @media (min-width: 1400px) {
    min-width: 1300px;
  }
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`
const Title = styled.h1`
  font-size: 64px;
  text-transform: uppercase;
  font-weight: 900;
  padding-top: 50px;
  text-align: center;
  @media (max-width: 767px) {
    line-height: 34px;
    padding-top: 20px;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;
const FaqArea = styled.div`
  margin: 40px 0;
  @media (max-width: 767px) {
    margin: 0 0;
    padding: 0;
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
  & .MuiAccordionSummary-root {
    @media (max-width: 767px) {
      padding: 0 10px;
    }
  }
  & .MuiAccordionSummary-root.Mui-expanded {
    min-height: auto;
    @media (max-width: 767px) {
      padding: 0 10px;
    }
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

const nftAttrs = ["Background", "Clothing", "Earring", "Eyes", "Eyewear", "Mouth", "Fur", "Hat"];

const Faq = () => {
  // const { dogePound } = useWeb3Contracts();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledContainer id="faq">
      <Title>FAQ</Title>
      <FaqArea>
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
                Join our&nbsp;
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
                It is a collection of 10,000 unique Doge NFTs on Ethereum Blockchain. Each one is thoughtfully designed,
                specifically picked, and impeccably shaped.
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
          <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
            <AccordionSummary
              expandIcon={expanded === "panel7" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography className={classes.heading}>What is the smart contract address of The Doge Pound?</Typography>
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
          <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
            <AccordionSummary
              expandIcon={expanded === "panel8" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
            >
              <Typography className={classes.heading}>
                What is the smart contract address of Puppy?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Verified smart contract address:{" "}
                <a href={getEtherscanAddressUrl(CONTRACT_PUPPY_POUND_ADDRESS)} target="_blank" rel="noreferrer">
                  {CONTRACT_PUPPY_POUND_ADDRESS}
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
            <AccordionSummary
              expandIcon={expanded === "panel9" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel9bh-content"
              id="panel9bh-header"
            >
              <Typography className={classes.heading}>How are the NFT's distributed?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Each Doge Pound token ID is assigned to an artwork image from the initial sequence with this formula:
                <br></br>(tokenId + startingIndex) % 10000 {"->"} Initial Sequence Index.<br></br>
                Here is the finalized starting index: 5120
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
            <AccordionSummary
              expandIcon={expanded === "panel10" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel10bh-content"
              id="panel10bh-header"
            >
              <Typography className={classes.heading}>Who can mint a puppy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Every doggy holder gets to mint a puppy.
                1 doggy = 1 puppy.
                If you have 5 doggies, you can mint 5 puppies and so on.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
            <AccordionSummary
              expandIcon={expanded === "panel11" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel11bh-content"
              id="panel11bh-header"
            >
              <Typography className={classes.heading}>How much does minting a puppy cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Minting is free for all Doge Pound holders. You will only need to pay for the gas fee.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
            <AccordionSummary
              expandIcon={expanded === "panel12" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel12bh-content"
              id="panel12bh-header"
            >
              <Typography className={classes.heading}>Choose your own time of minting</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Make sure to mint when gas is low. This is going to save you some valuable ETH.
                Puppies are pre-assigned to crates, so you are not going to miss out when minting in your own time of choice! How cool is that?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
            <AccordionSummary
              expandIcon={expanded === "panel13" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel13bh-content"
              id="panel13bh-header"
            >
              <Typography className={classes.heading}>When will I be able to mint my puppy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You will be able to mint on Sept 1 at 7PM EST and any time after that, since minting will be open for an unlimited time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel14"} onChange={handleChange("panel14")}>
            <AccordionSummary
              expandIcon={expanded === "panel14" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel14bh-content"
              id="panel14bh-header"
            >
              <Typography className={classes.heading}>Where can I mint my puppy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Minting will be available on The Doge Pound website where you will be able to connect your wallet and mint your puppy.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel15"} onChange={handleChange("panel15")}>
            <AccordionSummary
              expandIcon={expanded === "panel15" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel15bh-content"
              id="panel15bh-header"
            >
              <Typography className={classes.heading}>Will my puppy be randomly assigned?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Every doggy has a pre-assigned "crate" based on his ID. For example: the owner of doggy #888 will be able to mint puppy #888.
                Each crate has a randomly assigned puppy. These are not generated while minting.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel16"} onChange={handleChange("panel16")}>
            <AccordionSummary
              expandIcon={expanded === "panel16" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel16bh-content"
              id="panel16bh-header"
            >
              <Typography className={classes.heading}>Do I need a rare doggy to get a rare puppy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The traits of your puppy will be completely random. If you own the most rare doggy it does not necessarily mean that you will also get the most rare puppy and vice versa.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel17"} onChange={handleChange("panel17")}>
            <AccordionSummary
              expandIcon={expanded === "panel17" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel17bh-content"
              id="panel17bh-header"
            >
              <Typography className={classes.heading}>Will Puppies be revealed instantly?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Puppies are waiting in crates. This means that you can decide yourself if you want to reveal your puppy or keep it sealed.
                When revealed a little fun animation will occur and your puppy's crate will open. This is also the minting process. Shortly after your puppy is revealed and minted, you will be able to see your puppy NFT on OpenSea.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel18"} onChange={handleChange("panel18")}>
            <AccordionSummary
              expandIcon={expanded === "panel18" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel18bh-content"
              id="panel18bh-header"
            >
              <Typography className={classes.heading}>If I own multiple doggies, can I open multiple crates at once?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can open multiple crates at once but only with a maximum of 20 at the same time depending on the number of Doge Pound NFTs you own.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel19"} onChange={handleChange("panel19")}>
            <AccordionSummary
              expandIcon={expanded === "panel19" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel19bh-content"
              id="panel19bh-header"
            >
              <Typography className={classes.heading}>Will the crates also be available on OpenSea?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once you open the crate you'll get a puppy NFT in your wallet which you can see on OpenSea.
                But it will only appear if you have opened the crate. Unboxed crates cannot be viewed on OpenSea or put for sale. Please note that the crates itself are not NFTs!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === "panel20"} onChange={handleChange("panel20")}>
            <AccordionSummary
              expandIcon={expanded === "panel20" ? <BsDash color="#fff" /> : <BsPlus color="#fff" />}
              aria-controls="panel20bh-content"
              id="panel20bh-header"
            >
              <Typography className={classes.heading}>How do I know if, when I buy a doggy, the crate is already opened or puppy NFT is minted?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can check which crates are opened by searching for the corresponding puppy # on the Doge Pound NFT.
                For example, if you wish to buy Doggy #6901, you can search for Puppy #6901 on The Doge Pound website and check if the crate has already been opened or not.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </FaqArea>
    </StyledContainer>
  );
};
export default Faq;
