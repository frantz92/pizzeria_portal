import React from 'react';
import { Link } from 'react-router-dom';

const Tables = ({ bookingId = 'Booking_1', eventId = 'Event_1' }) => (
  <div className='component'>
    <h2>Tables view</h2>
    <Link to={`/tables/booking/${bookingId}`}>Booking</Link>
    <Link to={`/tables/event/${eventId}`}>Event</Link>
  </div>
);

export default Tables;
