import React, { useState } from "react";
import Card from "./Card";
import "./Content.css";

const colorString = "0123456789abcdef";

let cards = [];

const generateColors = () => {
    const lenOfColorString = colorString.length;
    let color = "#";
    for (var i = 0; i < 6; i++) {
        const random = parseInt(Math.random() * lenOfColorString);
        color += colorString[random];
    }
    return color;
};

const generateCard = () => {
    cards = [];
    for (var i = 0; i < 60; i++) {
        const col1 = generateColors();
        const col2 = generateColors();
        cards.push({ ind: i, color1: col1, color2: col2 });
    }
};

generateCard();

const Content = () => {
    const [colours, setColours] = useState(cards);

    const setTheState = () => {
        setColours(cards);
    };

    return (
        <div>
            <div className="button-box">
                <button
                    className="button"
                    onClick={() => {
                        generateCard();
                        setTheState();
                    }}
                >
                    Click to Refresh the Gradients
                </button>
            </div>
            <div className="content-body">
                {colours.map((curEl) => (
                    <Card key={curEl.ind} color1={curEl.color1} color2={curEl.color2} />
                ))}
            </div>
        </div>
    );
};

export default Content;
