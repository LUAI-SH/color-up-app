import { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";

import Color from "./Color";
import { generateShadeOfColor, hexToHSL } from "../helperFunction/colors";

const ColorsBox = ({ palettesData }) => {
  const [isCopied, setIsCopied] = useState(false);

  const australiaPalette = palettesData.find(
    (palette) => palette.emoji === "🇦🇺"
  );

  return (
    <Wrapper>
      <Colors>
        {australiaPalette.colors.map((colorDetails) => {
          const { name, color: hexColor } = colorDetails;
          console.log(hexColor);
          const hslColor = hexToHSL(hexColor);
          /* console.log("HSL : ", hslColor); */
          return <Color colorName={colorDetails.name} hslColor={hslColor} />;
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
