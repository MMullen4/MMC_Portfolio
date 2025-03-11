import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);
// type assertion for root element 
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <RouterProvider router={router} />
);