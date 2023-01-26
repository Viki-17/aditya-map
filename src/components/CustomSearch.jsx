import Select from "react-dropdown-select";
import React from "react";
import options from "../constants/city.json";

export const CustomSearch = ({ onChangeCity }) => {
  const handleChange = (value) => {
    onChangeCity(value);
  };

  return (
    <div
    // style={{
    //   zIndex: 10,
    //   alignSelf: "end",
    //   width: "200px",
    //   backgroundColor: "#fff",
    //   borderRadius: "5px",

    // }}
    >
      <Select
        multi={false}
        style={{
          zIndex: 10,
          backgroundColor: "white",
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
          marginLeft: "20px",
          marginTop: "20px",
        }}
        options={options}
        onChange={handleChange}
        valueField="title"
        labelField="title"
        placeholder="Select Branch"
      />
    </div>
  );
};
