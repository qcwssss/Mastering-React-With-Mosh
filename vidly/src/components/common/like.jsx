import React, { Component } from "react";

// Input: liked: boolean
// Output: onClick

class Like extends Component {
  render() {
    return (
      <button onClick={this.props.onLike}>
        {" "}
        <i class="fa fa-heart-o"></i>
      </button>
    );
  }
}

export default Like;
