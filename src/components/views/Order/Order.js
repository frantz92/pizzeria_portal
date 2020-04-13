import React from 'react';

const Order = (props) => {
  const id = props.match.params.id;
  return(
    <div className='component'>
      <h2>Order view</h2>
      <p>{id}</p>
    </div>
  );
};

export default Order;
