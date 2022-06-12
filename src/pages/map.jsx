import React from "react";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import MapContainer from "../components/molecules/mapContainer";

const Container = styled.div`
  padding: 28px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const Contents = styled.div`
  width: 100%;
`;

const SearchResult = styled.div`
  height: 180px;
  overflow-y: scroll;
`;

const Subtitle2 = styled.p`
  width: 100%;
  overflow: scroll;
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
  height: 25px;
  overflow: scroll;
  /* padding: 0 10px; */

  p:nth-child(1) {
    font-size: 12px;
  }
  p:nth-child(2) {
    font-size: 12px;
    font-weight: 200;
  }
`;

const Map = () => {
  let jsonData = require("../assets/database/places.json").centers.filter(
    (center) => center.소재지도로명주소.includes("천안")
  );

  return (
    <>
      <Header />
      <Container>
        <Subtitle>천안시 내의 건강시설</Subtitle>
        <Contents>
          <MapContainer placeList={jsonData} />
          <Subtitle2>
            검색결과 총 <span>{jsonData.length}</span> 건
          </Subtitle2>
          <SearchResult>
            {jsonData.map((item) => (
              <ResultBox>
                <p>{item.건강증진센터명}</p>
                <p>{item.소재지도로명주소}</p>
              </ResultBox>
            ))}
          </SearchResult>
        </Contents>
      </Container>
      <Navbar />
    </>
  );
};

export default Map;
