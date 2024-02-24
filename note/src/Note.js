import React, { useEffect, useState } from 'react';

const randomColors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];

const Note = ({ note, onRemove }) => {
    const { title, body } = note;
    const [color, setColor] = useState(randomColors[Math.floor(Math.random() * randomColors.length)]);
    const [datetimenow, setDateTime] = useState(new Date().toLocaleString())
  // When

    const noteStyle = {
        backgroundColor: color,
        display: 'inline-block',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        width: '200px' // Optional: Set a fixed width for each note
    };

    return (
        <div style={noteStyle}>
            <h5>{title}</h5>
            <p>{body}</p>
            <p>Created At: {datetimenow}</p>
            <button onClick={() => onRemove(note)}>Remove</button>
        </div>
    );
};

export default Note;
