import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import COLORS from "../../assets/Colors/colors";
import { MyLatitude, MyLongtitude, AreaName } from "../../recoil/location";

const { kakao } = window;

const StyledMap = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${COLORS.LIGHT_GRAY};
  margin: 16px 0 18px 0;
`;

const MapContainer = () => {
  // 지역 명 저장
  const [MyArea, setMyArea] = useRecoilState(AreaName);

  // 위도와 경도를 저장
  const [Latitude, setLatitude] = useRecoilState(MyLatitude);
  const [Longtitude, setLongtitude] = useRecoilState(MyLongtitude);

  // 현재 위도와 경도를 가져오는 함수
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      // 위도
      setLatitude(pos.coords.latitude);
      // 경도
      setLongtitude(pos.coords.longitude);
    });
  };

  // 현재 위도와 경도로 주소 찾는 객체
  const geocoder = new kakao.maps.services.Geocoder();
  const getAddress = () => {
    // 좌표로 주소 요청 (경도, 위도 순서로 요청);
    geocoder.coord2RegionCode(Longtitude, Latitude, addressResult);
  };

  // 위도, 경도에 맞는 지역명 저장하기
  const addressResult = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      setMyArea(result[0]);
    }
  };

  const setMyLocation = () => {
    getLocation();
    if (!Latitude) {
      return;
    } else {
      getAddress();
      addressResult();
    }
  };

  // 위도, 경도 기준으로 맵을 띄우는 useEffect
  useEffect(() => {
    setMyLocation();
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(Latitude, Longtitude),
      level: 2,
    };
    new kakao.maps.Map(container, options);
  });

  return <StyledMap id="map"></StyledMap>;
};

export default MapContainer;
