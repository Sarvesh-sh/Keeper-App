import React, { useState } from "react";

function CreateArea(props) {
  const [currTitle, setTitle] = useState("");
  const [note, setNote] = useState("");
  function handleChange(event) {
    event.target.name === "title"
      ? setTitle(event.target.value)
      : setNote(event.target.value);
  }
  function handleClick() {
    props.addTask(currTitle, note);
    setTitle("");
    setNote("");
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={currTitle}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
