import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import BackgroundImg from "../assets/landing.png";
import COLORS from "../assets/Colors/colors";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
`;

const Contents = styled.div`
  width: 280px;
  height: 150px;
  text-align: center;

  & > svg {
    margin-bottom: 36px;
  }

  & button {
    width: 230px;
    height: 50px;
    font-size: 25px;
    color: ${COLORS.MAIN_GREEN};
    border: 1px solid ${COLORS.MAIN_GREEN};
    background-color: rgba(0, 0, 0, 0);

    :hover {
      cursor: pointer;
    }
  }
`;

const Landing = () => {
  return (
    <Container>
      <Contents>
        <Logo />
        <Link to="/">
          <button>시작하기</button>
        </Link>
      </Contents>
    </Container>
  );
};

export default Landing;
