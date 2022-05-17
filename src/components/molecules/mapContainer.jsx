import React, { useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../assets/Colors/colors";

const { kakao } = window;

const StyledMap = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${COLORS.LIGHT_GRAY};
  margin: 16px 0 18px 0;
`;

const MapContainer = (placeList) => {
  // 핀 표기할 지역 리스트 불러오기
  const pins = placeList;

  // 지역의 위도와 경도들을 저장하는 리스트
  let points = [];

  // 마커를 표시할 리스트 설정
  const setPoints = () => {
    console.log(pins.placeList);
    if (!pins.placeList) {
      return;
    } else {
      for (let i = 0; i < pins.placeList.length; i++) {
        let data = new Object();
        data.latitude = pins.placeList[i].위도;
        data.longitude = pins.placeList[i].경도;

        points.push(data);
      }
    }
  };

  // 최종으로 생성되는 지역의 핀들 리스트
  let resultPins = [];
  const setResultPins = () => {
    if (!points) {
      return;
    } else {
      for (let item = 0; item < points.length; item++) {
        let kakaoData = new kakao.maps.LatLng(
          points[item].latitude,
          points[item].longitude
        );

        resultPins.push(kakaoData);
      }
    }
  };

  // 위도, 경도 기준으로 맵을 띄우는 useEffect
  useEffect(() => {
    // 1차 핀 가공
    setPoints();
    // 2차 핀 가공
    setResultPins();
  });

  useEffect(() => {
    // 맵 그리기
    mapDraw();
  }, []);

  const mapDraw = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.452278, 126.567803),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const bounds = new kakao.maps.LatLngBounds();

    // 마커 생성하는 for 문
    if (resultPins.length === points.length) {
      let i, marker;
      for (i = 0; i < resultPins.length; i++) {
        marker = new kakao.maps.Marker({ position: resultPins[i] });
        marker.setMap(map);
        bounds.extend(resultPins[i]);
      }
    }

    map.setBounds(bounds);
  };

  return <StyledMap id="map"></StyledMap>;
};

export default MapContainer;
