import React from 'react'
import css from '../Card/Card.module.css'
import {Card} from '../Card'
import img1 from '../images/prod1.jpg'
import img2 from '../images/prod2.jpg'
import img3 from '../images/prod3.jpg'
import img4 from '../images/prod4.jpg'


export const Main = () => {
    const data = [
    { 
      imageUrl: img1,
      name: 'УНАГИ УРАМАКИ',
      description: 'угорь, авокадо, сливочный сыр, огурец, соус унаги, кунжут',
      price: "1900.00 ТГ",
      quantity: "8 штук",
      kkal: 'Калорийность Ккал: 298'
    },
    {
    
      imageUrl: img2,
      name: 'МАДРИД РОЛЛ',
      description: 'Лосось, авокадо, спайси соус, перец чили, икра тобико.',
      price: "1100.00 ТГ",
      quantity: "8 штук",
      kkal: 'Калорийность Ккал: 275'
    },
    {       
      imageUrl: img3,
      name: 'ТЕПЛАЯ КРЕВЕТКА С МОЦАРЕЛЛОЙ',
      description: 'Теплый ролл - Креветка, тамаго, огурец, сливочный сыр, икра тобико, сыр моцарелла.',
      price: "1700.00 ТГ",
      quantity: "8 штук",
      kkal: 'Калорийность Ккал: 257'
    },
    {
    
      imageUrl: img4,
      name: 'ФРЕШ РОЛЛ С БАКЛАЖАНОМ',
      description: 'Рисовая бумага, лист салата, баклажан в чесночном соусе, помидор',
      price: "550.00 ТГ",
      quantity: "6 штук",
      kkal: 'Калорийность Ккал: 235'
    }
  ]
  return ( 
    <div className={css.main}>
      {
        data.map((el,id) => {
          return <Card
          image={el.imageUrl}
          name={el.name}
          description={el.description}
          price={el.price}
          quantity={el.quantity}
          kkal={el.kkal}
          key={id}
          />
        })
      }
     
    </div>
  );
}