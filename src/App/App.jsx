import About from '../AboutUs/AboutUs.jsx'
import Form from '../Form/form.jsx'
import NavBar from '../NavBar/NavBar.jsx';
import Testimonials from '../Testimonials/testimonials.jsx';
import Merchandise from '../Merch/merch.jsx';



function App() {
  let names = [
    {
      name: "martin",
      experience: "military",
      about: "father"
    },
    {
      name: "rudy",
      experience:"trainer",
      about: "trainer"
    },
    {
      name: "sam",
      experience: "nutrition, personal training",
      about: "",
    },
    {
      name: "joey",
      experience: "personal training",
      about: "",
    },
    {
      name: "jesse",
      experience: "sales, coding",
      about: "dj"
    }
  ]

    return (
      <>
      <NavBar />
      <About data={names}/>
      <Testimonials />
      <Form /> /*/didn't import bmi calculator because it is imported in our form/*/
      {/* <Merchandise /> */}
      

        
      






      </>

    );

  

}


export default App;