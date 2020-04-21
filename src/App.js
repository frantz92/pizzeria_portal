import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Booking from './components/views/Booking/Booking';
import Dashboard from './components/views/Dashboard/Dashboard';
import Event from './components/views/Event/Event';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import New from './components/views/New/NewContainer';
import Order from './components/views/Order/Order';
import Ordering from './components/views/Ordering/Ordering';
import Tables from './components/views/Tables/Tables';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/tables/booking/:id'}
              component={Booking}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={Dashboard}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/tables/event/:id'}
              component={Event}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/kitchen'}
              component={Kitchen}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/login'}
              component={Login}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/ordering/new'}
              component={New}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/ordering/order/:id'}
              component={Order}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/ordering'}
              component={Ordering}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/tables'}
              component={Tables}
            />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
