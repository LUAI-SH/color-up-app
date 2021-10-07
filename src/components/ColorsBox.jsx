import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortid from "shortid";

// Components
import Color from "./Color";

const ColorsBox = ({ colors , sliderValue, colorFormat }) => {
  return (
    <Colors>
      {colors &&
        colors.map((colorDetails) => {
          return (
            <Color
              key={shortid.generate()}
              colorName={colorDetails.name}
              hslColor={colorDetails.color.hsl}
              sliderValue={sliderValue}
              colorFormat={colorFormat}
            />
          );
        })}
    </Colors>
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

export default ColorsBox;
