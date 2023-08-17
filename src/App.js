import {Route,Routes, useNavigate} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Cart from './Cart'
import Gc from './Gc'
import { useState } from 'react'

let App=()=>
{
  let [cart, setcart]=useState([])
  let [gt,setTotal]=useState(0)
  let navi=useNavigate()


  let addCart=(item)=>
  { 
    let ele=cart.filter((prod)=>prod.id===item.id)
    if(ele.length===0){
      setcart([...cart,{...item,"qty":1,"total":item.price}])
      setTotal(gt+item.price)
      
    }
    else
    {
      setcart(
        cart.map((prod)=>{
               if(prod.id===item.id)
                    {
                    return {...prod,"qty":prod.qty+1,"total":prod.total+item.price}
                    }
               else{
                    return prod
                   }
             })
      )
    }
     
    navi('./Cart')
  }
  let inc=(index)=>{
   
      cart[index].qty+=1
    cart[index].total+=cart[index].price
    setTotal(gt+cart[index].price)
    setcart([...cart])

    
    
  }
  let dec=(index)=>{
    if(cart[index].qty>1)
    {
      cart[index].qty-=1
      cart[index].total-=cart[index].price
      setTotal(gt-cart[index].price)
      setcart([...cart])

    }
    
  }
  let del=(index)=>
  {
    setTotal(gt-cart[index].total)
    cart.splice(index,1)
    setcart([...cart])
    
  }

  let gobj={"cart":cart,"addCart":addCart,"inc":inc,"dec":dec,"del":del,"gt":gt}
  return(
    <div>
    <Gc.Provider value={gobj}>
   
    <Nav/>
    <Routes>
      <Route path="/" element={< Home/>}/>
      <Route path="/Cart" element={< Cart/>}/>
    </Routes>
   
   </Gc.Provider>
   </div>
  )

}
export default App;
