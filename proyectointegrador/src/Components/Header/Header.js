import React from "react";
import './header.css'

function Header(){
    return(
        <header className="header">
            <section className="seccionHeader">
                <li className="logotipo">
                    <img className="logo" src="./assets/img/image-default.png" alt=""/>
                </li>
                <li className="titulosHeader">
                    <a className="textoHeader">Inicio</a>
                </li>
                <li className="titulosHeader">
                    <a className="textoHeader">Películas</a>
                </li>
                <li className="titulosHeader">
                    <a className="textoHeader">Series</a>
                </li>
                <li className="titulosHeader">
                    <form action="">
                        <div className="divInput">
                            <input className="inputBuscador" type="text" name="busqueda" placeholder="Buscar..." />
                            <button className="botonSearch" type="submit"></button>
                        </div>
                    </form>
                </li>
            </section>
        </header>
    )
}

export default Header