import React from "react";
import FilterField from "../FilterField/FilterField";
import './header.css'

function Header(){
    return (
        <header className="header">
            <section className="seccionHeader">
                <li className="logotipo">
                    <img className="logo" src="./assets/img/image-default.png" alt="" />
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
                    <FilterField buscarPelicula={ (param) => this.filtrarPeliculas(param)}/>
                </li>
            </section>
        </header>
    )
}

export default Header