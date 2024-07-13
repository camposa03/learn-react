import About from '../AboutUs/AboutUs.jsx'
import Form from '../Form/form.jsx'
import NavBar from '../NavBar/NavBar.jsx';
import Testimonials from '../Testimonials/testimonials.jsx';
import Merchandise from '../Merch/merch.jsx';



function App() {


    return (
      <>
      <NavBar />
      <About/>
      <Testimonials />
      <Form /> /*/didn't import bmi calculator because it is imported in our form/*/
      {/* <Merchandise /> */}
      

        
      






      </>

    );

  

}


export default App;