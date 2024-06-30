import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { InputGroup, FormControl, Dropdown } from "react-bootstrap";
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
  border-radius: 10px;
  position: sticky;
  margin-top: 50px;
  top: 0;
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

const StyledDropDown = styled(Dropdown)`
  & button {
    width: 100%;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    text-transform: uppercase;
  }
  & button::after {
    display: none;
  }
  & .dropdown-menu {
    width: 100%;
    background: #27282a;
    max-height: 180px;
    overflow-y: scroll;
  }
  & .dropdown-menu::-webkit-scrollbar {
    display: none;
  }
  & .dropdown-item {
    color: #fff !important;
    font-size: 13px;
  }
  & .dropdown-item:active {
    background: #4f4f4f;
  }
  & .dropdown-item:focus {
    background: #4f4f4f;
  }
  & .dropdown-item:hover {
    background: #4f4f4f;
  }
`;

const StyledFormControl = styled(FormControl)`
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Fur = [
  "Blue",
  "Tiger",
  "Gray",
  "Green",
  "Original",
  "Cyborg",
  "Iceberg",
  "Wave",
  "Snow",
  "Black",
  "Teal",
  "Pink",
  "Acid",
  "Zebra",
  "Giraffe",
  "Spot",
  "Coffee",
  "Chocolate",
  "Slime",
  "Alien",
  "Gold",
];
const Eyes = [
  "Covered",
  "Skeptical",
  "Tired",
  "Robot",
  "Rolling Eyes",
  "Cyborg",
  "Puppy Eyes",
  "Crosseyed",
  "Paranoid",
  "Bloodshot",
  "Focused",
  "Eye Shadow",
  "Crying",
  "Angry",
  "Beauty",
  "Long Lashes",
  "Scar",
  "Suspicious",
  "Demon Eyes",
  "Sad",
  "Grumpy",
  "Eyelashes",
  "Alien",
];
const Mouth = [
  "Beauty",
  "Teeth Showing",
  "Pizza",
  "Mouth Open",
  "Tongue Out",
  "Underbit",
  "Double Chin",
  "Whistle",
  "Smile",
  "Original",
  "Iron Jaw",
  "Cavities",
  "Beard",
  "Party Horn",
  "Pierced",
  "Mustache",
  "Muzzle",
  "Grrrrr",
  "Stick",
  "Smoking",
  "Pipe",
  "Masculine",
  "Cigar",
  "Bone",
  "Frisbee",
  "Clown",
  "Golden Jaw",
  "Alien",
  "Demon Mask",
  "Gasmask",
  "Venomous",
  "Mask",
  "Cyborg",
  "Sabertooth",
];
const Clothing = [
  "Iron Collar",
  "Adventurer Cape",
  "General Jacket",
  "Hazard Suit",
  "Overlord Cape",
  "Life Vest",
  "Adventurer Jacket",
  "V-Neck",
  "Rag Cape",
  "Bandana",
  "Varsity Jacket",
  "Gold Collar",
  "Sphere Necklace",
  "Royal Cape",
  "Kimono",
  "Striped Tie",
  "Gakuran",
  "Business Casual",
  "Tropical Shirt",
  "Dog Collar",
  "Party Suit",
  "Scarf",
  "ETH Collar",
  "Rider Jacket",
  "Drifter Jacket",
  "Scientist Suit",
  "Sweater",
  "Tie",
  "Hoodie",
  "Padded Vest",
  "Winter Jacket",
  "Scarf & T-shirt",
  "K9 Vest",
  "Stonks",
  "Mechanized Collar",
  "Soviet Spacesuit",
  "Apollo Spacesuit",
  "Samurai Armor",
  "Padded Armor",
  "Cape & T-shirt",
  "Fur Jacket",
  "DogeX Spacesuit",
];
const Hats = [
  "Stuntman Helmet",
  "Popstar Hair",
  "Plumber Hat",
  "Bucket Hat",
  "Nerdy Hair",
  "Tophat",
  "Newsboy",
  "Slouch Hat",
  "Army Hat",
  "Spike Hair",
  "Sleeper Cap",
  "Pickelhaube",
  "Flatcap",
  "Afro Hair",
  "Miner Helmet",
  "Emo Hair",
  "Fox Mask",
  "Unicorn Horn",
  "Doge Cap",
  "Sailor Hat",
  "Helmet",
  "Turban",
  "Trapper Hat",
  "Propeller Hat",
  "Straw Hat",
  "Alpine Hat",
  "Halo",
  "Mohawk Hair",
  "Sakkat",
  "Beret",
  "Baseball Cap",
  "Wizard Hat",
  "Trench Helmet",
  "Ashigaru Hat",
  "Crown",
  "Cowboy Hat",
  "Demon Horn",
  "Samurai Helmet",
];
const Eyewear = [
  "Polarized",
  "Futuristic",
  "3D Glasses",
  "Sunglasses",
  "Teashades",
  "Retro Glasses",
  "Eyepatch",
  "Cyclops Sunglasses",
  "ScopeShot",
  "Monocle",
];
const Earring = [
  "Silver Piercing",
  "Ruby Earring",
  "Gold Earring",
  "Spike Piercing",
  "Tube Piercing",
  "Triple Ruby Earring",
  "Triple Spike Earring",
  "Diamond Earring",
  "Triple Gold Piercing",
  "Triple Gold Earring",
];
const Background = [
  "Gray",
  "Lime",
  "Green",
  "Beige",
  "Orange",
  "Purple",
  "Blue",
  "Red",
  "Spiral",
  "Firestorm",
  "Wind",
  "VR",
  "Rays",
];
const Gender = ["Doge", "Doggo"];
const Puppy = ["Minted", "Not Minted"];

const initialFilter = {
  Background: "Background",
  Earring: "Earring",
  Eyewear: "Eyewear",
  Hats: "Hats",
  Clothing: "Clothing",
  Mouth: "Mouth",
  Eyes: "Eyes",
  Fur: "Fur",
  Gender: "Gender",
  Puppy: "Puppy"
};

type FilterNavigationDropDownDrops = {
  filter: any;
  setFilter: Function;
  searchId: number | undefined;
  setSearchId: Function;
};

export default function FilterNavigationDropDown(props: FilterNavigationDropDownDrops) {
  const classes = useStyles();

  const { filter, setFilter, searchId, setSearchId } = props;

  const [buyDetailsShow, setBuyDetailsShow] = React.useState<boolean>(false);

  const applyFilter = (type: string, value: string) => {
    const temp = { ...filter };
    temp[type] = value;
    setFilter(temp);
  };

  return (
    <Filter>
      <InputGroup className="mb-4 ">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <StyledFormControl
          id="inlineFormInputGroupUsername2"
          placeholder="SEARCH BY ID"
          type="number"
          value={searchId}
          onChange={(e: any) => setSearchId(e.target.value)}
        />
      </InputGroup>
      <div className={classes.root}>
        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Background}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Background.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Background", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Earring}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Earring.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Earring", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Eyewear}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Eyewear.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Eyewear", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Hats}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Hats.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Hats", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Clothing}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Clothing.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Clothing", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Mouth}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Mouth.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Mouth", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Eyes}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Eyes.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Eyes", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Fur}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Fur.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Fur", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Gender}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Gender.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Gender", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>

        <StyledDropDown>
          <Dropdown.Toggle id="dropdown-basic">
            <span>{filter.Puppy}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Puppy.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Puppy", e)} key={index}>
                {e}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledDropDown>
      </div>
      <FilterBtn onClick={() => setFilter(initialFilter)}>RESET FILTERS</FilterBtn>
      <ConnectBuyModal show={buyDetailsShow} onHide={() => setBuyDetailsShow(false)} />
    </Filter>
  );
}
