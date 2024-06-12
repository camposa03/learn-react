import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'
import './index.css'




const merchandiseItems = [
    {
        id: 1,
        name: "T-Shirt",
        description: "chest logo with graphic back",
        price: "25.99",
        image: ""
    },
    {
        id: 2,
        name: "Bottoms",
        description: "chest logo with graphic back",
        price: "25.99",
        image: ""
    },
    {
        id: 3,
        name: "Cap",
        description: "chest logo with graphic back",
        price: "25.99",
        image: ""
    },
    {
        id: 4,
        name: "T-Shirt 2",
        description: "chest logo with graphic back",
        price: "25.99",
        image: ""
    },

]








const merchandiseItem = ({item}) => {
    return (
        <div className='merch-item'>
            <img src="" alt="" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
        </div>
    );
};






const merchandiseList = ({ items }) => {
    <div className="merch-list">
        {items.map(item => (
            <merchandiseItem key={item.id} item={item}/>
        ))}
    </div>
}



const merchandiseSection =({ title, items }) => {
    return (
        <section className='merch-section'>
            <h2>{title}</h2>
            <merchandiseList items={items}/>
        </section>
    )
}