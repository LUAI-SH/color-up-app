import { useState, useEffect, useContext } from "react";
import { PalettesContext } from "../appContexts";

import styled from "styled-components";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { motion } from "framer-motion";
// import BackgroundImage from "./images/home-background.svg";
import { Alert, Snackbar } from "@mui/material";

import MiniPalette from "../components/MiniPalette";

const variants = {
  visible: {
    opacity: 1,
    x: "0vw",
    transition: {
      duration: 0.5,
      ease: "easeIn",
      type: "spring",
    },
  },
  initial: { opacity: 0, x: "-50vw" },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

const Home = () => {
  const { palettesData } = useContext(PalettesContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenSnackbar(true);
    }, 4000);
  }, []);

  if (!palettesData | (palettesData.length === 0)) {
    return <h1>Loading</h1>;
  }

  return (
    <Wrapper
      variants={variants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <NavBar>
        <MaxWidth>
          <Brand>Color Up</Brand>
          <Items>
            <Link to="/create-palette">Add Palette</Link>
          </Items>
        </MaxWidth>
      </NavBar>
      <MaxWidth>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={openSnackbar}
          message="Note archived"
        >
          <Alert
            severity="info"
            icon={false}
            onClose={() => {
              setOpenSnackbar(false);
            }}
            sx={{
              bgcolor: "hsl(178deg, 2.1%, 30.9%)",
              color: "white",
              boxShadow: 1,
              fontSize: 14,
              minWidth: 300,
            }}
          >
            This application still under development.
          </Alert>
        </Snackbar>

        <PaletteWrapper>
          {palettesData.map((palette) => {
            return (
              <Link key={shortid.generate()} to={`/palette/${palette.id}`}>
                <MiniPalette palette={palette} />
              </Link>
            );
          })}
        </PaletteWrapper>
        <Footer>
          {"© Developed By "}
          <a
            target="_blank"
            href="https://github.com/LUAI-SH/color-up-app"
            rel="noreferrer"
          >
            luai-sh
          </a>
        </Footer>
      </MaxWidth>
    </Wrapper>
  );
};

const H1 = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

const Footer = styled.footer`
  margin-top: 6rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: black;
  color: white;
  height: auto;
  font-size: 1.5rem;
  text-transform: uppercase;
  & a {
    color: hsl(198deg, 73.5%, 54.1%);
    text-decoration: underline;
  }
`;

const PaletteWrapper = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: space-between;
  gap: 5rem;

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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transform: scale(1.01);
  }
`;

const MaxWidth = styled.div`
  max-width: 1050px;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Items = styled.section`
  & a {
    color: blue;
    text-decoration: underline;
  }
`;
const Brand = styled.section`
  font-weight: 800;
  font-size: 3.5rem;
  text-transform: uppercase;
`;

const NavBar = styled.nav`
  background-color: hsl(0deg, 0%, 90%);
  height: 6rem;
  display: flex;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const Wrapper = styled(motion.main)`
  height: 100%;
  padding-bottom: 6rem;
  background: #efefbb; /* fallback for old browsers */
  background: linear-gradient(35deg, #f857a6, #ff5858);
`;

export default Home;
