import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <a href="/" className="header-logo">
                    <div className="l1">Gradi</div>
                    <div className="l2">fy</div>
                </a>
            </div>
            <div className="github-redirect">
                <a
                    href="https://github.com/kunalsrivastav/"
                    title="Go to Developer's Github Account"
                    className="header-github"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fa fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default Header;
