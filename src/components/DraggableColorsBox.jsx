import { useEffect, useState } from "react";
import shortid from "shortid";
import styled from "styled-components";

const DraggableColorsBox = ({ colorsList, setColorsList }) => {

  const handleDeleteColor = (hex) => {
    setColorsList(colorsList.filter((color) => color.color.hex !== hex));
  }

  if (colorsList.length === 0) {
    return <h1>Please Add color</h1>;
  }

  return (
    <Wrapper>
      {colorsList.map((color) => {
        return (
          <Color key={shortid.generate()} backgroundColor={color.color.hsl.css}>
            <button onClick={() => handleDeleteColor(color.color.hex)}>Delete</button>
          </Color>
        );
      })}
    </Wrapper>
  );
};

const Color = styled.li`
  height: 150px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: space-between;

  @media only screen and (min-width: 678px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default DraggableColorsBox;
