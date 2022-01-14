import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().min(3).label("Name"),
  };

  doSubmit = () => {
    console.log("New Movie submitted");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
