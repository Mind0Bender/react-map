import "./App.css";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

let Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <ReactMapGL
      pitch={viewport.zoom > 4 ? 50 : 30}
      mapboxApiAccessToken={
        "pk.eyJ1Ijoibm90LXZhbGlkIiwiYSI6ImNrbGt1M2ZiMTEwaDMycG5tbDhseTY5YmoifQ.j0DITrdH06LMzgQ4A-H5vg"
      }
      {...viewport}
      onViewportChange={(nextView) => setViewport(nextView)}
    >
      <Marker
        draggable={true}
        latitude={22.8046}
        longitude={86.2029}
        offsetTop={-viewport.zoom * 5}
      >
        <img
          height={viewport.zoom * 5}
          width={viewport.zoom * 5}
          src="placeholder.png"
          alt=""
        />
      </Marker>
    </ReactMapGL>
  );
};

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
