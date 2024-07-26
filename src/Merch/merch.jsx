import React from 'react'
import './merch.css'


const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-prices-new'>
                    ${props.new_price}
                </div>
                <div className='item-prices-old'>
                    {props.old_price}
                </div>
            </div>
        </div>
    )
}


const CurrentCollections = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {NewCollections.map((item, i) => {
                    return <Items key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}






// function Merchandise () {

//     return (







//     const merchandiseList = ({ items }) => {
//         <div className="merch-list">
//             {items.map(item => (
//                 <merchandiseItem key={item.id} item={item}/>
//             ))}
//         </div>
//     }



//     const merchandiseSection =({ title, items }) => {
//         return (
//             <section className='merch-section'>
//                 <h2>{title}</h2>
//                 <merchandiseList items={items}/>
//             </section>
//         )
//     }

// )
// }
// export default Merchandise