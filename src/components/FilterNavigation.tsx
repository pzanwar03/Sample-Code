import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";
import ConnectBuyModal from "../components/buy-now-modal/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15)
    },
  })
);

const Filter = styled.div`
  background-color: #121212;
  padding: 40px 30px 30px;
  border-radius: 5px;
  position: sticky;
  top: 0;
  & .MuiPaper-root {
    color: #fff;
    background-color: transparent;
  }
  & .MuiPaper-elevation1 {
    box-shadow: 0px 2px 1px -1px rgb(255 255 255 / 20%), 0px 1px 1px 0px rgb(255 255 255 / 0%),
      0px 1px 3px 0px rgb(255 255 255 / 0%);
  }
  & .MuiFormControlLabel-labelPlacementStart {
    width: 100%;
    justify-content: space-between;
  }
  & .MuiFormGroup-root {
    flex-direction: row;
  }
  & .MuiRadio-root {
    color: rgba(255, 255, 255, 0.54);
  }
  & .MuiRadio-colorPrimary.Mui-checked {
    color: #ff4cb5;
  }
  & .MuiTypography-body1 {
    font-size: 13px;
    font-weight: 300;
    width: 100%;
  }
  & .MuiSvgIcon-root {
    width: 0.8em;
    height: 0.8em;
  }
  & label {
    margin-bottom: 1rem;
  }
  & .input-group-text {
    border-radius: 40px;
    padding: 5px 10px 5px 15px;
    background-color: transparent;
    border: 1px solid #4f4f4f;
  }
  & .form-control {
    color: #fff;
    background-color: transparent;
    border: 1px solid #4f4f4f;
    border-radius: 40px;
    font-size: 12px;
  }
  & .form-control:focus {
    box-shadow: 0 0 0 0 rgb(0 123 255 / 25%);
  }
`;

const FilterBtn = styled.button`
  padding: 5px 20px;
  border: 1.5px solid #ff4cb5;
  display: inline-flex;
  text-transform: uppercase;
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  border-radius: 40px;
  background: #0a0a0a;
  margin: 30px auto 0;
  display: block;
  width: 100%;
  &:hover {
    color: #ff4cb5;
  }
  @media (max-width: 767px) {
    padding: 12px 60px;
  }
`;

export default function FilterNavigation() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");
  const [buyDetailsShow, setBuyDetailsShow] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Filter>
      <InputGroup className="mb-4 ">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroupUsername2" placeholder="SEARCH BY ID" />
      </InputGroup>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Background</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <RadioGroup aria-label="background" name="background" value={value} onChange={handleChange}>
                <FormControlLabel
                  value="blue"
                  control={<Radio color="primary" />}
                  label="BLUE"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="purple"
                  control={<Radio color="primary" />}
                  label="PURPLE"
                  labelPlacement="start"
                />
                <FormControlLabel value="red" control={<Radio color="primary" />} label="RED" labelPlacement="start" />
                <FormControlLabel
                  value="yellow"
                  control={<Radio color="primary" />}
                  label="YELLOW"
                  labelPlacement="start"
                />
              </RadioGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Hat</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Clothing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className={classes.heading}>Earring</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className={classes.heading}>Eyes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className={classes.heading}>Mouth</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className={classes.heading}>Fur</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<BsChevronDown color="#fff" />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className={classes.heading}>Eyewear</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <FilterBtn>RESET FILTERS</FilterBtn>
      <ConnectBuyModal show={buyDetailsShow} onHide={() => setBuyDetailsShow(false)} />
    </Filter>
  );
}
