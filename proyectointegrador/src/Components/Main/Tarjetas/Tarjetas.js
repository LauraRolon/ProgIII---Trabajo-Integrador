import React from 'react';
import './Tarjetas.css';

function Tarjetas() {
    return (
        <div className="tarjeta">
            <main>
                <img  className="imagen" src="./assets/img/image-default.png" alt=""/>
                <h3>Título/ Nombre</h3>
                <p class ="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita.Culpa, soluta perspiciatis!Sint, laboriosam cum.</p>
                <section class ="aditional-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse qui atque.</p>
                </section>
                <a href="">Ver más</a>
            </main>
        </div>
    );
}

export default Tarjetas;