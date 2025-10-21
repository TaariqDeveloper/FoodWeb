import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../Images/assets'
import { StoreContext } from '../Context/StoreContext';

function FoodItem({ id, name, price, description, image }) {
    // const [itemCount, setItemCount] = useState(0);
    const { cartItems, AddToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className='item-img-container'>
                <img className='foot-item-image' src={image} alt="" />
                {
                    !cartItems[id] ?
                        <img className="add" onClick={() => AddToCart(id)} src={assets.add_icon} alt="" /> :
                        <div className="food-item-counter">
                            <  img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img onClick={() => AddToCart(id)} src={assets.add_icon_green} alt="" />

                        </div>
                }
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
