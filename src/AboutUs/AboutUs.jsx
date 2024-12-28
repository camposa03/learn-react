import React from 'react';
import '../AboutUs/AboutUs.css';

function About(props) {
  const teamMembers = [
    {
      id: 0,
      name: "Each Step",
      experience: "",
      about: "iRGO Roofing will walk with you through each step of the process. From insurance claims, to a complete reinstallation, we are here.",
    },
    {
      id: 1,
      name: "Know Your Roof",
      experience: "",
      about: "Understand the components of your roof, as well as different roofing types.",
    },
    {
      id: 2,
      name: "Blog",
      experience: "",
      about: "Read our blog, which covers a variety of topics that allows you to understand different aspects of the industry!",
    },
  ];

  return (
    <div className="about">
      <div className="mission">
        <h1>Our Identity</h1>
        <p>
          Welcome to iRGO Roofing, your trusted partner in roofing, construction, and solar services in El Paso, Texas, New Mexico and surrounding areas. We are a family-owned and operated company, proudly licensed and bonded. With over 20 years of industry experience, we've established ourselves as the #1 leading roofing contractor in the region.
        </p>
      </div>

      <div className="methods">
        <h1>We Are The Standard.</h1>
        <p>
          At iRGO Roofing, our work is more than just a job—it’s a commitment to our clients. We are dedicated to delivering the highest quality craftsmanship while maintaining unparalleled customer service.
        </p>
        <ul className="methodList">
          <li>Licensed</li>
          <li>Bonded</li>
          <li>Insured</li>
          <li>Preferred Contractor</li>
          <li>20+ Yrs Industry Experience</li>
        </ul>
      </div>

      <br />

      <div className="team-intro">
        <h1>Guidance & Knowledge</h1>
        <p>Our values of honor and trust guide everything we do, ensuring that each project is completed to the highest standards.This dedication has earned us the distinct honor of being recognized as the number one roofer in El Paso, TX. and New Mexico. We take pride in the trust our clients place in us, and we strive to exceed their expectations with every project.</p>
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
              {member.about}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
