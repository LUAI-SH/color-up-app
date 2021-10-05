import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Color = ({ colorName, hslColor }) => {
  const [isCopied, setIsCopied] = useState(false);
  let {h,s,l} = hslColor
  const hslColorCSS = `hsl(${h}deg,${s}%,${l}%)`

  const handleOnCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={hslColorCSS} onCopy={handleOnCopy}>
      <Wrapper backgroundColor={hslColorCSS}>
        {isCopied && <Overlay backgroundColor={hslColorCSS} />}
        <Main>
          <Copy>{isCopied ? "copied" : "copy"}</Copy>
        </Main>
        <Footer>
          <ColorName>{colorName}</ColorName>
          <MoreButton>more</MoreButton>
        </Footer>
      </Wrapper>
    </CopyToClipboard>
  );
};

const MoreButton = styled.button`
  display: block;
  text-transform: uppercase;
  background: hsla(0, 0%, 100%, 0.3);
  border: none;
  color: hsl(0, 0%, 90%);
  font-size: 1.5rem;
  margin: 0;
  padding: 0.75rem;
`;

const Copy = styled.div`
  text-transform: uppercase;
  background: hsla(0, 0%, 100%, 0.3);
  border: 1px solid hsla(0, 0%, 90%, 0);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: hsl(0, 0%, 90%);
  font-size: ${(props) => props.theme.fontSize.xsmall};
  z-index: 50;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  z-index: 50;
`;

const ColorName = styled.span`
  display: block;
  text-align: start;
  text-transform: uppercase;
  padding-left: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
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
  background-color: ${(props) => props.backgroundColor }};
  width: 20%;
  height: 25%;
  display: flex;
  flex-direction: column;

  &:hover {
    & ${Main} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default Color;
