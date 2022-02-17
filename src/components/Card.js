import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card-body">
            <div className="card-part1">
                <div
                    className="gradient-box"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${props.color1}, ${props.color2})`,
                    }}
                ></div>
            </div>
            <div className="card-part2">
                <span
                    style={{
                        backgroundImage: `linear-gradient(to right, ${props.color1}, ${props.color2})`,
                    }}
                >
                    {props.color1} - {props.color2}
                </span>
            </div>
        </div>
    );
};

export default Card;
