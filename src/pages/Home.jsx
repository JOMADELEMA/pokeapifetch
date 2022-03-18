import React from "react";
import * as BootComp from "react-bootstrap";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Separador from "../components/Separador";

function home() {
  return (
    <>
      <NavBar />

      <BootComp.Container fluid className="pt-5">
        <BootComp.Row>
          <BootComp.Col lg="3">
            <SideBar />
          </BootComp.Col>

          <BootComp.Col>
            <Separador titulo="Titulo 1" />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <Separador titulo="Titulo 2" />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <Separador titulo="Titulo 3" />
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vero provident expedita beatae impedit tempora autem. Facilis
              sapiente blanditiis saepe culpa nobis cumque. Nulla quia dolorum
              ipsum quos repellendus. Quisquam.
            </div>
          </BootComp.Col>
        </BootComp.Row>
      </BootComp.Container>
    </>
  );
}

export default home;
