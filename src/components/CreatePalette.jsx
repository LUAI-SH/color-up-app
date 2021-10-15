import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import styled from "styled-components";
import { IconButton, Button } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { HslColorPicker } from "react-colorful";

import { hslToHex, hexToHSL } from "../helperFunction/colors";
import DraggableColorsBox from "./DraggableColorsBox";

import {Palette} from '../model/palette';

// Context
import { PalettesContext } from "../appContexts";
// Hooks
import useLocalStorageState from "./hooks/useLocalStorageState";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreatePalette = () => {
  const { palettesData, setPalettesData } = useContext(PalettesContext);
  const [colorsList, setColorsList] = useLocalStorageState("colorsList", []);
  let [colorFromPicker, setColorFromPicker] = useState({
    h: 180,
    s: 32,
    l: 36,
  });
  const [open, setOpen] = useState(false);
  const [duplicateName, setDuplicateName] = useState(false);
  const [userInput, setUserInput] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (colorsList.length !== 0) {
      return;
    }
    if (palettesData.length !== 0) {
      setColorsList(palettesData[0].colors);
      return;
    }
  }, [palettesData, colorsList]);

  const handleSavePalette = () => {
    const duplication = palettesData.filter(
      (palette) => palette.paletteName === userInput
    );
    if (duplication.length === 0) {
     const newPalette = new Palette(userInput, colorsList);
     setPalettesData([...palettesData, newPalette]);
    }
  };

  const handleAddColor = () => {
    const { h, s, l } = colorFromPicker;
    const hexValue = hslToHex(h, s, l);
    const colorExist = colorsList.filter(
      (color) => color.color.hex === hexValue
    );
    if ((colorExist.length > 0) | (colorsList.length >= 20)) {
      return;
    }

    const newColor = {
      name: "",
      color: {
        hex: hexValue,
        hsl: { css: `hsl(${h}deg, ${s}%, ${l}%)`, values: { h, s, l } },
      },
    };
    setColorsList([...colorsList, newColor]);
  };

  const handleAddRandomColor = () => {
    const hexRandomColor = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const { h, s, l } = hexToHSL(hexRandomColor);
    const colorExist = colorsList.filter(
      (color) => color.color.hex === hexRandomColor
    );
    if ((colorExist.length > 0) | (colorsList.length >= 20)) {
      return;
    }
    const newRandomColor = {
      name: "",
      color: {
        hex: hexRandomColor,
        hsl: { css: `hsl(${h}deg, ${s}%, ${l}%)`, values: { h, s, l } },
      },
    };
    setColorsList([...colorsList, newRandomColor]);
  };

  if (palettesData.length === 0) {
    return <h1>Loading.....</h1>;
  }

  console.log("Re Rendered");
  // return <p>dfvfdsvfdv</p>;
  return (
    <Wrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSavePalette}
            disabled={userInput === "" ? true : false}
          >
            Save
          </Button>
        </Box>
      </Modal>
      <Bar>
        <Link to="/">
          <ArrowBackIosNewIcon fontSize="large" />
        </Link>
        <p>{colorsList.length} / 20</p>
        <Button
          variant="contained"
          disabled={colorsList.length === 0}
          onClick={handleOpen}
        >
          Save
        </Button>
      </Bar>
      <Colors>
        <DraggableColorsBox
          colorsList={colorsList}
          setColorsList={setColorsList}
        />
      </Colors>
      <DrawerWrapper>
        <Drawer>
          <h2>🎨</h2>
          <HslColorPicker
            color={colorFromPicker}
            onChange={setColorFromPicker}
          />
          <Button variant="contained" onClick={handleAddColor}>
            Add Color
          </Button>
          <div>
            <Button
              variant="contained"
              onClick={() => setColorsList([])}
              disabled={colorsList.length === 0}
            >
              Clear Palette
            </Button>
            <Button variant="contained" onClick={handleAddRandomColor}>
              Random Color
            </Button>
          </div>
        </Drawer>
      </DrawerWrapper>
    </Wrapper>
  );
};

const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DrawerWrapper = styled.section`
  background-color: hsl(0deg, 0%, 95%);
  grid-area: drawer;
  order: 2;
`;

const Bar = styled.section`
  background-color: hsl(0deg, 0%, 95%);
  grid-area: Bar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  @media only screen and (max-width: 677px) {
    height: 60px;
  }
`;

const Colors = styled.section`
  grid-area: colors;
`;

const Wrapper = styled.div`
  background-color: hsl(0deg, 0%, 80%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1px;

  @media only screen and (min-width: 678px) {
    display: grid;
    grid-template-columns: 1fr 1fr 300px;
    grid-template-rows: 60px 1fr 1fr;
    grid-template-areas:
      "Bar Bar drawer"
      "colors colors drawer"
      "colors colors drawer";
  }
`;

export default CreatePalette;
