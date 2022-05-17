import React from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as Graph } from "../../assets/Graph.svg";
import { ReactComponent as Contents } from "../../assets/Contents.svg";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { NavLink } from "react-router-dom";
import COLORS from "../../assets/Colors/colors";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 65px;
  padding: 10px;
  z-index: 5;
  background-color: white;
  /* box-shadow: 0px -10px 10px 3px #c7c7c785; */

  .active svg {
    stroke: ${COLORS.MAIN_GREEN};
  }

  .active p {
    color: ${COLORS.MAIN_GREEN};
  }
`;

const IconBox = styled.div`
  text-align: center;
  p {
    font-size: 12px;
    color: #a6abbd;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/">
        <IconBox>
          <Home stroke="#A6ABBD" />
          <p>홈</p>
        </IconBox>
      </NavLink>
      <NavLink to="/graph">
        <IconBox>
          <Graph stroke="#A6ABBD" />
          <p>통계</p>
        </IconBox>
      </NavLink>
      <NavLink to="/myContents">
        <IconBox>
          <Contents stroke="#A6ABBD" />
          <p>나의 콘텐츠</p>
        </IconBox>
      </NavLink>
      <NavLink to="/map">
        <IconBox>
          <Map stroke="#A6ABBD" />
          <p>지도</p>
        </IconBox>
      </NavLink>
    </Container>
  );
};

export default Navbar;
