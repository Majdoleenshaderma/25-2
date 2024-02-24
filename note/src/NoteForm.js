import './NoteForm.css'
import React, { useState } from 'react';

function NoteForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [reminder, setReminder] = useState('');
    const [color, setColor] = useState('#ffffff');
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((body == '' && body == undefined) || (title == '' || title == undefined)) {
            alert("Please fill out all fields.");
            return;
        }
        onSubmit({ title, body, reminder, color });
        setTitle('');
        setBody('');
        setReminder('');
        setColor(''); // Reset color after submission
    };
    return (<>
        <div>
            <h3> Notes</h3></div>


        <div class="note">
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    id='tit'
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />

                <textarea
                    placeholder="Write Note"
                    id="area" rows="25" cols="50"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />



                <div class="but">
                    <button type="submit" className='b'>Add Note</button>



                </div>
            </form>
        </div></>

    );
}
export default NoteForm;