import React from "react";
//import './header.css'

function Header(){
    return(
        <header className="header">
            <section className="seccionHeader">
                <img className="logo" src="./assets/img/image-default.png" alt=""></img> 
                <form action="">
                    <div class="divInput">
                        <input class="inputBuscador" type="text" name="busqueda" placeholder="Buscar..." />
                    </div>
                    <button class="botonSearch" type="submit"><span id="lupa" href="" uk-icon="search"></span></button>
                </form>
            </section>
        </header>
    )
}

export default Header