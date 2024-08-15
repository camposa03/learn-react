import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Visionaries from '../assets/Visionaries.png'
import About from '../AboutUs/AboutUs.jsx'
import Form from '../Form/form.jsx'
import NavBar from '../NavBar/NavBar.jsx';
import Testimonials from '../Testimonials/testimonials.jsx';
import Programs from '../Programs/Programs.jsx';
import Home from '../Home/home.jsx';




function App() {
  let names = [
    {
      id: 0,
      name: "martin",
      experience: "military",
      about: "father"
    },
    {
      id: 1,
      name: "rudy",
      experience: "trainer",
      about: "church"
    },
    {
      id: 2,
      name: "sam",
      experience: "nutrition, personal training",
      about: "",
    },
    {
      id: 3,
      name: "joey",
      experience: "personal training",
      about: "",
    },
    {
      id: 4,
      name: "jesse",
      experience: "sales, coding",
      about: "dj"
    }
  ];



  let programs = [
    {
      Program: "Nutrition",
      Description: "You can never out-train a bad diet, as it is just as important as physical exercise! Get your eating habits right with our tasty, yet effective meal plans!"
    },
    {
      Program: "Weight-Training",
      Description: "Weight-Training is a way to get your body moving! Weight loss or muscle gain, it doesn't matter! Our Weight-Training programs are designed (along with our Nutrition Program) to achieve your ideal physique."
    },
    {
      Program: "Calisthenics",
      Description: "A great alternative to our Weight-Training program! Calisthenics is exercising using little to no equipment! Such as, your own bodyweight. Another fun way to achive your personal physique goals!"
    },
    {
      Program: "Group Discussions",
      Description: "Using religious/spiritual/philisophical topics, our mission is to help you build a better relationship with yourself, family, friends, and God. We believe those who lift themselves can lift others, a strong (but safe) community!"
    },
    {
      Program: "Mindset Coaching",
      Description: "In order to change your life, your need to changet your mind(set)! building different habits, while unlearning old ones. Perspective will take you a long way. This will set you on a new routine that can shape the way you live! "
    },
    {
      Program: "Music",
      Description: "Music heals, and we utilize this tool to do exactly that! From your favorite tunes, to ones suggested by our peers, personalized playlists and live mixes from our in-house DJ give us that extra boost we need throughout our day."
    },
  ]

  return (
    <>
      <Router>
        <Routes>
          <Route element={Visionaries} />
          <Route element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/About-us" element={<About />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/Contact" element={<Form />} />
          </Route>


        </Routes>
      </Router>
    </>
  );

}

export default App;