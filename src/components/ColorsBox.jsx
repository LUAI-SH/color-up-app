import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortid from "shortid";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

//Context
import PalettesContext from "../palettesContext";

// Components
import Color from "./Color";

const ColorsBox = () => {
  const appPalettes = useContext(PalettesContext);
  const [aussiePalette, setAussiePalette] = useState(null);

  useEffect(() => {
    setAussiePalette(appPalettes.find((palette) => palette.emoji === "🇦🇺")); 
  }, [aussiePalette, appPalettes]);

  return (
    <Wrapper>
      <Slider />
      <Colors>
        {aussiePalette && aussiePalette.colors.map((colorDetails) => {
          return (
            <Color
              key={shortid.generate()}
              colorName={colorDetails.name}
              hslColor={colorDetails.color.hsl}
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
  background-color: cyan;
  height: 90vh;
  cursor: pointer;
`;

export default ColorsBox;
