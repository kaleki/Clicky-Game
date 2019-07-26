import React from "react";
import "./Header.css";

const Header = props => (
    <div className = "header">
        <div className = "title">
           {props.childern} 
        </div>
        <div className = "score">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>
);

export default Header;