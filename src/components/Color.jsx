import { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SliderContext } from "../appContexts";

import { hslToHex, hslToRgb } from "../helperFunction/colors";

const Color = ({ hslColor, colorFormat }) => {
  const { sliderValue } = useContext(SliderContext);

  const [isCopied, setIsCopied] = useState(false);
  const [colorFormatCss, setColorFormatCss] = useState("");
  let { h, s, l } = hslColor.values;

  const handleOnCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 800);
  };

  useEffect(() => {
    switch (colorFormat) {
      case "hex":
        setColorFormatCss(hslToHex(h, s, l * sliderValue));
        break;
      case "rgb":
        setColorFormatCss(hslToRgb(h, s, l * sliderValue));
        break;
      default:
        setColorFormatCss(`hsl(${h}deg, ${s}%, ${(l * sliderValue).toFixed(2)}%)`);
        break;
    }
  },[colorFormat, h, s, l, sliderValue]);

  return (
    <CopyToClipboard text={colorFormatCss} onCopy={handleOnCopy}>
      <Wrapper
        backgroundColor={`hsl(${h}deg,${s}%,${l * sliderValue}%)`}
        lightness={hslColor.values.l * sliderValue}
      >
        {isCopied && (
          <Overlay backgroundColor={`hsl(${h}deg,${s}%,${l * sliderValue}%)`} />
        )}
        <Main>
          <Copy>{isCopied ? "copied" : "copy"}</Copy>
        </Main>
        <Footer>
          <ColorMode>{colorFormatCss}</ColorMode>
          {/* <MoreButton>more</MoreButton> */}
        </Footer>
      </Wrapper>
    </CopyToClipboard>
  );
};

// const MoreButton = styled.button`
//   display: block;
//   text-transform: uppercase;
//   background: hsla(0, 0%, 100%, 0.3);
//   border: none;
//   font-size: 1.5rem;
//   margin: 0;
//   padding: 0.75rem;
//   color: inherit;
// `;

const Copy = styled.div`
  text-transform: uppercase;
  background: hsla(0, 0%, 100%, 0.3);
  border: 1px solid hsla(0, 0%, 90%, 0);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: ${(props) => props.theme.fontSize.xsmall};
  z-index: 50;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  z-index: 50;
`;

const ColorMode = styled.span`
  display: block;
  text-align: start;
  padding-left: 4px;
  font-size: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.xsmall};
`;

const Main = styled.main`
  flex-grow: 2;
  width: 100%;
  display: flex; /* for centering */
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s linear, opacity 0.2s linear; ;
`;

const overlayAnimation = keyframes`
 0% { transform: scale(0.8); opacity: 0; }
 80% {transform: scale(1.2); opacity: 1;}
 100% { transform: scale(1.4); opacity: 0;}
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${(props) => props.backgroundColor};
  animation-name: ${overlayAnimation};
  animation-duration: 0.3s;
  z-index: 10;
  opacity: 0;
  /* animation-iteration-count: infinite; */
`;

const Wrapper = styled.li`
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  min-width: 180px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: ${(props) =>
    props.lightness > 55 ? "hsl(0deg,0%,0%)" : "hsl(0deg,0%,100%)"};
  &:hover {
    & ${Main} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default Color;
