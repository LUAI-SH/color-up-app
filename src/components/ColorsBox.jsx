import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortid from "shortid";

//Context
import { PalettesContext } from "../appContexts";

// Components
import Color from "./Color";
import ColorsBoxNav from "./ColorsBoxNav";

const ColorsBox = () => {
  const appPalettes = useContext(PalettesContext);
  const [aussiePalette, setAussiePalette] = useState(null);
  const [sliderValue, setSliderValue] = useState(1);

  useEffect(() => {
    setAussiePalette(appPalettes.find((palette) => palette.emoji === "🇦🇺"));
  }, [aussiePalette, appPalettes]);

  console.log(sliderValue);

  return (
    <Wrapper>
      <ColorsBoxNav
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
      <Colors>
        {aussiePalette &&
          aussiePalette.colors.map((colorDetails) => {
            return (
              <Color
                key={shortid.generate()}
                colorName={colorDetails.name}
                hslColor={colorDetails.color.hsl}
                sliderValue={sliderValue}
              />
            );
          })}
      </Colors>
    </Wrapper>
  );
};

const Colors = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
`;

const Wrapper = styled.div`
  background-color: cyan; // Change later
  height: 90vh;
  cursor: pointer;
`;

export default ColorsBox;
