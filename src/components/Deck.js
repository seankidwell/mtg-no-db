import React from "react";
import DeleteButton from "./buttons/DeleteButton";

export default function Deck(props) {
  let deck = props.deck.map((e, i) => {
    return (
      <div key={i} className="theCard">
        <img
          src={e.imgUrl}
          alt="card"
          style={{
            backgroundColor: e.favorited ? "yellow" : "rgb(0, 133, 143)"
          }}
        />
        <button
          onClick={() => props.favoriteCard(i)}
          id="star"
          style={{ color: e.favorited ? "yellow" : "black" }}
        >
          <i className="fas fa-star" />
        </button>
        <DeleteButton fav={e.favorited} deleteFn={() => props.deleteCard(i)} />
      </div>
    );
  });
  return <div className="deck">{deck}</div>;
}
