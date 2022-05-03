import React from "react";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";

const Container = styled.div`
  padding: 28px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const Contents = styled.div`
  width: 100%;
`;

const MapBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${COLORS.LIGHT_GRAY};
  margin: 16px 0 18px 0;
`;

const SearchResult = styled.div`
  height: 80px;
  overflow-y: scroll;
`;

const Subtitle2 = styled.p`
  width: 100%;
  border-bottom: 1px solid ${COLORS.GRAY};
  font-size: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  & > span {
    font-weight: 800;
    color: ${COLORS.MAIN_GREEN};
  }
`;

const ResultBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  padding: 0 10px;

  p:nth-child(1) {
    font-size: 12px;
  }
  p:nth-child(2) {
    font-size: 12px;
    font-weight: 200;
  }
`;

const Map = ({ location = "천안시", resultNum = 12 }) => {
  return (
    <>
      <Header />
      <Container>
        <Subtitle>{location} 주변 건강시설</Subtitle>
        <Contents>
          <MapBox>맵</MapBox>
          <Subtitle2>
            검색결과 총 <span>{resultNum}</span> 건
          </Subtitle2>
          <SearchResult>
            <ResultBox>
              <p>건강건강 건강센터</p>
              <p>천안시 서북구 부성 6길 11</p>
            </ResultBox>
            <ResultBox>
              <p>건강건강 건강센터</p>
              <p>천안시 서북구 부성 6길 11</p>
            </ResultBox>
            <ResultBox>
              <p>건강건강 건강센터</p>
              <p>천안시 서북구 부성 6길 11</p>
            </ResultBox>
            <ResultBox>
              <p>건강건강 건강센터</p>
              <p>천안시 서북구 부성 6길 11</p>
            </ResultBox>
          </SearchResult>
        </Contents>
      </Container>
      <Navbar />
    </>
  );
};

export default Map;
