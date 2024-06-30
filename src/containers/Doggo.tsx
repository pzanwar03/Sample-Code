import { useState, useEffect } from "react";
import styled from "styled-components";
import dogbg from "../assets/img/dogebg.jpg";
import handbg from "../assets/img/hand.gif";

const PetDog = styled.div`
  padding-top: 40px;
  & .saying {
    position: absolute;
    display: block;
    pointer-events: none;
    font-weight: 500;
  }
`;
const Doge = styled.div`
  border: 5px solid #ff4cb5;
  position: relative;
  background: url("${dogbg}");
  background-size: 100%;
  background-position: top left;
  width: 450px;
  height: 450px;
  margin: auto;
  cursor: none;
  overflow: hidden;
  @media (max-width: 480px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 420px) {
    width: 360px;
    height: 360px;
  }
  @media (max-width: 380px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 350px) {
    width: 300px;
    height: 300px;
  }
  &.down {
    background-position: bottom left;
  }
  &.up {
    background-position: center left;
  }
`;
const Hand = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  background: url("${handbg}");
  background-position: top left;
  pointer-events: none;
  @media (max-width: 480px) {
    width: 400px;
    height: 420px;
  }
  @media (max-width: 420px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 380px) {
    width: 150px;
    height: 160px;
  }
  &.down {
    background-position: center left;
  }
  &.up {
    background-position: bottom left;
  }
`;
const ClickCounter = styled.div`
  text-align: center;
  margin: 30px;
  font-size: 30px;
  font-weight: 500;
`;

const Doggo = () => {
  const [counter, setCounter] = useState(0);
  const [sizes, setSizes] = useState(["64", "48", "36", "30", "28"]);

  const colors = ["309", "3CC", "6F3", "3C3", "03F", "F0C", "C03", "FA4"];

  useEffect(() => {
    if (window.innerWidth < 767) {
      setSizes(["34", "28", "16", "10", "12"]);
    }
  }, []);

  const sayings = [
    "wow",
    "such hand",
    "so touch",
    "v nice pat",
    "y u touch me",
    "so soft",
    "hi human",
    "many pats",
    "v fluffy",
    "such sit",
    "very friednly",
    "o wow",
    "go away",
    "so fat",
    "much reward",
    "much loyalty",
    "good doge",
    "so scare",
    "so hungrie",
    "pls feed",
    "Wow",
    "treat pls",
    "wof wof",
    "Confuse",
  ];
  const chinLevel = 190;
  const dogItem: any = () => {
    return document.getElementById("dogee");
  };
  const handItem: any = () => {
    return document.getElementById("hand");
  };

  const addClassItem = (e: any) => {
    moveHand(e);
    say();

    if (getYpos(e) > chinLevel) {
      dogItem().classList.add("up");
      handItem().classList.add("down");
    } else {
      dogItem().classList.add("down");
      handItem().classList.add("up");
    }
  };
  const removeClassItem = () => {
    dogItem().classList.remove("up", "down");
    handItem().classList.remove("up", "down");
  };
  const moveChange = (e: any) => {
    moveHand(e);
    const ypos = getYpos(e);
    if (dogItem().classList.contains("down")) {
      if (ypos > chinLevel) {
        say();
        dogItem().classList.remove("down");
        dogItem().classList.add("up");
        handItem().classList.remove("up");
        handItem().classList.add("down");
      }
    } else if (dogItem().classList.contains("up")) {
      if (ypos <= chinLevel) {
        say();
        dogItem().classList.remove("up");
        dogItem().classList.add("down");
        handItem().classList.remove("down");
        handItem().classList.add("up");
      }
    }
  };
  const moveHand = (e: any) => {
    let t, l;
    t = getYpos(e) - handItem().clientHeight / 2;
    l = getXpos(e) - handItem().clientWidth / 2;
    handItem().style.top = t + "px";
    handItem().style.left = l + "px";
  };
  const getXpos = (e: any) => {
    const xpos = e.pageX - dogItem().offsetLeft;
    return xpos;
  };
  const getYpos = (e: any) => {
    var ypos = typeof e.pageY === "undefined" ? e.targetTouches[0].pageY : e.pageY - dogItem().offsetTop;
    if ("ontouchstart" in window || "onmsgesturechange" in window) {
      ypos -= 75;
    }
    return ypos;
  };
  const say = () => {
    setCounter(counter + 1);
    let num, cnum, snum, d, timestamp: any, t, l;
    num = Math.floor(Math.random() * sayings.length - 1 + 1);
    cnum = Math.floor(Math.random() * colors.length - 1 + 1);
    snum = Math.floor(Math.random() * sizes.length - 1 + 1);
    d = new Date();
    timestamp = d.getTime();
    t = Math.floor(Math.random() * (window.innerHeight - 300) + 200);
    l = Math.floor(Math.random() * (window.innerWidth - 300) + 200);

    const node = document.createElement("p");
    node.className = "saying " + timestamp;
    node.style.top = t + "px";
    node.style.left = l + "px";
    node.style.color = "#" + colors[cnum];
    node.style.fontSize = sizes[snum] + "px";
    const textnode = document.createTextNode(sayings[num]);
    node.appendChild(textnode);

    const petDog: any = document.getElementById("petDog");
    petDog.appendChild(node);

    window.setTimeout(function () {
      const textelem: any = document.getElementsByClassName(timestamp)[0];
      if (textelem) {
        textelem.style.display = "none";
      }
    }, 1000);
  };

  return (
    <PetDog id="petDog">
      <Doge
        id="dogee"
        onMouseDown={(e) => addClassItem(e)}
        onTouchStart={(e) => addClassItem(e)}
        onMouseUp={() => removeClassItem()}
        onTouchEnd={() => removeClassItem()}
        onMouseMove={(e: any) => moveChange(e)}
        onTouchMove={(e: any) => moveChange(e)}
      >
        <Hand id="hand"></Hand>
      </Doge>
      <ClickCounter>{counter}</ClickCounter>
    </PetDog>
  );
};
export default Doggo;
