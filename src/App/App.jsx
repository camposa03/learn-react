import { useState } from 'react'
import './App.css'
import Visionaries from '../assets/Visionaries.png'
import '../NavBar/NavBar.css'
import '../AboutUs/AboutUs'
import About from '../AboutUs/AboutUs'
import Form from '../Form/form'


function App() {


    return (
      <>
      <NavBar />
      <About/>
      <Testimonials />
      <Form /> /*/didn't import bmi calculator because it is imported in our form/*/
      

        
      






      </>

    );

  

}


export default App;