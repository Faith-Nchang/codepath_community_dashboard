import React from 'react';
import './Event.css';

const Event = ({ image, name, country, link, date }) => {
    return (
        <div className="event">
            <img src={image} alt={name} />
            <div className="event-content">
                <h2 className="event-name">{name}</h2>
                <p className="event-country">{country}</p>
                <p>{date}</p>
                <button className="event-button"><a href={link} target="_blank" rel="noopener noreferrer" className="event-link">

                    More Info
                    </a></button>
                
            </div>
        </div>
    );
};

export default Event;