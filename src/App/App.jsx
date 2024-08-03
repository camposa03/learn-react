import About from '../AboutUs/AboutUs.jsx'
import Form from '../Form/form.jsx'
import NavBar from '../NavBar/NavBar.jsx';
import Testimonials from '../Testimonials/testimonials.jsx';



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

  let merch = [

    {
      id: 1,
      name: "T-Shirt",
      description: "chest logo with graphic",
      price: "25.99",
      image: ""
    },
    {
      id: 2,
      name: "Sweatshirt",
      description: "chest logo graphic",
      price: "25.99",
      image: ""
    },
    {
      id: 3,
      name: "Hoodie",
      description: "chest logo and graphic",
      price: "25.99",
      image: ""
    },
    {
      id: 4,
      name: "Shirt 2",
      description: "chest logo and graphic #2",
      price: "25.99",
      image: ""
    },
    {
      id: 5,
      name: "Sweatshirt 2 ",
      description: "chest logo with graphic #2",
      price: "25.99",
      image: ""
    },
    {
      id: 6,
      name: "Shorts",
      description: "logo and text",
      price: "25.99",
      image: ""
    },
    {
      id: 7,
      name: "Sweats",
      description: "logo and text",
      price: "25.99",
      image: ""
    },
    {
      id: 8,
      name: "Shorts 2",
      description: "logo and text",
      price: "25.99",
      image: ""
    },
    {
      id: 9,
      name: "Womans T-Shirt",
      description: "chest logo with graphic",
      price: "25.99",
      image: ""
    },
    {
      id: 10,
      name: "Womans Top",
      description: "logo",
      price: "25.99",
      image: ""
    },
    {
      id: 11,
      name: "Womans Spandex",
      description: "pattern and logo",
      price: "25.99",
      image: ""
    },
    {
      id: 12,
      name: "Woman Spandex",
      description: "pattern and logo",
      price: "25.99",
      image: ""
    },
    {
      id: 13,
      name: "Socks",
      description: "chest logo with graphic (white)",
      price: "25.99",
      image: ""
    },
    {
      id: 14,
      name: "Socks 2",
      description: "logo",
      price: "25.99",
      image: ""
    },
    {
      id: 15,
      name: "Cap",
      description: "logo",
      price: "25.99",
      image: ""
    },
    {
      id: 16,
      name: "Cap 2",
      description: "text",
      price: "25.99",
      image: ""
    },

  ]


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
      <NavBar />
      <About data={names} />
      <Testimonials />
      <Form /> /*/didn't import bmi calculator because it is imported in our form/*/
      {/* <Merchandise /> */}










    </>

  );



}


export default App;