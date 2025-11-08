import { useState } from "react";

function App() {
  // States
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const changeTitleHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const changeContentHandler = (event) => {
    setNoteContent(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (noteTitle.trim() === "") {
      alert("Please enter a valid note title");
      return;
    }

    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
      content: noteContent,
      createdAt: new Date().toLocaleString(),
      color: getRandomColor(),
    };
    setNotes([newNote, ...notes]);
    setNoteTitle("");
    setNoteContent("");
  };

  const removeHandler = (id) => {
    const updatedNotes = notes.filter((item) => item.id !== id);
    setNotes(updatedNotes);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content || "");
  };

  const updateHandler = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === editableNote.id) {
        return { ...note, title: noteTitle, content: noteContent };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditMode(false);
    setNoteTitle("");
    setNoteContent("");
    setEditableNote(null);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setNoteTitle("");
    setNoteContent("");
    setEditableNote(null);
  };

  const getRandomColor = () => {
    const colors = [
      "from-pink-100 to-pink-200 border-pink-300",
      "from-blue-100 to-blue-200 border-blue-300",
      "from-green-100 to-green-200 border-green-300",
      "from-yellow-100 to-yellow-200 border-yellow-300",
      "from-purple-100 to-purple-200 border-purple-300",
      "from-indigo-100 to-indigo-200 border-indigo-300",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (note.content &&
        note.content.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <span className="text-6xl">📝</span>
            My Notes
          </h1>
          <p className="text-white text-lg opacity-90">
            Capture your thoughts, ideas, and reminders
          </p>
        </div>

        {/* Note Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Note Title"
                value={noteTitle}
                onChange={changeTitleHandler}
                className="w-full px-4 py-3 text-xl font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
              />
            </div>
            <div>
              <textarea
                placeholder="Note Content (optional)"
                value={noteContent}
                onChange={changeContentHandler}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 resize-none"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  editMode
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {editMode ? "✏️ Update Note" : "➕ Add Note"}
              </button>
              {editMode && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-3 rounded-lg font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-all duration-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Search Bar */}
        {notes.length > 0 && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="🔍 Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-white/30 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-200 text-gray-800 placeholder-gray-500"
            />
          </div>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-white text-2xl opacity-75">
                {searchQuery
                  ? "No notes found"
                  : "No notes yet. Start creating!"}
              </p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.id}
                className={`bg-gradient-to-br ${note.color} rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 break-words flex-1">
                    {note.title}
                  </h3>
                </div>
                {note.content && (
                  <p className="text-gray-700 mb-4 whitespace-pre-wrap break-words">
                    {note.content}
                  </p>
                )}
                <div className="text-xs text-gray-600 mb-4">
                  📅 {note.createdAt}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => editHandler(note)}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => removeHandler(note.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notes Count */}
        {notes.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-white text-lg opacity-75">
              {filteredNotes.length}{" "}
              {filteredNotes.length === 1 ? "note" : "notes"}
              {searchQuery && ` found for "${searchQuery}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
