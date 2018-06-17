import React, { Component } from "react";
import SearchButton from "./buttons/SearchButton";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={e => this.props.getCard(e, this.state.name)}>
          <input
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="ENTER NAME OF CARD"
          />
          <SearchButton type="submit" />
        </form>
      </div>
    );
  }
}
