import React from 'react';

const Event = (props) => {
  const id = props.match.params.id;
  return(
    <div className='component'>
      <h2>Event view</h2>
      <p>{id}</p>
    </div>
  );
};

export default Event;
