import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/Colors/colors";

const { kakao } = window;

const StyledMap = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${COLORS.LIGHT_GRAY};
  margin: 16px 0 18px 0;
`;

const MapContainer = () => {
  // 위도와 경도를 저장
  const [MyLatitude, setMyLatitude] = useState(0);
  const [MyLongtitude, setMyLongtitude] = useState(0);
  // 현재 위도와 경도를 가져오는 함수
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      // 위도
      setMyLatitude(pos.coords.latitude);
      // 경도
      setMyLongtitude(pos.coords.longitude);
    });
  };

  // 현재 위도와 경도로 주소 찾는 함수
  const geocoder = new kakao.maps.services.Geocoder();
  const getAddress = () => {
    // 좌표로 주소 요청 (경도, 위도 순서로 요청);
    geocoder.coord2RegionCode(MyLongtitude, MyLatitude, addressResult);
  };

  const addressResult = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result[0].region_2depth_name);
    }
  };

  // 위도, 경도 기준으로 맵을 띄우는 useEffect
  useEffect(() => {
    getLocation();
    getAddress();
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(MyLatitude, MyLongtitude),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
  });

  return <StyledMap id="map"></StyledMap>;
};

export default MapContainer;
