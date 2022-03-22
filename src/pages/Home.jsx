import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Contenido from "../components/Contenido";

function home() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Contenido />
    </>
  );
}

export default home;
