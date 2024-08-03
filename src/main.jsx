import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import './App/App.css'
import BmiCalculator from './BMI/BmiCalculator.jsx'
import validateForm from '../validateForm.jsx'
import About from './AboutUs/AboutUs.jsx'
import NavBar from './NavBar/NavBar.jsx'
import Form from './Form/form.jsx'
import Testimonials from './Testimonials/testimonials.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <About />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
