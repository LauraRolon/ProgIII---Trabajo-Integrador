import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Main/MainContent";
import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      mostrarFiltro: false
    }
  }

  activarFiltro(){
    if(this.state.mostrarFiltro === false){
      this.setState({
        mostrarFiltro: true
      })
    } else{
      this.setState({
        mostrarFiltro: false
      })
    }
  }

  render(){
    return(
      <div className="App">
      <Header mostrarFiltro= {this.state.mostrarFiltro} activarFiltro= {() => this.activarFiltro()} />
      <MainContent activarFiltro= {this.state.activarFiltro} />
      <Footer />
    </div>
    )
  }
}


export default App