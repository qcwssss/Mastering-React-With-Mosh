import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
    // tags: [],
  };

  handleIncrement() {
    console.log("Increment Clicked", this);
    // this
    // obj.method() -> return obj
    // stand alone function -> return window obj/undefined
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
