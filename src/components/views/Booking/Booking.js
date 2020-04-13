import React from 'react';

const Booking = (props) => {
  const id = props.match.params.id;
  return(
    <div className='component'>
      <h2>Booking view</h2>
      <p>{id}</p>
    </div>
  );
};

export default Booking;
