import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { InputGroup, FormControl, Dropdown } from "react-bootstrap";
import ConnectBuyModal from "./buy-now-modal/index";

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
  "Original",
  "Red",
  "Gray",
  "Pink",
  "Teal",
  "Albino",
  "Tiger",
  "Girraffe",
  "Spot",
  "Wave",
  "Acid",
  "Camo",
  "Dogematians",
  "Shepherd",
  "Siberian",
  "Snow",
  "Alien",
  "Robot",
  "Slime",
  "Thunderbolt",
  "Kitsune",
  "Solid Gold",
];
const Eyes = [
  "Puppy Eyes",
  "Drowsy",
  "Much Wow",
  "Angry",
  "Doubting",
  "Oopsie",
  "Belittle",
  "Distracted",
  "Shocked",
  "Excited",
  "Intimidating",
  "Droopy Eyes",
  "Beauty",
  "Sleepy",
  "Focused",
  "Suspicious",
  "Eagle Eyes",
  "Happy",
  "Wink",
  "Demon Eyes",
  "Divine Eyes",
  "Robot Eyes",
  "Alien Eyes",
];
const Mouth = [
  "Smile",
  "Tongue Out",
  "Sad",
  "Teeth Showing",
  "Disappopinted",
  "Mocking",
  "Bleh...",
  "Sulking",
  "Mouth Open",
  "Yummy",
  "Grrrr",
  "Thirsty",
  "Awoo",
  "Big Grin",
  "Masculine",
  "Bubble Gum",
  "Whistle",
  "Bone",
  "Bandit",
  "Medical Mask",
  "Ball",
  "Iron Snout",
  "Sausage",
  "Lollipop",
  "Chompers",
  "Pacifier",
  "Saber Tooth",
  "Gasmask",
  "Golden Jaw",
  "Ninja Mask",
  "Respirator",
  "Alien",
  "Demon Mask",
];
const Clothing = [
  "Cape",
  "T-Shirt",
  "Dog Collar",
  "Bowtie",
  "Satchel",
  "Night Out",
  "Scarf",
  "Puppies Collar",
  "Fanny Pack",
  "Backpack",
  "Doge Medal",
  "Doge Chain",
  "Hoodie",
  "Polo Shirt",
  "Training Jacket",
  "Zipper Hoodie",
  "Rag Cape",
  "Vice Shirt",
  "Poncho",
  "Business Suit",
  "Sailor Uniform",
  "Royal Dress",
  "Flak Jacket",
  "Fur Jacket",
  "Parka",
  "Knight Armor",
  "Bomber Jacket",
  "Nurse Uniform",
  "Mage Robe",
  "Corsair",
  "Ninja Gi",
  "Superhero",
  "Neon Jacket",
  "Fire Cape",
  "Dragon Armor",
  "Devil Wing",
  "Flight Suit",
  "Sokol Space Suit",
  "Mercury Space Suit",
  "Dogepound Space Suit MK.I",
];
const Hats = [
  "Doge Cap",
  "Ribbon",
  "Beanie",
  "Detective Hat",
  "Baseball Cap",
  "Bowler Hat",
  "Party Hat",
  "Rockstar",
  "Highland Bonnet",
  "Puffy Hat",
  "Chef Hat",
  "Police Hat",
  "Firefighter Helmet",
  "Leaf",
  "Cooking Pot",
  "Tactical Helmet",
  "Pigtails",
  "Mushroom",
  "Apple of Archer",
  "Sombrero",
  "Cat Headband",
  "Marching Band Hat",
  "Side Cap",
  "Viking Helmet",
  "Nurse Hat",
  "Mage Hat",
  "Corsair Hat",
  "Spartan Helmet",
  "Vagabond Hair",
  "Ninja",
  "Slime Hat",
  "Mind Reader",
  "Alien Feeler",
  "Kitten",
  "Dragon Helmet",
  "Demon Horn",
  "Crystal Horn",
  "Crown",
];
const Eyewear = [
  "Reading Glasses",
  "Sport Glasses",
  "Safety Glasses",
  "Ski Goggles",
  "Superhero Mask",
  "Polarized",
  "Futuristic Glasses",
  "VR Goggles",
  "Scouter",
  "Hacker Goggles",
];
const Tail = [
  "Beaver",
  "Lizard",
  "Cat",
  "Fish",
  "Flame",
  "Flora",
  "Monkey",
  "Parasite",
  "Biomechanics",
  "Demon",
  "Diamond",
];
const Background = [
  "Red",
  "Purple",
  "Lime",
  "Blue",
  "Orange",
  "Beige",
  "Gray",
  "Red",
  "Yellow",
  "Big Bang",
  "Cavern",
  "Energy",
  "Moon",
  "VR",
];

const initialFilter = {
  Background: "Background",
  Tail: "Tail",
  Eyewear: "Eyewear",
  Hats: "Hats",
  Clothing: "Clothing",
  Mouth: "Mouth",
  Eyes: "Eyes",
  Fur: "Fur"
};

type FilterNavigationDropDownDrops = {
  filter: any;
  setFilter: Function;
  searchId: number | undefined;
  setSearchId: Function;
};

export default function FilterNavigationDropDownPuppy(props: FilterNavigationDropDownDrops) {
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
            <span>{filter.Tail}</span>
            <BsChevronDown />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Tail.map((e, index) => (
              <Dropdown.Item onClick={() => applyFilter("Tail", e)} key={index}>
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

      </div>
      <FilterBtn onClick={() => setFilter(initialFilter)}>RESET FILTERS</FilterBtn>
      <ConnectBuyModal show={buyDetailsShow} onHide={() => setBuyDetailsShow(false)} />
    </Filter>
  );
}
