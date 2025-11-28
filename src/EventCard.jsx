import React from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <div className="event-card-header">
        <h3>{event.title}</h3>
        <span className="event-date">{event.date}</span>
      </div>
      
      <div className="event-card-body">
        <p className="event-time">
          <span className="icon">🕒</span> {event.time}
        </p>
        <p className="event-location">
          <span className="icon">📍</span> {event.location}
        </p>
      </div>
      
      <div className="event-card-footer">
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default EventCard;
