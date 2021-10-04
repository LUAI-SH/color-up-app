import { useState } from "react";
import styled from "styled-components";
import shortid from 'shortid';

import Color from "./Color";

const ColorsBox = ({ palettesData }) => {
  const [isCopied, setIsCopied] = useState(false)

  const australiaPalette = palettesData.find(
    (palette) => palette.emoji === "🇦🇺"
  );
  return (
    <Wrapper>
      <Colors>
        {australiaPalette.colors.map((colorDetails) => {
          return (
              <Color colorName={colorDetails.name} color={colorDetails.color} />
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
