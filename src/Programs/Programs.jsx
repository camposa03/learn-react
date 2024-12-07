import React from 'react';
import '../Programs/Programs.css';
import Diet from '../assets/Diet.jpg'
import Lifting from '../assets/Lifting.jpg'
import Calisthenic from '../assets/Calisthenic.jpg'
import GroupFit from '../assets/GroupFit.jpg'

function Programs() {
    return (
        <div className='programs'>

            {/* Introduction Section */}
            <div className='programs-intro'>
                <h1>Our Services</h1>
                <p>Here is a quick summary of our different services and why it might be for you!</p>
            </div>

            {/* Program Sections */}
            <div className='program-section'>
                <img  src={Diet} className='program-image' />
                <h1>Nutrition</h1>
                <p>You can never out-train a bad diet, as it is just as important as physical exercise! Get your eating habits right with our tasty, yet effective meal plans!</p>
            </div>

            <div className='program-section'>
                <img src={Lifting} className='program-image' />
                <h1>Weight Training</h1>
                <p>Weight-Training is a way to get your body moving! Weight loss or muscle gain, it doesn't matter! Our Weight-Training programs are designed (along with our Nutrition Program) to achieve your ideal physique.</p>
            </div>

            <div className='program-section'>
                <img src={Calisthenic} className='program-image' />
                <h1>Calisthenics</h1>
                <p>A great alternative to our Weight-Training program! Calisthenics is exercising using little to no equipment! Such as, your own bodyweight. Another fun way to achieve your personal physique goals!</p>
            </div>

            <div className='program-section'>
                <img src={GroupFit} className='program-image' />
                <h1>Group Discussions</h1>
                <p>Using religious/spiritual/philosophical topics, our mission is to help you build a better relationship with yourself, family, friends, and God. We believe those who lift themselves can lift others, creating a strong (but safe) community!</p>
            </div>

        </div>
    );
}

export default Programs;
