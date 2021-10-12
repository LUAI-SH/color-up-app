import styled from "styled-components";
import ColorsBox from "./ColorsBox";
import ColorsBoxNav from "./ColorsBoxNav";
//Context
import { SliderProvider } from "../appContexts";
import { ColorFormatProvider } from "../appContexts";

const Palette = ({ palette }) => {
  if (!palette) {
    return <h1>Loading.....</h1>;
  }

  return (
    <Wrapper>
      <ColorFormatProvider>
        <SliderProvider>
          <ColorsBoxNav />
          <ColorsBox colors={palette.colors} />
        </SliderProvider>
      </ColorFormatProvider>
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
