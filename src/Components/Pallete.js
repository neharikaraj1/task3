import React, { Component } from "react";
import "./styles.css";

export class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  changeColor = (event) => {
    const color = this.props[event.target.id];
    this.setState({ backgroundColor: color, toggle: false });
  };

  handleClick = () => {
    this.setState({ toggle: true });
  };

  render() {
    return (
      <div>
        <h1 className="text">Color Picker</h1>
        <div class="main1" style={{ backgroundColor: this.state.backgroundColor }}>
          {this.state.toggle ? (
            <div class="main">
              {Object.keys(this.props).map((colorId) => (
                <div
                  key={colorId}
                  className="square"
                  style={{ backgroundColor: this.props[colorId] }}
                  id={colorId}
                  onClick={this.changeColor}
                ></div>
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <button onClick={this.handleClick}>Pick a Color</button>
        </div>
      </div>
    );
  }
}
