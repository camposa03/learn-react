import React from 'react'
import '../AboutUs/AboutUs.css'


function About (props) {
  console.log(props.data)
  return (
    
    <div className="about">
    <h1>About Us {props.name}</h1>
      <p>Here at Sacred Visionaries, we pride ourselves in personal growth through fitness! We understand that your journey is unique. <br />
        Redefining your physical, mental, and spiritual relationships isn't easy. That's what we're here for! To guide those willing to <br />
        change their lives. From begginer to advanced, weights or calisthenics, and mindset to nutrition, we can help!<br />
      </p>

      <h1>Our Methods</h1>
      <p>As Sacred Visionaries, our team combines fitness with mindset to inspire those on the path of self-development. Our methods include:<br /></p>
      <ul className='methodList'>
        <li>Fitness</li>
        <li>Music/Sounds</li>
        <li>Religious/Spiritual practices</li>
        <li>Nutrition</li>
        <li>Mindset coaching</li>
        <li>Positive community</li>
      </ul> <br />

    
      {props.data.map(item=>{
        <h1>{item}</h1>
      })}
  
      <p>test</p>
    
    
    
    
    
    
    </div>
  );
    
}


export default About