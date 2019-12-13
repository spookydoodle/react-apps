import React, { Component } from 'react';
import './Square.css';

function Square(props) {
    let img;
    props.value ? img = `img/${props.value}.jpg` : img = null;
    let classCurrent = props.current ? 'current' : ''
    const classes = `square ${classCurrent}`;
    
    return (
        <button 
            className={classes}
            onClick={props.onClick}
        >
            {/* {props.value} */}
            <img 
                className="img-player"
                src={img}
                alt={props.player}
            />
        </button>
    )
}


export default Square;