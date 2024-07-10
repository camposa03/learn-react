import React from 'react'
import './merch.css'




const merchandiseItems = [
    {
        id: 1,
        name: "T-Shirt",
        description: "chest logo with graphic",
        price: "25.99",
        image: ""
    },
    {
        id: 2,
        name: "Sweatshirt",
        description: "chest logo graphic",
        price: "25.99",
        image: ""
    },
    {
        id: 3,
        name: "Hoodie",
        description: "chest logo and graphic",
        price: "25.99",
        image: ""
    },
    {
        id: 4,
        name: "Shirt 2",
        description: "chest logo and graphic #2",
        price: "25.99",
        image: ""
    },
    {
        id: 5,
        name: "Sweatshirt 2",
        description: "chest logo with graphic #2",
        price: "25.99",
        image: ""
    },
    {
        id: 6,
        name: "Shorts",
        description: "logo and text",
        price: "25.99",
        image: ""
    },
    {
        id: 7,
        name: "Sweats",
        description: "logo and text",
        price: "25.99",
        image: ""
    },
    {
        id: 8,
        name: "Shorts 2",
        description: "logo and text",
        price: "25.99",
        image: ""
    },
    {
        id: 9,
        name: "Womans T-Shirt",
        description: "chest logo with graphic",
        price: "25.99",
        image: ""
    },
    {
        id: 10,
        name: "Womans Top",
        description: "logo",
        price: "25.99",
        image: ""
    },
    {
        id: 11,
        name: "Womans Spandex",
        description: "pattern and logo",
        price: "25.99",
        image: ""
    },
    {
        id: 12,
        name: "Woman Spandex",
        description: "pattern and logo",
        price: "25.99",
        image: ""
    },
    {
        id: 13,
        name: "Socks",
        description: "chest logo with graphic (white)",
        price: "25.99",
        image: ""
    },
    {
        id: 14,
        name: "Socks 2",
        description: "logo",
        price: "25.99",
        image: ""
    },
    {
        id: 15,
        name: "Cap",
        description: "logo",
        price: "25.99",
        image: ""
    },
    {
        id: 16,
        name: "Cap 2",
        description: "text",
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

export default Merchandise