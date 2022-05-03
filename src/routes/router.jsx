import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graph from "../pages/graph";
import Landing from "../pages/landing";
import Main from "../pages/main";
import Map from "../pages/map";
import MyContents from "../pages/myContents";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/myContents" element={<MyContents />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
