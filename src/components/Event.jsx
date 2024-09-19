import React from 'react';
import './Event.css';


const Event = ({ image, name, country, link }) => {
    return (
        <div className="event">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{country}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
    );
};

export default Event;