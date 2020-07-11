import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import "../styles/map.css";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Globe = ({ iss }) => {
  const coords = [iss[1], iss[0]];

  const createMarker = (coords) => {
    if (coords[0]) {
      return (
        <Marker coordinates={coords}>
          <circle r={5} fill="#F00" />
        </Marker>
      );
    }
  };

  return (
    <div className="map">
      <ComposableMap projection="geoMercator">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                fill="#EAEAEC"
                stroke="#D6D6DA"
                key={geo.rsmKey}
                geography={geo}
              />
            ))
          }
        </Geographies>
        {createMarker(coords)}
      </ComposableMap>
    </div>
  );
};

export default Globe;
