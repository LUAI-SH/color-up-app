import styled from "styled-components";
import MiniPalette from "../components/MiniPalette";

const Home = ({ palettes }) => {
  console.log(`palletes`, palettes);
  return (
    <Wrapper>
      {palettes.map((palette) => {
        return <MiniPalette palette={palette} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 5rem; // Change this
`;

export default Home;
