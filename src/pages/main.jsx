import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import COLORS from "../assets/Colors/colors";
import Navbar from "../components/common/navbar";
import Header from "../components/common/header";
import { TimeInput } from "../components/atoms/Input";
import { ReactComponent as Sad } from "../assets/Sad.svg";
import { ReactComponent as Normal } from "../assets/Normal.svg";
import { ReactComponent as Happy } from "../assets/Happy.svg";
import { ReactComponent as Best } from "../assets/Best.svg";
import { ReactComponent as NoEmotion } from "../assets/NoEmotion.svg";
import { SaveButton } from "../components/atoms/Button";

const Container = styled.div`
  padding: 0 28px 28px 28px;
`;

const Greetings2 = styled.p`
  font-size: 20px;
  padding-top: 30px;
  line-height: 24px;
`;

const CategoryTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

const CategoryContent = styled.div`
  background-color: ${COLORS.LIGHT_GRAY};
  width: ${(props) => props.width};
  height: 120px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 50px;
`;

const BodyInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SleepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;
  & > p {
    color: ${COLORS.DARK_GRAY};
    font-size: 20px;
    text-align: center;
    padding-right: 10px;
  }
`;

const Subtitle = styled.p`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const TimeWrapper = styled.div`
  width: 40px;
`;

const BodyInfoContainer = styled.div`
  & > p {
    color: ${COLORS.DARK_GRAY};
  }
`;

const EmotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

// active 스타일
const active = css`
  fill: ${COLORS.MAIN_GREEN};
  stroke: ${COLORS.MAIN_GREEN};
`;

const deactive = css`
  fill: ${COLORS.DARK_GRAY};
  stroke: ${COLORS.DARK_GRAY};
`;

const EmotionBox = styled.div`
  z-index: 5;
  & > svg {
    ${({ isActive }) => (isActive ? active : deactive)}
  }
`;

const Main = () => {
  const [IsActive1, setIsActive1] = useState(false);
  const [IsActive2, setIsActive2] = useState(false);
  const [IsActive3, setIsActive3] = useState(false);
  const [IsActive4, setIsActive4] = useState(false);
  const [IsActive5, setIsActive5] = useState(false);

  const clickEvent = (e) => {
    switch (e.target.closest("div").id) {
      case "sad":
        setIsActive1(true);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        break;
      case "normal":
        setIsActive1(false);
        setIsActive2(true);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(false);
        break;
      case "noEmotion":
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(true);
        setIsActive4(false);
        setIsActive5(false);
        break;
      case "happy":
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(true);
        setIsActive5(false);
        break;
      case "best":
        setIsActive1(false);
        setIsActive2(false);
        setIsActive3(false);
        setIsActive4(false);
        setIsActive5(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Greetings2>오늘의 컨디션을 체크해볼까요 ?</Greetings2>
        <Contents>
          <CategoryTitle>수면 🛏️</CategoryTitle>
          <CategoryContent width="100%">
            <SleepContainer>
              <TimeWrapper>
                <TimeInput />
              </TimeWrapper>
              <p>시 부터</p>
              <TimeWrapper>
                <TimeInput />
              </TimeWrapper>
              <p>시 까지 취침</p>
            </SleepContainer>
          </CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>신체정보</CategoryTitle>
          <BodyInfoDiv>
            <CategoryContent width="110px">
              <Subtitle>혈압</Subtitle>
              <BodyInfoContainer>
                <TimeInput />
                <p>mmHg</p>
              </BodyInfoContainer>
            </CategoryContent>
            <CategoryContent width="110px">
              <Subtitle>체중</Subtitle>
              <BodyInfoContainer>
                <TimeInput />
                <p>kg</p>
              </BodyInfoContainer>
            </CategoryContent>
            <CategoryContent width="110px">
              <Subtitle>운동</Subtitle>
              <BodyInfoContainer>
                <TimeInput />
                <p>시간</p>
              </BodyInfoContainer>
            </CategoryContent>
          </BodyInfoDiv>
        </Contents>
        <Contents>
          <CategoryTitle>기분😎</CategoryTitle>
          <CategoryContent width="100%">
            <EmotionContainer>
              <EmotionBox id="sad" onClick={clickEvent} isActive={IsActive1}>
                <Sad />
                <p>최악</p>
              </EmotionBox>
              <EmotionBox id="normal" onClick={clickEvent} isActive={IsActive2}>
                <Normal />
                <p>별로</p>
              </EmotionBox>
              <EmotionBox
                id="noEmotion"
                onClick={clickEvent}
                isActive={IsActive3}
              >
                <NoEmotion />
                <p>보통</p>
              </EmotionBox>
              <EmotionBox id="happy" onClick={clickEvent} isActive={IsActive4}>
                <Happy />
                <p>좋음</p>
              </EmotionBox>
              <EmotionBox id="best" onClick={clickEvent} isActive={IsActive5}>
                <Best />
                <p>최고</p>
              </EmotionBox>
            </EmotionContainer>
          </CategoryContent>
        </Contents>
        <SaveButton />
      </Container>
      <Navbar />
    </>
  );
};

export default Main;
