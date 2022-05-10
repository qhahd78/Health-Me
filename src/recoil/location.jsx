import { atom } from "recoil";

export const MyLatitude = atom({
  key: "myLatitude",
  default: 0,
});

export const MyLongtitude = atom({
  key: "myLongtitude",
  default: 0,
});

export const AreaName = atom({
  key: "areaName",
  default: {},
});
