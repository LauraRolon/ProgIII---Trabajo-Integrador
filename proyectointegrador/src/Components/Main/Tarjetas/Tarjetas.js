import React from 'react';
import './Tarjetas.css';

function Tarjetas() {
    return (
            <main className="tarjeta">
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <img className="imagen" src="./assets/img/image-default.png" alt="" />
                <h3 className="titulo">Título/ Nombre</h3>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita.Culpa, soluta perspiciatis!Sint, laboriosam cum.</p>
                <section className="aditional-info">
                    <p className="tarjeta-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                    <p className="tarjeta-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                    <p className="tarjeta-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                </section>
                <a class="boton" href="">Ver más</a>
            </main>             
    );
}

export default Tarjetas;