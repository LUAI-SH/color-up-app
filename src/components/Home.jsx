import styled from "styled-components";
import { Link } from "react-router-dom";
import shortid from "shortid";

import MiniPalette from "../components/MiniPalette";

const Home = ({ palettes }) => {
  return (
    <Wrapper>
      {palettes.map((palette) => {
        return (
          <Link key={shortid.generate()} to={`/palette/${palette.id}`}>
            <MiniPalette palette={palette} />
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: space-around;
  gap: 5rem;
  background-color: red;

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }

  & > a:last-child {
    align-self: none;
  }

  & > a {
    transition: all 0.2s;
    border: 2px solid transparent;
  }

  & > a:hover {
    border: 2px solid hsl(0deg, 0%, 50%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.01);
  }
`;

export default Home;
