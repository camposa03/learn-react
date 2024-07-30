import React from 'react'
import '../AboutUs/AboutUs.css'



function About(props) {
  console.log(props.data)
  return (

    <div className="about">
      <h1>About Us</h1>
      <p>Here at Sacred Visionaries, we pride ourselves in personal growth through fitness! We understand that your journey is unique. <br />
        Redefining your physical, mental, and spiritual relationships isn't easy. That's what we're here for! To guide those willing to <br />
        change their lives. From begginer to advanced, weights or calisthenics, and mindset to nutrition, we can help!<br />
      </p>

      <h1>Our Methods</h1>
      <p>As Sacred Visionaries, our team combines fitness with mindset to inspire those on the path of self-development. Our methods include:<br /></p>
      <ul className='methodList'>
        <li>Fitness/</li>
        <li>Nutrition/</li>
        <li>Mindset coaching/</li>
        <li>Music/</li>
        <li>Positive community</li>
      </ul>

      <br />

      {props.data.map(item => {
        return <>
          <h1>{item.name}</h1>
          <p>{item.experience}</p>
          <p>{item.about}</p>
        </>
      })}








    </div>
  );

}


export default About