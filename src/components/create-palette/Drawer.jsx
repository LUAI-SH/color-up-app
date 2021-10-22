import styled from "styled-components";
import { HslColorPicker } from "react-colorful";
import Button from "../reusable/Button";

const Drawer = (props) => {
  const { color, setColor, addColor, colors, setColors, addRandomColor } =
    props;

  return (
    <Wrapper>
      <Emoji>🎨</Emoji>
      <HslColorPicker color={color} onChange={setColor} />
      <GroupWrapper>
        <Button text="Add Color" onClick={addColor} />
        <Button text="Random Color" onClick={addRandomColor} />
        <Button
          text="Clear Palette"
          onClick={() => setColors([])}
          disabled={colors.length === 0}
          error
        />
      </GroupWrapper>
    </Wrapper>
  );
};

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 85%;
`;

const Emoji = styled.span`
  display: block;
  margin: 0;
  font-size: 5rem;
`;

const Wrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export default Drawer;
