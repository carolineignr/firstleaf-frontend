import React, { Component } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Countries from './pages/Countries';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="*" element={<NotFound />} />
      <Route path='countries' element={<Countries />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

