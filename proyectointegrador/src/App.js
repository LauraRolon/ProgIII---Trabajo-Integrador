import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Main/MainContent";
import React, { Component } from "react";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}


export default App