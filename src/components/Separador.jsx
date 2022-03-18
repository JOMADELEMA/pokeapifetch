import React from "react";
import "./Separador.css";

function Separador(props) {
  let { titulo } = props;
  return (
    <>
      <div className="bg-green contenedor-titulo texto-titulo">
        hola {titulo}
      </div>
    </>
  );
}

export default Separador;
