import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AddButton from "./components/buttons/AddButton";
import Search from "./components/Search";
import Deck from "./components/Deck"

class App extends Component {
  constructor() {
    super();
    this.state = {
      card: null,
      deck: []
    };
    this.baseUrl = "https://api.magicthegathering.io/v1/cards?name=";
  }

  componentDidMount() {
    axios.get("/api/deck").then(res => {
      this.setState({deck: res.data})
    })
  }
  getCard = (e, name) => {
    e.preventDefault();
    axios.get(this.baseUrl + encodeURIComponent(name)).then(res => {
      this.setState({ card: res.data.cards[0].imageUrl });
    });
  }
  addCard = () => {
    axios.post("/api/deck", {imgUrl: this.state.card}).then(res => {
      this.setState({deck: res.data})
    })
  }
  deleteCard = (index) => {
    axios.delete(`/api/deck?index=${index}`).then(res => {
      this.setState({deck: res.data});
    })
  }
  favoriteCard = (index) => {
    axios.put("/api/deck", {index}).then(res => {
      this.setState({deck: res.data})
    })
  }
  render() {
    return (
      <div className="App">
        <div className="cardGenerator">
        <Search getCard={this.getCard} />
          {this.state.card !== null ? (
            <div>
              <img src={this.state.card} alt="card" className="foundCard" />
            </div>
          ) : null}
          <AddButton addCard={this.addCard} />
        </div>
        <span id="size">Deck Size: {this.state.deck.length}</span>
        <Deck deck={this.state.deck} favoriteCard={this.favoriteCard} deleteCard={this.deleteCard}/>
      </div>
    );
  }
}

export default App;
