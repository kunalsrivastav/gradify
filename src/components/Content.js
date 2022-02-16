import React from "react";
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
        cards.push(<Card key={i} color1={col1} color2={col2} />);
    }
};

const Content = () => {
    generateCard();
    return <div className="content-body">{cards}</div>;
};

export default Content;
