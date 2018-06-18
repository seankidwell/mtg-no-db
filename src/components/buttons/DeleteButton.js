import React from "react";

export default function DeleteButton(props) {
  return (
    <button className="deleteButton" onClick={props.fav ? null : props.deleteFn}>DELETE</button>
  )
}