import React from 'react';
import '../AboutUs/AboutUs.css';

function About(props) {
  const teamMembers = [
    {
      id: 0,
      name: "martin",
      experience: "military",
      about: "father",
    },
    {
      id: 1,
      name: "rudy",
      experience: "trainer",
      about: "church",
    },
    {
      id: 2,
      name: "jesse",
      experience: "sales, coding",
      about: "dj",
    },
  ];

  return (
    <div className="about">
      <div className="mission">
        <h1>About Us</h1>
        <p>
          Here at Sacred Visionaries, we pride ourselves in personal growth through fitness!
          We understand that your journey is unique. <br />
          Redefining your physical, mental, and spiritual relationships isn't easy. That's what we're here for!
          To guide those willing to <br />
          change their lives. From beginner to advanced, weights or calisthenics, and mindset to nutrition, we can help!<br />
        </p>
      </div>

      <div className="methods">
        <h1>Our Methods</h1>
        <p>
          As Sacred Visionaries, our team combines fitness, mindset, and more to inspire those on the path of self-development.
          Our methods include:<br />
        </p>
        <ul className="methodList">
          <li>Fitness</li>
          <li>Nutrition</li>
          <li>Mindset</li>
          <li>Community</li>
        </ul>
      </div>

      <br />

      <div className="team-intro">
        <h1>Our Team</h1>
        <p>Get to know our team members that can and will provide you with guidance!</p>
      </div>

      <div className="team">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img
              src={`https://via.placeholder.com/150`} // Placeholder for now, replace with actual image URLs
              alt={member.name}
              className="team-photo"
            />
            <h2>{member.name.charAt(0).toUpperCase() + member.name.slice(1)}</h2>
            <p>
              {member.name.charAt(0).toUpperCase() + member.name.slice(1)} is a {member.experience} who is also a proud {member.about}.
              They use their experiences to inspire and motivate others!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
