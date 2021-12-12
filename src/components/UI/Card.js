import React from 'react';
import './Card.css';

const Card = (props) => {
    // adds multiple class name to our div.
    const classes = `card ${props.className}`;
    return <div className={classes}>{props.children}</div>;
}

export default Card;