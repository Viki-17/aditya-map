import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";
import MARKERS_TO_SHOW from "./Markers";

const API_KEY = import.meta.env.VITE_MAP_API_URL;

const containerStyle = {
  width: "100%",
  maxWidth: "1174px",
  height: "750px",
};

//opens to birds eye view of india with zoom 5
const defaultMarker = {
  position: {
    lat: 28.62919925919497,
    lng: 77.22517854017927,
  },
};

export const MyComponent = () => {
  // const [view, setView] = React.useState(MARKERS_TO_SHOW[0].position);

  const [view, setView] = React.useState(defaultMarker.position);

  const [zoom, setZoom] = React.useState(1);

  React.useEffect(() => {
    setZoom(zoom * 0.001 + 10);
  }, [view]);

  const libs = ["places"];
  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={libs}>
      <GoogleMap mapContainerStyle={containerStyle} center={view} zoom={zoom}>
        <Markers markers={MARKERS_TO_SHOW} />
        <MyAutoComplete setView={setView} />
      </GoogleMap>
    </LoadScript>
  );
};

const MyAutoComplete = ({ setView }) => {
  const [autoComplete, setAutoComplete] = React.useState(null);

  const onPlaceChanged = () => {
    console.log(autoComplete.getPlace());
    if (autoComplete !== null) {
      setView(autoComplete.getPlace().geometry.location);
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  return (
    <Autocomplete
      onLoad={(a) => setAutoComplete(a)}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        className="search"
        type="text"
        placeholder="Search"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `285px`,
          height: `36px`,
          padding: `0 12px`,
          borderRadius: `20px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: "absolute",
          left: "50%",
          marginLeft: "-125px",
          marginTop: "20px",
        }}
      />
    </Autocomplete>
  );
};

const Markers = ({ markers = [] }) => {
  return (
    <>
      {markers.map((marker, i) => (
        <MarkerView key={i} marker={marker} />
      ))}
    </>
  );
};

const MarkerView = ({ marker }) => {
  const [selectedMarker, setSelectedMarker] = React.useState(null);

  const onMarkerClick = () => {
    if (selectedMarker) {
      setSelectedMarker(null);
    } else {
      setSelectedMarker(marker.position);
    }
  };

  return (
    <>
      <Marker position={marker.position} onClick={onMarkerClick} />
      {selectedMarker && (
        <InfoWindow position={marker.position}>
          <div style={{ padding: "10px", border: "1px solid red" }}>
            {/* <h1 style={{ color: "red" }}>{marker.text}</h1> */}
            <a href={marker.text}>{marker.text}</a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
