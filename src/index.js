import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter} from 'react-router-dom';
import LoginPage from "./view/./page/LoginPage";
import ManagerLoginPage from "./view/./page/ManagerLoginPage";
import ManagementPage from "./view/./page/ManagementPage";
import {RouterProvider} from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/manager",
    element: <ManagerLoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/management",
    element: <ManagementPage />,
    // errorElement: <ErrorPage />,
  },
]);

root.render( <RouterProvider router={router} /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
