import React, { Component } from "react";

class FilterField extends Component{
    constructor(props){
        super(props)
        this.state = {
            filtrado: "",
        }
    }

    evitarSubmit(evt){
        evt.preventDefault();
    }

    controlCambios(evt){
        this.setState({
            filtrado: evt.target.value
        }, () => this.props.buscarPelicula(this.state.filtrado));
    }

    render(){
        return(
            <>
            <form onSubmit={this.evitarSubmit}>
                <div>
                    <input 
                        className="divInput"
                        placeholder="Buscar..."
                        type="text" 
                        onChange={(evt) => this.controlCambios(evt) } 
                        value={this.state.filtrado}
                    />
                    <button className="botonSearch" type="submit"></button>
                </div>   
                    
            </form>
            </>
        )
    }
}

export default FilterField

