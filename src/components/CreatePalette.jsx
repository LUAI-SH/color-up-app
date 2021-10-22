import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { IconButton, Button } from "@mui/material";

import { hslToHex, hexToHSL } from "../helperFunction/colors";
import DraggableColorsBox from "./DraggableColorsBox";

import { Palette } from "../model/palette";

import SaveModal from "./create-palette/SaveModal";
import Drawer from "./create-palette/Drawer";

// Context
import { PalettesContext } from "../appContexts";
// Hooks
import useLocalStorageState from "./hooks/useLocalStorageState";

const CreatePalette = () => {
  const { palettesData, setPalettesData } = useContext(PalettesContext);
  const [colorsList, setColorsList] = useLocalStorageState("colorsList", []);
  let [colorFromPicker, setColorFromPicker] = useState({
    h: 180,
    s: 32,
    l: 36,
  });
  const [openModal, setOpenModal] = useState(false);
  // const [duplicateName, setDuplicateName] = useState(false);
  const [userInput, setUserInput] = useState("");
  const handleOpen = () => setOpenModal(true);

  useEffect(() => {
    if (colorsList.length === 0) {
      setColorsList(palettesData[0].colors.slice(0,8));
      return;
    }
  }, []);

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
  return (
    <Wrapper>
      <SaveModal
        input={userInput}
        setInput={setUserInput}
        open={openModal}
        onClose={() => setOpenModal(!openModal)}
        handleSave={handleSavePalette}
      />
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
        <Drawer
          color={colorFromPicker}
          setColor={setColorFromPicker}
          addColor={handleAddColor}
          colors={colorsList}
          setColors={setColorsList}
          addRandomColor={handleAddRandomColor}
        />
      </DrawerWrapper>
    </Wrapper>
  );
};

const DrawerWrapper = styled.section`
  background-color: hsl(0deg, 0%, 95%);
  height: 100%;
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
    grid-template-columns: 1fr 1fr 25%;
    grid-template-rows: 60px 1fr 1fr;
    grid-template-areas:
      "Bar Bar drawer"
      "colors colors drawer"
      "colors colors drawer";
  }
`;

export default CreatePalette;
