import { useEffect, useState } from "react";

const useLocation = () => {
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

  useEffect(() => {
    getLocation();
  }, []);

  return MyLatitude;
};

export default useLocation;
