// App.js
import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';


const NoteApp = () => {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes([...notes, { ...note, id: Date.now() }]);
    };

    const removeNote = (noteToRemove) => {
        setNotes(notes.filter((note) => note !== noteToRemove));
    };



    return (
        <div>

            <table>
                <tr>
                    <td >
                        <h3> Notes</h3></td>
                </tr>
                <tr>
                    <td> <NoteForm onSubmit={addNote} /></td>
                    <td style={{ width: "2000px" }}>   <NoteList notes={notes} onRemove={removeNote} /></td>
                </tr>
            </table>

        </div>
    );
};

export default NoteApp;
