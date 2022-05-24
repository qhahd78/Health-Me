import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/Colors/colors";

export const TimeInput = () => {
  return (
    <InputContainer>
      <input placeholder="0" type="text" />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: inherit;
    text-align: center;
    border: none;
    outline: none;
    background-color: inherit;
    font-size: 30px;
    font-weight: 700;
  }
  input::placeholder {
    color: ${COLORS.DARK_GRAY};
  }
`;
