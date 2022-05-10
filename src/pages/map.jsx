import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import COLORS from "../assets/Colors/colors";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import MapContainer from "../components/molecules/mapContainer";
import useLocation from "../hooks/useLocation";
import { AreaName } from "../recoil/location";
import { SearchList } from "../recoil/searchResult";

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

const Map = () => {
  const nowLocation = useRecoilValue(AreaName);
  const resultList = useRecoilValue(SearchList);
  const [List, setList] = useRecoilState(SearchList);

  const test = () => {
    const jsonData = require("../assets/database/places.json");

    for (let i = 0; i < 404; i++) {
      if (
        jsonData.centers[i].소재지도로명주소.includes(
          nowLocation.region_2depth_name
        )
      ) {
        setList([...List, jsonData.centers[i]]);
      }
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Subtitle>{nowLocation.address_name} 주변 건강시설</Subtitle>
        <Contents>
          <MapContainer></MapContainer>
          <Subtitle2>
            검색결과 총 <span>{resultList.length}</span> 건
          </Subtitle2>
          <SearchResult>
            {resultList.map((item) => (
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
