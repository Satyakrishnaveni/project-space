import React from 'react';
import Maphead from './maphead';
import Slides from './slides.jsx';
import MapFooter from './mapfooter.jsx';
import HomePage from "./Maphome.jsx";
import { Link, Outlet } from "react-router-dom";

const Map = () => {
  return (
    <>
      <Maphead/>
     
      <Outlet/>

      <MapFooter/>
      
      
            
      


    </>
  );
};

export default Map;
