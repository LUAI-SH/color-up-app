// import { useState, useEffect, useContext } from "react";
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
  width: 100%;
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;

  @media only screen and (min-width: 678px){
    grid-template-columns: 1fr 1fr 1fr;

  }

  @media only screen and (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

`;

export default ColorsBox;
