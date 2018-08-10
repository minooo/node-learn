import React, { Component } from "react";
import ReactDOM from "react-dom";
import { fn1 } from "./3-utils"

class App extends Component {
  render() {
    fn1()
    return <div>{this.props.text}</div>;
  }
}

ReactDOM.render(
  <App text="hello world" />,
  document.querySelector(".container")
);
