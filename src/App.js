import React, { useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Homepage from './Homepage.js'
import Schedule from './components/Schedule.js'
import Dealroom from './components/DealroomPage.js'


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/dealroom",
      element: <Dealroom />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
