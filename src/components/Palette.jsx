import { useState } from "react";
import styled from "styled-components";
import ColorsBox from "./ColorsBox";
import ColorsBoxNav from "./ColorsBoxNav";
//Context
// import { PalettesContext } from "../appContexts";

const Palette = ({ palette }) => {
  const [sliderValue, setSliderValue] = useState(1);
  const [colorFormat, setColorFormat] = useState("hsl");
  console.log(`palette`, palette);

  if (!palette) {
    return <h1>Loading.....</h1>;
  }

  return (
    <Wrapper>
      <ColorsBoxNav
        sliderValue={sliderValue}
        colorFormat={colorFormat}
        setSliderValue={setSliderValue}
        setColorFormat={setColorFormat}
      />
      <ColorsBox
        colors={palette.colors}
        sliderValue={sliderValue}
        colorFormat={colorFormat}
      />
      <Footer>
        <span>{palette && palette.paletteName}</span>
        <Emoji>{palette && palette.emoji}</Emoji>
      </Footer>
    </Wrapper>
  );
};

const Emoji = styled.span`
  margin: 0 1rem;
  font-size: 2.5rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  background-color: hsl(0deg, 0%, 90%); // Change later
  display: flex;
  flex-direction: column;
`;

export default Palette;
