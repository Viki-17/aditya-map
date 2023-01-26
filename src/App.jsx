import React from "react";
import Banner from "./components/Banner";
import { CustomSearch } from "./components/CustomSearch";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarV2";
import Tagline from "./components/Tagline";
import { MyComponent } from "./MyComponent";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        // maxWidth: "1000px",
      }}
    >
      <Navbar />
      <Tagline text="Experience The Launch Event In Metaverse." />
      <Banner text="Find an Aditya Birla Capital branch near you" />
      <MyComponent />

      <Footer />
    </div>
  );
}

export default App;
