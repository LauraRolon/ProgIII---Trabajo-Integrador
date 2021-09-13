import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Main/MainContent";
import { Component } from "react";

class App extends Component() {
  constructor(props){
    super(props)
    this.state = {
      valor: ""
    }
  }

  render(){
    return (
      <div className="App">
      
        <MainContent />
        <Footer />
      </div>
  );
  }
  
}

export default App;
