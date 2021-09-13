import React from "react";
import FilterField from "../FilterField/FilterField";
import './header.css'

function Header(props){

    if(props.mostrarFiltro === false){
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
                    <div onClick={() => props.activarFiltro()}>
                        <button>+</button>
                    </div>
                    <li className="titulosHeader">
                        <FilterField onClick={ () => props.activarFiltro()} />
                    </li>
                </section>
            </header>
        )
    } else{
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
                        <FilterField onChange={() => props.activarFiltro()} buscarPelicula={(param) => this.filtrarPeliculas(param)} />
                    </li>
                </section>
            </header>
        )
    }
    
}

export default Header