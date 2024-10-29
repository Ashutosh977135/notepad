import React, { useState, useEffect } from "react";
import { FiPlus, FiTrash2, FiEdit } from "react-icons/fi";

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
   

  // Helper function to format the current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString(); // e.g., "10/30/2024, 2:50 PM"
  };

  const handleClick = () => {
    alert("Do you want to save this note!");
  };

  // Load notes from local storage when component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Update local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = () => {
    if (noteText.trim()) {
      const newNote = { text: noteText, date: getCurrentDate() };
      setNotes([newNote, ...notes]);
      handleClick();
      setNoteText("");
      setIsAddingNote(false);
    }
  };

  // Update an existing note
  const saveEditedNote = () => {
    const updatedNotes = notes.map((note, index) =>
      index === editingIndex ? { ...note, text: noteText } : note
    );
    setNotes(updatedNotes);
    setEditingIndex(null);
    setNoteText("");
  };

  // Start editing a note
  const editNote = (index) => {
    setEditingIndex(index);
    setNoteText(notes[index].text);
    setIsAddingNote(true);
  };

  // Delete a note by index
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };


  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md h-full max-h-[90vh] p-4 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center border-b pb-2 mb-4">
          <h1 className="text-xl font-bold">Notebook</h1>
          <button
            onClick={() => {
              setIsAddingNote(true);
              setEditingIndex(null);
              setNoteText("");
            }}
            className="text-blue-500 hover:text-blue-700"
          >
            <FiPlus size={24} />
          </button>
        </header>

        {/* Conditional Rendering */}
        {isAddingNote ? (
          <div className="flex flex-col flex-1">
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Type your note here..."
              className="flex-1 p-3 border border-gray-300 rounded-lg outline-none resize-none mb-4"
              rows={6}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsAddingNote(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={editingIndex !== null ? saveEditedNote : addNote}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {editingIndex !== null ? "Update" : "Save"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-2 border-t pt-2">
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <div
                  key={index}
                  className="p-3 bg-yellow-100 rounded-lg shadow-sm text-gray-800 flex justify-between items-start"
                >
                  <div>
                    <p>{note.text}</p>
                    <small className="text-gray-500 text-sm">{note.date}</small>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editNote(index)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      onClick={() => deleteNote(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center">
                No notes yet. Start adding some!
              </p>
            )}
          </div>
        )}
         <textarea></textarea>
      </div>
    </div>
  );
}

export default Notebook;
