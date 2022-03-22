import React from "react";
import "./SideBar.css";
import * as BootComp from "react-bootstrap";
import {fiSearch} from 'react-icons/fi';
import {MdCatchingPokemon, MdVideogameAsset, MdStarOutline, MdOutlineLocalFireDepartment} from 'react-icons/md'

function SideBar() {
  return (
    <>
      <aside className="sidenav pt-2 border-end">
        <div className="sidenav-item">

          <div className="sidenav-item">
            <div className="sidenav-header">
              <h5>Opciones</h5>
            </div>
            <div className="sidenav-body">
              <ul className="sidenav-menu">
                <li className="sidenav-menu-item">
                  <a href="#"><MdCatchingPokemon className="react-icons" size={"1.5rem"}/> Pokedex</a>
                </li>
                <li className="sidenav-menu-item">
                  <a href="#"><MdOutlineLocalFireDepartment className="react-icons" size={"1.5rem"}/> Ataques</a>
                </li>
                <li className="sidenav-menu-item">
                  <a href="#"><MdStarOutline className="react-icons" size={"1.5rem"}/> Naturalezas</a>
                </li>
                <li className="sidenav-menu-item">
                  <a href="#"><MdVideogameAsset className="react-icons" size={"1.5rem"}/> Juegos</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="sidenav-header">
            <BootComp.Form className="m-1">
              <BootComp.FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              
            </BootComp.Form>
          </div> */}
        </div>
      </aside>

      {/* <div className="sidenav pt-2">
        <div className="sidenav-item">
          <div className="sidenav-header">
            <h5>Encabezado</h5>
          </div>
          <div className="sidenav-body">
            <ul className="sidenav-menu">
              <li className="sidenav-menu-item">
                <a href="#">Pokedex</a>
              </li>
              <li className="sidenav-menu-item">
                <a href="#">Ataques</a>
              </li>
              <li className="sidenav-menu-item">
                <a href="#">Naturalezas</a>
              </li>
              <li className="sidenav-menu-item">
                <a href="#">Juegos</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default SideBar;
