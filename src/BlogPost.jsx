import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'
import './index.css'

function BlogPost(props) {
    return (
      <div className="blog-post">
        <h2>{props.title}</h2>
        <p>By: {props.author}</p>
        <p>Date: {props.date}</p>
        <div className="content">{props.content}</div>
      </div>
    );
  }
  
  // Example usage:
  const post = {
    title: "My Fitness Journey",
    author: "Jesus P.",
    date: "June 10, 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };
  

  export default BlogPost