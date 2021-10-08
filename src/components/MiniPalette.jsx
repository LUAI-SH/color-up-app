// import { useContext } from "react";
import shortid from "shortid";
import styled from "styled-components";

const MiniPalette = ({ palette }) => {
  if (!palette) {
    return <h1>Loading</h1>;
  }

  const { colors, paletteName, emoji } = palette;

  return (
    <Wrapper>
      <ColorsWrapper>
        {colors.map((colorDetails) => {
          return (
            <Background
              key={shortid.generate()}
              color={colorDetails.color.hex}
            />
          );
        })}
      </ColorsWrapper>
      <Footer>
        <Text>{paletteName}</Text>
        <Emoji>{emoji}</Emoji>
      </Footer>
    </Wrapper>
  );
};

const Background = styled.li`
  background-color: ${(props) => props.color};
  display: inline-block;
  width: 50px;
  height: 40px;
  padding: 0;
  margin: 0;
`;

const Emoji = styled.span`
  font-size: 2.5rem;
`;
const Text = styled.span`
  font-size: 2rem;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ColorsWrapper = styled.ul`
  background-color: ${(props) => props.color};
  border: 2px solid;
  width: 254px;
  padding: 0;
  margin: 0 0 1rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: min-content;
  height: auto;
  background-color: hsl(0deg, 0%, 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid hsl(0deg, 0%, 50%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.01);
  }
`;

export default MiniPalette;
