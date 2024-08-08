// src/App.js
import React, { useState } from 'react';
import './App.css';

function BackgroundColor() {
    const [bgColor, setBgColor] = useState('Red');

    const handleBgColorChange = () => {
        const colorMap = {
            'Red': 'white',
            'white': 'lightblue',
            'lightblue': 'lightgreen',
            'lightgreen': 'lightcoral',
            'lightcoral': 'Red'
        };
        setBgColor(colorMap[bgColor]);
    };

    return (
        <div className="buttons">
            <button
                style={{ backgroundColor: bgColor }}
                onClick={handleBgColorChange}
            >
                <h1>Click Me</h1>
            </button>
        </div>
    );
}

export default BackgroundColor;
