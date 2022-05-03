import React from "react";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";

const Container = styled.div`
  padding: 0 28px 28px 28px;
`;

const Greeting = styled.p`
  font-size: 20px;
  padding-top: 30px;
  line-height: 24px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 30px;
`;

const CategoryTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const CategoryContent = styled.div`
  background-color: ${COLORS.LIGHT_GRAY};
  width: 100%;
  height: 105px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Graph = () => {
  return (
    <>
      <Header />
      <Container>
        <Greeting>📚 여태까지의 기록을 모아봤어요.</Greeting>
        <Contents>
          <CategoryTitle>수면🛏️</CategoryTitle>
          <CategoryContent></CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>신체정보💓</CategoryTitle>
          <CategoryContent></CategoryContent>
        </Contents>
        <Contents>
          <CategoryTitle>기분😎</CategoryTitle>
          <CategoryContent></CategoryContent>
        </Contents>
      </Container>
      <Navbar />
    </>
  );
};

export default Graph;
