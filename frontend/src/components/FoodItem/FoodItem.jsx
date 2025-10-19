import React from 'react'
import './FoodItem.css'
import { assets } from '../../Images/assets'

function FoodItem({ id, name, price, description, image }) {
    return (
        <div className='food-item'>
            <div className='item-img-container></item-img-container'>
                <img className='foot-item-image' src={image} alt="" />
            </div>

            <div className='foot-item-info'>
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>

                <p className='food-item-decription'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>

        </div>
    )
}

export default FoodItem
