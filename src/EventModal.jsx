import React from 'react';
import './EventModal.css';

const EventModal = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        
        <div className="modal-header">
          <h2>{event.title}</h2>
        </div>
        
        <div className="modal-body">
          <div className="event-detail">
            <strong>Date:</strong>
            <p>{event.date}</p>
          </div>
          
          <div className="event-detail">
            <strong>Time:</strong>
            <p>{event.time}</p>
          </div>
          
          <div className="event-detail">
            <strong>Location:</strong>
            <p>{event.location}</p>
          </div>
          
          <div className="event-detail">
            <strong>Description:</strong>
            <p>{event.description}</p>
          </div>
          
          {event.organizer && (
            <div className="event-detail">
              <strong>Organizer:</strong>
              <p>{event.organizer}</p>
            </div>
          )}
          
          {event.capacity && (
            <div className="event-detail">
              <strong>Capacity:</strong>
              <p>{event.capacity} attendees</p>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
