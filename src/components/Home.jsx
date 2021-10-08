import styled from "styled-components";
import {Link} from 'react-router-dom'
import MiniPalette from "../components/MiniPalette";


const Home = ({ palettes }) => {
  console.log(`palletes`, palettes);
  return (
    <Wrapper>
      {palettes.map((palette) => {
        return (<Link to={`/palette/${palette.id}`}>
            <MiniPalette palette={palette} />
        </Link>);
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5rem;
  background-color: red;
`;

export default Home;
