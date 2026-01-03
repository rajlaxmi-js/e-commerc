import React from 'react'

const Product = ({card,cart,setcart}) => {
  return (
    <div className='items'>
      <h1>{card.id}</h1>
        <h2>{card.name} </h2>
         <img src={card.image}/>
         <h2>{card.subCategory}</h2>
        <span>Rs.{card.priceCents}</span>
        <button onClick={()=>{
          setcart([...cart,card])
        }}>add cart</button>
        
        <p>{card.keywords}</p>
        

       
            

    </div>
  )
}

export default Product
