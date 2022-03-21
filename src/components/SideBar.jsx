import React from "react";
import "./SideBar.css";
import * as BootComp from "react-bootstrap";
import {fiSearch} from 'react-icons/fi';

function SideBar() {
  return (
    <>
      <div className="sidenav pt-2">
        <div className="sidenav-item">
          <div className="sidenav-header">
            <BootComp.Form className="m-1">
              <BootComp.FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              
            </BootComp.Form>
          </div>
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
        </div>
      </div>

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
