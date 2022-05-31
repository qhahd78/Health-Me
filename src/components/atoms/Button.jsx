import styled from "styled-components";
import COLORS from "../../assets/Colors/colors";

export const SaveButton = ({ saveFunc }) => {
  return <SaveButtonContainer onClick={saveFunc}>완료</SaveButtonContainer>;
};

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${COLORS.MAIN_GREEN};
  border-radius: 12px;
  color: white;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 600;
`;
