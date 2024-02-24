// NoteList.js
import React from 'react';
import Note from './Note';




const NoteList = ({ notes, onRemove }) => {
    return (
        <div>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    onRemove={onRemove}

                />
            ))}
        </div>
    );
};

export default NoteList;
