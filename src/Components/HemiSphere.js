import React, { Component } from "react";
import Display from "./Display";
import "../Components/Display.css";

class HemiSphere extends Component {
  //   constructor(props) {
  //     super(props);
  // this.state = { latitude: null, errorMessage: "" };
  state = { latitude: null, errorMessage: "" };

  // window.navigator.geolocation.getCurrentPosition(
  //   (position) => {
  //     this.setState({ latitude: position.coords.latitude });
  //   },
  //   (error) => {
  //     this.setState({ errorMessage: error.message });
  //   }
  // );
  //   }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  //   componentDidUpdate(){
  //     console.log('comonentDidUpdate');
  //   }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          {" "}
          <Display latitude={this.state.latitude} />{" "}
        </div>
      );
    } else {
      return <div> Loading... </div>;
    }
  }
}
export default HemiSphere;
