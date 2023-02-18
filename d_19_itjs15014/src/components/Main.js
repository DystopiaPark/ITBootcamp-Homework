import React, { Component } from "react";
import Button from "./Button.js";

class Main extends Component {
  state = {
    buttons: [
      {
        writting: ["red button", "blue button", "green button"],
        color: ["red", "blue", "green"],
        id: [1, 2, 3],
        pColor: "black",
        pText: "some text",
        texts: ["paprika", "patlidzan", "jabuka"],
      },
    ],
  };

  handleTextAndColor = (id) => {
    this.setState({
      buttons: this.state.buttons.map((el) => {
        for (let i = 0; i < 3; i++) {
          if (el.id[i] === id) {
            return { ...el, pText: el.texts[i], pColor: el.color[i] };
          }
        }
      }),
    });
  };

  render() {
    return (
      <div>
        {this.state.buttons.map((button) => (
          <Button
            key={button.id[0]}
            writting={button.writting}
            color={button.color}
            id={button.id}
            pColor={button.pColor}
            pText={button.pText}
            onChangeTextAndColor={this.handleTextAndColor}
          />
        ))}
      </div>
    );
  }
}

export default Main;
