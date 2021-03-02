import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><i className="fa fa-trash" aria-hidden="true"></i></button>
    </div>
  );
}

export default Note;
