import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Select, MenuItem } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ColorsBoxNav = ({
  sliderValue,
  setSliderValue,
  colorFormat,
  setColorFormat,
}) => {
  return (
    <Nav>
      <ArrowBackWrapper>
        <Link to="/">
          <ArrowBackIosNewIcon fontSize="large" />
        </Link>
      </ArrowBackWrapper>
      <SliderWrapper>
        <span>Brightness</span>
        <Slider
          defaultValue={sliderValue}
          step={0.05}
          min={0.7}
          max={1.3}
          onChange={(newValue) => setSliderValue(newValue)}
        />
      </SliderWrapper>
      <div>
        <Select
          label="Format"
          value={colorFormat}
          onChange={(e) => setColorFormat(e.target.value)}
        >
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="hsl">HSL</MenuItem>
        </Select>
      </div>
    </Nav>
  );
};

// const Nav = styled.nav``;
// const Nav = styled.nav``;
const ArrowBackWrapper = styled.div`
  
`;

const SliderWrapper = styled.div`
  width: 350px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  background-color: lime; // change this;
  height: 70px;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ColorsBoxNav;
