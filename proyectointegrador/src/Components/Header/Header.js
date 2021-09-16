import React, { Component } from "react";
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtardo: "",
        }
    }

    evitarSubmit(evt) {
        evt.preventDefault();
    }

    controlCambios(evt) {
        this.setState({
            filtrado: evt.target.value
        }, () => this.props.buscarPelicula(this.state.filtrado));
    }

    render() {
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
                    <button className="vistaGrilla" onClick={()=>this.props.vistaGrilla()}>Cambiar vista</button>
                    
                    <li className="titulosHeader">
                        <form onSubmit={this.evitarSubmit}>
                            <div className="searchSpace">
                                <input
                                    className="divInput"
                                    placeholder="Buscar..."
                                    type="text"
                                    onChange={(evt) => this.controlCambios(evt)}
                                    value={this.state.filtrado}
                                />
                                <button className="botonSearch" type="submit"></button>
                            </div>

                        </form>
                    </li>
                </section>
            </header>
        )
    }
}

export default Header