import React, { Component } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import './App.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}

export default App;
