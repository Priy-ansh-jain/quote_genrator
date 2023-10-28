import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  state = { advice: "" };
  //  recycl method
  componentDidMount() {
    this.fetchAdvice();
  }

  // In a class component in React, methods that you want to use as part of the component's behavior, especially lifecycle methods like componentDidMount, should not be declared using const. Instead, they should be declared as class methods.
  fetchAdvice = () => {
    // // get method OR get Request = > to request the random api
    axios
      .get("https://api.adviceslip.com/advice")
      //  to get response
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice }); // we use this to access advice in outer scope using state.
        // we have set advice here.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      
      <div className="app">

        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
        <div>
          <div id="ball"></div>
          <div id="ball2"></div>
          <div id="ball3"></div>
          <div id="ball4"></div>
        </div>
      </div>
    );
  }
}

export default App;
