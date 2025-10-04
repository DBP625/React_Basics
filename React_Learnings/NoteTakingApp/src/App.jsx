import { useState } from "react";
import "../src/App.css";

function App() {
  // States
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note" },
    { id: 2, title: "Second Note" },
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const changeTitleHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent Refresh
    if (noteTitle.trim() === "") {
      ///TRIM FORMAT : removes whitespace from both ends of a string
      alert("Please enter a valid note title");
      return;
    }
  };
  return (
    <>
      <div className="App">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Note title"
            value={noteTitle}
            onChange={changeTitleHandler}
          />
          <button> Add Note</button>
        </form>
        <div className="notelist">
          <h2>My Notes</h2>
          <ul>
            {notes.map((note) => (
              <>
                <li>
                  <span>{note.title}</span>
                  <button>Edit</button>
                  <button>Delete</button>
                </li>
                <br />
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
