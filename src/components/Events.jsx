import { useState } from 'react';
// import './App.css';
import EventList from './EventList';
import EventForm from './EventForm';
import image1 from "../images/6.jpeg"
// import image2 from "../images/child.jpg"
// import image3 from "../images/children.jpg"
// import image4 from "../images/cbg.jpg"



const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      description:
        'Join us for Event 1, where we come together to make a positive impact on the lives of needy children. Your support in the form of funds, food, and more is greatly appreciated!',
      date: '2023-10-10',
      location: 'Location 1',
    },
    {
      id: 2,
      title: 'Event 2',
      description:
        'Event 2 is a wonderful opportunity to make a difference. Let\'s unite to provide hope and nourishment to those in need. Your contributions matter!',
      date: '2023-10-15',
      location: 'Location 2',
     
    },
    {
      id: 3,
      title: 'Event 3',
      description:
        'At Event 3, we focus on empowering the future generation. Together, we can ensure a brighter tomorrow for underprivileged children. Join us on this mission!',
      date: '2023-10-20',
      location: 'Location 3',
    
    },
  ]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

return (
    <>
    <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${image1})`,
          height: "75vh",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className=" px-6 text-center text-white md:px-12">
              <h1 className="mb-6 lg:text-8xl ssm:text-5xl font-bold">
              Upcoming Events
              </h1>
              
              
            </div>
          </div>
        </div>
        </div>
    <div className="bg-gray-100 min-h-screen">
     
    <div className="container mx-auto py-12">
  <h1 className="text-3xl font-bold text-center mb-8">Our Events</h1>
  <div className="flex flex-col lg:flex-row">
    <div className="flex-1 mb-4 lg:mr-4"> {/* This will be the EventList */}
      <EventList events={events} />
    </div>
    <div className="flex-1 lg:ml-48"> {/* This will be the EventForm */}
      <EventForm addEvent={addEvent} />
    </div>
  </div>
</div>

    </div>
    </>
  );
};

export default Events;