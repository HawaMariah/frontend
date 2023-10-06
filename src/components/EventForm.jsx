

import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [event, setEvent] = useState({ title: '', description: '', date: '', location: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.title.trim() !== '' && event.description.trim() !== '' && event.date.trim() !== '' && event.location.trim() !== '') {
      addEvent(event);
      setEvent({ title: '', description: '', date: '', location: '' });
    }
  };

  return (

  <>
 
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl mb-4 font-bold text-center">Add Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Event Description"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="date"
          placeholder="Event Date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Event Location"
          value={event.location}
          onChange={(e) => setEvent({ ...event, location: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:bg-blue-300"
        >
          Add Event
        </button>
      </form>
    </div>
    </>
  );
};

export default EventForm;
