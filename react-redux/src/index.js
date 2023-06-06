import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './routes/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/:id",
    element: <Detail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
