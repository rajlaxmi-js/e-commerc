import React, {useEffect,useState} from "react"
import Product from "./assets/product";
import Navbar from "./assets/Navbar"

const App = () => {
  const [data,setdata]= useState([]);
  const [filterdata,setfilterdata]= useState([])
  const [cart,setcart] = useState([])
  async function fetching(){
    const response = await fetch('./data.json');
    const Fdata = await response.json();
    setdata(Fdata)
    
  }
  useEffect(()=>{
    setTimeout(()=>{
      fetching()

    },1000)
  },[])
  return (
    <div>
      <Navbar data ={data} setfilterdata ={setfilterdata} cart={cart} setcart={setcart}></Navbar>
  
  {    filterdata.map((card)=>{
    return <Product card = {card} cart={cart} setcart={setcart}></Product>
        
      })}
    </div>
  )
}

export default App
