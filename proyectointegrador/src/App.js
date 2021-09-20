import Footer from "./Components/Footer/Footer";
import React, { Component } from "react";
import MainContent from "./Components/Main/MainContent";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <div className="App">
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App