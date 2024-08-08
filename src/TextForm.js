import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(''); // Initialize with an empty string
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoCase = () => {
        let newText = text.toLowerCase(); // To convert Lower Case
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };


    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="d-flex">
                    <button type="button" className="btn btn-primary mx-2" onClick={handleUpCase}>ToUppercase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleLoCase}>ToLowercase</button>
                </div>
            </div>
        </div>
    );
}
