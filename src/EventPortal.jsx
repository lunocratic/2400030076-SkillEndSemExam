import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import './EventPortal.css';

const EventPortal = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2025',
      date: 'December 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco Convention Center',
      description: 'Join us for the biggest tech conference of the year featuring keynote speakers, workshops, and networking opportunities.',
      organizer: 'Tech Events Inc.',
      capacity: 500
    },
    {
      id: 2,
      title: 'React Workshop',
      date: 'December 20, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Online',
      description: 'Learn advanced React patterns and best practices from industry experts. Hands-on workshop with real-world projects.',
      organizer: 'Dev Academy',
      capacity: 100
    },
    {
      id: 3,
      title: 'Holiday Networking Event',
      date: 'December 22, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Downtown Plaza Hotel',
      description: 'End the year with great connections! Join professionals from various industries for an evening of networking and celebration.',
      organizer: 'Professional Network Group',
      capacity: 200
    },
    {
      id: 4,
      title: 'AI & Machine Learning Summit',
      date: 'January 10, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Innovation Hub',
      description: 'Explore the latest developments in AI and ML. Expert presentations, panel discussions, and live demonstrations.',
      organizer: 'AI Research Foundation',
      capacity: 300
    }
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    // Prevent body scroll when modal opens
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    // Restore body scroll when modal closes
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="event-portal">
      <header className="portal-header">
        <h1>Upcoming Events</h1>
        <p>Discover and join exciting events in your area</p>
      </header>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
            onClick={handleEventClick}
          />
        ))}
      </div>

      <EventModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EventPortal;
