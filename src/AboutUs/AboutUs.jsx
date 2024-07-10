import React from 'react'
import '../AboutUs/AboutUs.css'


let teamMartin = [
  "Name: Martin ",
  "Age: ",
  "Experience: ",
  "About me: "
];

let teamRudy = [
  "Name: Rudy ",
  "Age: ",
  "Experience: ",
  "About me: "
];

let teamSam = [
  "Name: Samantha ",
  "Age: ",
  "Experience: ",
  "About me: "
];

let teamJoey = [
  "Name: Joey ",
  "Age: ",
  "Experience: ",
  "About me: "
];

let teamJesse = [
  "Name: Jesse ",
  "Age: ",
  "Experience: ",
  "About me: "
];

<div className="about">
<h1>About Us</h1>
  <p>Here at Sacred Visionaries, we pride ourselves in personal growth through fitness! We understand that your journey is unique. <br />
    Redefining your physical, mental, and spiritual relationships isn't easy. That's what we're here for! To guide those willing to <br />
    change their lives. From begginer to advanced, weights or calisthenics, and mindset to nutrition, we can help!<br />
  </p>

  <h1>Our Methods</h1>
  <p>As Sacred Visionaries, our team combines fitness with mindset to inspire those on the path of self-development. Our methods include:<br />
  <ul className='methodList'>
    <li>Fitness</li>
    <li>Music/Sounds</li>
    <li>Religious/Spiritual practices</li>
    <li>Nutrition</li>
    <li>Mindset coaching</li>
    <li>Positive community</li>
  </ul> <br />
  </p>

<h1>Our Team</h1>
<p>So, who is our team? Meet the first group of Sacred Visionaries. A group dedicated to creating change.</p>
<ul className='teamList'>
  <li>{teamMartin}</li>
  <li>{teamRudy}</li>
  <li>{teamSam}</li>
  <li>{teamJoey}</li>
  <li>{teamJesse}</li>
</ul>
</div>



export default About