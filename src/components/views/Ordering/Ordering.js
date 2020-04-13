import React from 'react';
import {Link} from 'react-router-dom';

const Ordering = ({orderId='Order_1'}) => (
  <div className='component'>
    <h2>Ordering view</h2>
    <Link to='/ordering/new'>New</Link>
    <Link to={`/ordering/order/${orderId}`}>Order</Link>
  </div>

);

export default Ordering;
