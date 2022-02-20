import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Content.css";

const colorString = "0123456789abcdef";
let timeOutDuration = 300000;
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
    const [timer, setTimer] = useState(timeOutDuration);

    useEffect(() => {
        if (timer <= -1) {
            setTimer(timeOutDuration);
            generateCard();
            setTheState();
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const setTheState = () => {
        setColours(cards);
    };

    const resetTimer = () => {
        setTimer(timeOutDuration);
    };

    const refreshAll = () => {
        setTimer(timeOutDuration);
        generateCard();
        setTheState();
    };

    return (
        <div>
            <div className="button-box">
                <button className="button refresh-button" onClick={refreshAll}>
                    <i className="fa fa-refresh"></i> Refresh
                </button>
                <button className="button timer-button" onClick={() => resetTimer()}>
                    Click Here within {timer / 1000} Seconds to stop Refreshing
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
