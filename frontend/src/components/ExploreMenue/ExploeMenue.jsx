import React from 'react'

import './ExploreMenue.css'
import { menu_list } from '../../Images/assets'


function ExploeMenue() {
    return (
        <div className='explore-Menu' id='explore-menu'>

            <h1>Explore our menu</h1>
            <p className='explore-Menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, earum cumque unde possimus similique assumenda fugiat. Recusandae magnam quae natus.</p>

            <div className='exploreMenu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ExploeMenue
