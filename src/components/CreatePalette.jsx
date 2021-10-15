import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton, Button } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { HslColorPicker } from "react-colorful";

import { hslToHex, hexToHSL } from "../helperFunction/colors";
import DraggableColorsBox from "./DraggableColorsBox";

// Context
import { PalettesContext } from "../appContexts";

const CreatePalette = () => {
  const { palettesData } = useContext(PalettesContext);
  const [colorsList, setColorsList] = useState([]);
  let [colorFromPicker, setColorFromPicker] = useState({
    h: 180,
    s: 32,
    l: 36,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (palettesData.length !== 0) {
      setColorsList(palettesData[0].colors);
    }
  }, [palettesData]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      <Bar>
        <IconButton color="inherit" edge="start">
          {"<"}
        </IconButton>
        <p>{colorsList.length} / 20</p>
        <Button variant="contained" disabled={colorsList.length === 0}>
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
