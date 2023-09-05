import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Text from "./components/Text";
import ShapeExample from "./components/ShapeExample";
import Header from "./components/Header";
import Projet from "./components/Projet";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
