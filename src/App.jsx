import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { MyComponent } from "./MyComponent";

function App() {
  return (
    <>
      <Navbar />
      <MyComponent />
      <Footer />
    </>
  );
}

export default App;
