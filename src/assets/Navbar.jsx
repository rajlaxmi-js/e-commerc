import React, { useState } from 'react'

const Navbar = ({data,setfilterdata,cart}) => {

  function filteration (str){
       setfilterdata(data.filter((e)=>{
          return e.category == str
        }))

  }
  return (
    <div className='btn'>
      <button onClick={()=>{
        setfilterdata(data)
      }}>All</button>

      <button onClick={()=>{
        filteration("Home & Kitchen")
     }}>home and kitchen</button>


      <button onClick={()=>{
        filteration("Fashion & Apparel")
      }}>Fashion & Apparel</button>

    
      <button onClick={()=>{
        filteration("Health & Fitness")
      }}>Health & Fitness</button>


        <button onClick={()=>{
        filteration('Electronics & Gadgets')
      }}>Electronics & Gadgets</button>
      <button onClick={()=>{
       
      }}>cart</button>
       <span>{cart.length}</span>
      
    </div>
  )
}

export default Navbar
