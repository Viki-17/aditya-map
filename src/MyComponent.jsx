import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { InfoWindow, InfoBox } from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";
// import MARKERS_TO_SHOW from "./Markers";
import MARKERS_TO_SHOW from "./constants/city.json";
import { CustomSearch } from "./components/CustomSearch";

const libs = ["places"];

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
  const [selectedCity, setSelectedCity] = React.useState(null);

  const handleChangeCity = (newCity) => {
    setSelectedCity(newCity[0]);
  };

  const [view, setView] = React.useState(defaultMarker.position);

  const [zoom, setZoom] = React.useState(1);

  React.useEffect(() => {
    if (selectedCity) {
      setView(selectedCity?.position);
      setZoom(zoom * 0.001 + 10);
    }
  }, [selectedCity]);

  React.useEffect(() => {
    setZoom(zoom * 0.001 + 10);
  }, [view]);

  return (
    <LoadScript googleMapsApiKey={API_KEY} libraries={libs}>
      <GoogleMap mapContainerStyle={containerStyle} center={view} zoom={zoom}>
        <Markers markers={MARKERS_TO_SHOW} />
        {/* <MyAutoComplete setView={setView} /> */}
        <CustomSearch onChangeCity={handleChangeCity} />
      </GoogleMap>
    </LoadScript>
  );
};

// const MyAutoComplete = ({ setView }) => {
//   const [autoComplete, setAutoComplete] = React.useState(null);

//   const onPlaceChanged = () => {
//     if (autoComplete !== null) {
//       setView(autoComplete.getPlace().geometry.location);
//     } else {
//     }
//   };

//   return (
//     <>
//       {/* <Autocomplete
//         onLoad={(a) => setAutoComplete(a)}
//         onPlaceChanged={onPlaceChanged}
//       >
//         <input
//           className="search"
//           type="text"
//           placeholder="Search"
//           style={{
//             boxSizing: `border-box`,
//             border: `1px solid transparent`,
//             width: `285px`,
//             height: `36px`,
//             padding: `0 12px`,
//             borderRadius: `20px`,
//             boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//             fontSize: `14px`,
//             outline: `none`,
//             textOverflow: `ellipses`,
//             position: "absolute",
//             left: "50%",
//             marginLeft: "-125px",
//             marginTop: "20px",
//           }}
//         />
//       </Autocomplete> */}
//     </>
//   );
// };

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
  const [branchMarker, setBranchMarker] = React.useState(null);
  const onMarkerClick = () => {
    if (selectedMarker) {
      setSelectedMarker(null);
    } else {
      setSelectedMarker(marker.position);
    }
  };

  const onMarkOver = () => {
    setBranchMarker(marker.position);
  };
  const onMarkOut = () => {
    setBranchMarker(null);
  };

  return (
    <>
      <Marker
        position={marker.position}
        onClick={onMarkerClick}
        onMouseOver={onMarkOver}
        onMouseOut={onMarkOut}
      />
      {selectedMarker && (
        <InfoWindow position={marker.position}>
          <div style={{ padding: "10px" }}>
            <a href={marker.text} target="blank">
              {"Click here to join meeting"}
            </a>
          </div>
        </InfoWindow>
      )}
      {branchMarker && (
        <InfoBox position={marker.position}>
          <h3
            style={{
              color: "black",
              borderRadius: `8px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              backgroundColor: "white",
              padding: 10,
              fontSize: "20px",
            }}
          >
            {marker.title}
          </h3>
        </InfoBox>
      )}
    </>
  );
};
