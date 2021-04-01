import React from 'react'
import css from './Card.module.css'


export const Card = (props) => {
    const {image, name, description, price, quantity, kkal} = props
    return      <div className={css.block1}>
           <img src={image}  alt=""/>
           <h3>{name}</h3>
           <h5>{description}</h5>
           <h2 >{price}</h2>
           <h5>{quantity}</h5>
           <h4>{kkal}</h4>
           <div className={css.block2}
            >
               <button>-</button>
               <span><br/>1</span>
               <button>+</button>
            </div>
            <div className={css.block3}><button>Добавить в корзину</button></div>
     </div>
   }