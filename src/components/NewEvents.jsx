import React, { useState } from 'react';

const CreateEvent = () => {
  // State to hold form data
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventDescription: '',
    ticketPrice: '',
    venue: '',
    artistImage: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send eventData to server or state management
    console.log(eventData);
    // Reset form after submission if needed
    setEventData({
      eventName: '',
      eventDate: '',
      eventDescription: '',
      ticketPrice: '',
      venue: '',
      artistImage: '',
    });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="eventName">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="eventDate">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="eventDescription">
            Description
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={eventData.eventDescription}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="ticketPrice">
            Ticket Price (Rs)
          </label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            value={eventData.ticketPrice}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="venue">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={eventData.venue}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="artistImage">
            Artist Image URL
          </label>
          <input
            type="url"
            id="artistImage"
            name="artistImage"
            value={eventData.artistImage}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
