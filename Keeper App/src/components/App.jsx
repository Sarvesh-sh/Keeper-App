import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [oldNotes, setOldNotes] = useState(
    JSON.parse(localStorage.getItem("notes"))
  );
  const [tasks, setTasks] = useState([]);

  function addTasks(newTitle, newContent) {
    const newObj = {
      title: newTitle,
      content: newContent
    };
    setTasks((prevValue) => {
      const newNotes = [...prevValue, newObj];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      // return [...prevValue, newObj];
      return newNotes;
    });
  }

  function deleteTask(id) {
    setOldNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
    setTasks((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addTask={addTasks} />
      {oldNotes != null
        ? oldNotes.map((item, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                deleteItem={deleteTask}
              />
            );
          })
        : null}
      {tasks.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteTask}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
