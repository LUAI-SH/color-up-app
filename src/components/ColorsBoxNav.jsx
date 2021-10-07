import { useState } from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ColorsBoxNav = ({ sliderValue, setSliderValue }) => {
  return (
    <Nav>
      <div>
        <a href="#">Back</a>
      </div>
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
      <div>{"Format"}</div>
    </Nav>
  );
};

// const Nav = styled.nav``;
// const Nav = styled.nav``;
// const Nav = styled.nav``;
// const Nav = styled.nav``;

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
