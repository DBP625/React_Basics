import { useState } from "react";
import "./App.css";

function App() {
  // States
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  return (
    <>
      <div className="App">
        <form>
          <input type="text" placeholder="Enter Note title" value={noteTitle}  />
          <button> Add Note</button>
        </form>
      </div>
      
    </>
  );
}

export default App;
