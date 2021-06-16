import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RestaurantContextProvider } from './context/restaurant-context';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <RestaurantContextProvider>
        <App />
      </RestaurantContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
