import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    lastname: "",
    mail: "",
    password: "",
  };
  handleChange = (event) => {
    let nameAttribute = event.target.getAttribute("name");
    if (nameAttribute === "ime") {
      this.setState({
        name: event.target.value,
      });
    } else if (nameAttribute === "prezime") {
      this.setState({
        lastname: event.target.value,
      });
    } else if (nameAttribute === "mail") {
      this.setState({
        mail: event.target.value,
      });
    } else if (nameAttribute === "password") {
      this.setState({
        password: event.target.value,
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    alert("forma je submitovana " + this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label name="ime">Name: </label>
          <input type="text" name="ime" onChange={this.handleChange} />
        </div>
        <div>
          <label name="prezime">Last name: </label>
          <input type="text" name="prezime" onChange={this.handleChange} />
        </div>
        <div>
          <label name="mail">e-mail: </label>
          <input type="mail" name="mail" onChange={this.handleChange} />
        </div>
        <div>
          <label name="password">Password: </label>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <h2> {this.state.name}</h2>
        <h2> {this.state.lastname}</h2>
        <h2> {this.state.mail}</h2>
        <h2> {this.state.password}</h2>
      </form>
    );
  }
}

export default Form;
