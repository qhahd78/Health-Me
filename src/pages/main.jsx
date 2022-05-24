import React from "react";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import Navbar from "../components/common/navbar";
import Header from "../components/common/header";
import { TimeInput } from "../components/atoms/Input";
import { ReactComponent as Sad } from "../assets/Sad.svg";
import { ReactComponent as Normal } from "../assets/Normal.svg";
import { ReactComponent as Happy } from "../assets/Happy.svg";
import { ReactComponent as Best } from "../assets/Sad.svg";

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
`;

const Main = () => {
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
              <Sad />
              <Normal />
              <Happy />
              <Best />
            </EmotionContainer>
          </CategoryContent>
        </Contents>
      </Container>
      <Navbar />
    </>
  );
};

export default Main;
