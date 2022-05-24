import React, { useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../assets/Colors/colors";
import "./overlay.css";

const { kakao } = window;

const StyledMap = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${COLORS.LIGHT_GRAY};
  margin: 16px 0 18px 0;
`;

const MapContainer = (placeList) => {
  // 핀 표기할 지역 리스트 불러오기
  let pins = placeList.placeList;
  // 지역의 위도와 경도들을 저장하는 리스트
  let points = [];

  // 최종으로 생성되는 지역의 핀들 리스트
  let resultPins = [];

  const setResultPins = () => {
    for (let i = 0; i < pins.length; i++) {
      let data = new Object();
      data.latitude = pins[i].위도;
      data.longitude = pins[i].경도;
      data.centerName = pins[i].건강증진센터명;

      points.push(data);
    }
    for (let item = 0; item < points.length; item++) {
      let kakaoData = new kakao.maps.LatLng(
        points[item].latitude,
        points[item].longitude
      );

      resultPins.push(kakaoData);
    }
  };

  useEffect(() => {
    setResultPins();
    console.log(pins);
    // 2차 핀 가공
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

    // 마커, 오버레이 생성하는 for 문
    let i, marker;

    for (i = 0; i < pins.length; i++) {
      marker = new kakao.maps.Marker({ map: map, position: resultPins[i] });
      let myContent = `<div class='container'>${pins[i].건강증진센터명}</div>`;

      let customOverlay = new kakao.maps.CustomOverlay({
        position: resultPins[i],
        content: myContent,
      });

      marker.setMap(map);
      customOverlay.setMap(map);
      bounds.extend(resultPins[i]);
    }
    map.setBounds(bounds);
  };

  return <StyledMap id="map" />;
};

export default MapContainer;
