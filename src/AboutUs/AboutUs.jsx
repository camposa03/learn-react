import React from 'react'
import '../AboutUs/AboutUs.css'
import names from '../App/App.jsx'


function About(props) {
  console.log(props.data)
  return (

    <div className="about">
      <div className='mission'>
      <h1>About Us</h1>
      <p>Here at Sacred Visionaries, we pride ourselves in personal growth through fitness! We understand that your journey is unique. <br />
        Redefining your physical, mental, and spiritual relationships isn't easy. That's what we're here for! To guide those willing to <br />
        change their lives. From begginer to advanced, weights or calisthenics, and mindset to nutrition, we can help!<br />
      </p>
      </div>
      
      <div className='methods'>
      <h1>Our Methods</h1>
      <p>As Sacred Visionaries, our team combines fitness, mindset, and more to inspire those on the path of self-development. Our methods include:<br /></p>
      <ul className='methodList'>
        <li>Fitness</li>
        <li>Nutrition</li>
        <li>Mindset</li>
        <li>Community</li>
        <li>Music</li>
      </ul>
      </div>

      <br />
    
      <div className='team-intro'>
        <h1>Our Team</h1>
        <p>Get to know our team members that can and will provide you with guidance! </p>
      </div>

      <div className='team'>
        <h1>Martin</h1>
        <p>Martin is a proud father that serves in the military. He now uses fitness and spirituality to inspire, as well as motivate others on their physical and mental journey!</p>
        
        <br />

        <h1>Sam</h1>
        <p>Sam is a personal trainer and is certified in nutrition. She utilizes her skills to help achieve your goal, and empower women!</p>

        <br />

        <h1>Rudy</h1>
        <p>Rudy is a personal trainer who serves in the military. He uses his skills along with religion to inspire and motivate others!</p>

        <h1>Joey</h1>
        <p>Joey is a person trainer that specializes in calisthenics, he uses his knowledge along with spirituality to inspire and motivate others!</p>

        <h1>Jesse</h1>
        <p>Jesse is our in-house DJ. To inspire others, he uses his passion of music and fitness, bringing your favorite songs to a unique playlist!</p>



      </div>
    
      {/* function Team() {
        return (
          <div>
            
          </div>
        )
      } */}

{/* 
      { props.data ? props.data.map(item => {
        return <>
          <h1>{item.name}</h1>
          <p>{item.experience}</p>
          <p>{item.about}</p>
        </>
      }): null} */}


    </div>
  );

}


export default About