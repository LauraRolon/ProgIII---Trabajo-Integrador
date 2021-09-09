import React from 'react';
import './T2.css';

function Tarjetas() {
    return (

        <div className="container">
            <section className="tarjeta">
                <div className="imagen-container">
                    <img src="./assets/img/image-default.png" alt="" />
                </div>
                <div className="content-container">
                    <div className="titulo">
                        <h3>Título/ Nombre</h3>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita.Culpa, soluta perspiciatis!Sint, laboriosam cum.</p>
                    </div>
                    <div className="boton">
                        <button>
                            <a href="">Ver más</a>
                        </button>

                    </div>
                </div>
            </section>
            <section className="tarjeta">
                <div className="imagen-container">
                    <img src="./assets/img/image-default.png" alt="" />
                </div>
                <div className="content-container">
                    <div className="titulo">
                        <h3>Título/ Nombre</h3>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita.Culpa, soluta perspiciatis!Sint, laboriosam cum.</p>
                    </div>
                    <div className="boton">
                        <button>
                            <a href="">Ver más</a>
                        </button>

                    </div>
                </div>
            </section>
        </div>

    );
}

export default Tarjetas;