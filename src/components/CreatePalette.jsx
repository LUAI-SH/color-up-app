import { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { HslColorPicker } from "react-colorful";

import { hslToHex } from "../helperFunction/colors";
import ColorsBox from "./ColorsBox";

// Context
import { PalettesContext } from "../appContexts";

const drawerWidth = 240;

const CreatePalette = () => {
  const { palettesData } = useContext(PalettesContext);
  const [colors, setColors] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleColorPickerChange = (color) => {
    const { h, s, l } = color;
    const hexValue = hslToHex(h, s, l);
    const newColor = {
      name: "",
      color: {
        hex: hexValue,
        hsl: { css: `hsl(${h}deg, ${s}%, ${l}%)`, values: { h, s, l } },
      },
    };
    setColors([...colors, newColor]);
  };

  useEffect(() => {
    if (palettesData.length !== 0) {
      setColors(palettesData[0].colors);
    }
  }, [palettesData]);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <HslColorPicker onChange={handleColorPickerChange} />
      <List>
        <p>jvbjnv</p>
      </List>
    </div>
  );

  if (!colors) {
    return <h1>Loading.....</h1>;
  }
  console.log(colors);

  return (
    <div>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="static"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              mr: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              anchor="right"
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              anchor="right"
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </div>
      <div>
        <ColorsBox colors={colors} />
      </div>
    </div>
  );
};

export default CreatePalette;
