import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
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
        <Text>Brightness: </Text>
        <Slider
          defaultValue={sliderValue}
          step={0.05}
          min={0.7}
          max={1.3}
          onChange={(newValue) => setSliderValue(newValue)}
        />
      </SliderWrapper>
      <SelectWrapper>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 1 }}>
          <Select
            labelId="color-format"
            label="Format"
            value={colorFormat}
            onChange={(e) => setColorFormat(e.target.value)}
          >
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="hsl">HSL</MenuItem>
          </Select>
        </FormControl>
      </SelectWrapper>
    </Nav>
  );
};

const SelectWrapper = styled.nav`
  width: 82px;
  padding-right: 16px;
`;

const Text = styled.span`
  font-size: 1.4rem;
`;

const ArrowBackWrapper = styled.div`
  margin-top: 5px;
`;

const SliderWrapper = styled.div`
  width: 350px;
  height: 30px;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Nav = styled.nav`
  background-color: hsl(0deg, 0%, 90%); 
  height: 70px;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ColorsBoxNav;
