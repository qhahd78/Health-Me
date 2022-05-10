import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AreaName } from "../recoil/location";
import { SearchList } from "../recoil/searchResult";

const useLocation = () => {
  const [List, setList] = useRecoilState(SearchList);
  const nowLocation = useRecoilValue(AreaName);
  const jsonData = require("../assets/database/places.json");

  useEffect(() => {
    for (let i = 0; i < 404; i++) {
      if (
        jsonData.centers[i].소재지도로명주소.includes(
          nowLocation.region_2depth_name
        )
      ) {
        setList([...List, jsonData.centers[i]]);
      }
    }
  }, []);
};

export default useLocation;
