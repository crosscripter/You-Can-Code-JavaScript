import React from "react";

export default class WelcomeMessageClassComponent extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}

