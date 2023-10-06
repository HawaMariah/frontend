
import React from 'react';
import eventImage from '../images/children1.jpg';


const EventList = ({ events }) => {
  return (
    <>
    <div className=" mx-auto py-8">
      <h2 className="text-4xl mb-4 font-bold text-center">Event List</h2>
      <ul className="space-y-8">
        {events.map((event) => (
          <li key={event.id}>
            <div className="flex items-center ">
              <img src={eventImage} alt={`Event ${event.id}`} className="w-35 h-32 rounded-md mr-6" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="mb-2">Date: {event.date}</p>
                <p className="mb-4">Location: {event.location}</p>
                <p className="w-[400px]">{event.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default EventList;
