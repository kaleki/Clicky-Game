import React from "react";
import "./Header.css";

const Header = props => (
    <div className = "header">
        <div className = "title">
           {props.children} 
        </div>
        <div className = "score">
            Score: {props.score}/ Highscore: 16 {props.highscore}
        </div>
    </div>
);

export default Header;