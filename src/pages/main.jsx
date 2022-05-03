import React from "react";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import Navbar from "../components/common/navbar";
import Header from "../components/common/header";

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
  font-weight: 600;
`;

const CategoryContent = styled.div`
  background-color: ${COLORS.LIGHT_GRAY};
  width: ${(props) => props.width};
  height: 105px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 30px;
`;

const BodyInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Greetings2>오늘의 컨디션을 체크해볼까요 ?</Greetings2>
        <Contents>
          <CategoryTitle>수면 🛏️</CategoryTitle>
          <CategoryContent width="100%">어쩌구</CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>신체정보</CategoryTitle>
          <BodyInfoDiv>
            <CategoryContent width="90px">어쩌구</CategoryContent>
            <CategoryContent width="90px">어쩌구</CategoryContent>
            <CategoryContent width="90px">어쩌구</CategoryContent>
          </BodyInfoDiv>
        </Contents>
        <Contents>
          <CategoryTitle>기분😎</CategoryTitle>
          <CategoryContent width="100%">어쩌구</CategoryContent>
        </Contents>
      </Container>
      <Navbar />
    </>
  );
};

export default Main;
