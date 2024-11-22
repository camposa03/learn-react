import React from 'react';
import '../Testimonials/testimonials.css';

const testimonialsList = [
    {
        id: 0,
        name: "John Doe",
        comment: "Working with Martin has definitely given me a different outlook on life! Not only have I seen massive changes in my body, but my way of thinking has also evolved. Thanks, Martin!",
        beforeImg: "path/to/before1.jpg", // Replace with actual image path
        afterImg: "path/to/after1.jpg" // Replace with actual image path
    },
    {
        id: 1,
        name: "Jane Smith",
        comment: "Rudy has been an inspiration since day one! My relationship with myself and with God has grown massively, and I am forever grateful!",
        beforeImg: "path/to/before2.jpg",
        afterImg: "path/to/after2.jpg"
    },
    {
        id: 2,
        name: "Martin",
        comment: "Sam is a gamechanger! I feel and look way better than 3 months ago. She changed the way I view food and the way I view myself!",
        beforeImg: "path/to/before3.jpg",
        afterImg: "path/to/after3.jpg"
    },
    {
        id: 3,
        name: "Rudy",
        comment: "I never knew calisthenics would be so fun! Yes, it's super challenging, but my body can do things it wasn't able to years ago! Thanks, Joey, for being a great coach!",
        beforeImg: "path/to/before4.jpg",
        afterImg: "path/to/after4.jpg"
    },
    {
        id: 4,
        name: "Jesse ",
        comment: "I never knew calisthenics would be so fun! Yes, it's super challenging, but my body can do things it wasn't able to years ago! Thanks, Joey, for being a great coach!",
        beforeImg: "path/to/before4.jpg",
        afterImg: "path/to/after4.jpg"
    }
];

function Testimonials() {
    return (
        <div className="testimonials">
            <div>
                <h1>Testimonials</h1>
            </div>
            <div className="reviews">
                {testimonialsList.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <div className="testimonial-images">
                            <img
                                src={testimonial.beforeImg}
                                alt={`${testimonial.name}'s before`}
                                className="before-img"
                                onClick={() => window.open(testimonial.beforeImg, '_blank')}
                            />
                            <img
                                src={testimonial.afterImg}
                                alt={`${testimonial.name}'s after`}
                                className="after-img"
                                onClick={() => window.open(testimonial.afterImg, '_blank')}
                            />
                        </div>
                        <p className="testimonial-comment">"{testimonial.comment}"</p>
                        <p className="testimonial-name">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
