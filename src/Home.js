import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Gc from './Gc'
import './Home.css'
let Home=()=>{
  let gobj=useContext(Gc)
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{setData(res.data.products)}).catch((err)=>{console.log(err)})
  },[])


  return(
    <div >
      {
        data.map((item,index)=>{
            return(
                <div className='container' >
                    <div className='img'><b>images:</b>
                      {
                        item.images.map((url)=><img src={url} alt="not found"/>)
                      }
                    </div>
                <div><b>ID:</b>{item.id}</div>
                <div><b>Title:</b>{item.title}</div>
                <div><b>Description:</b>{item.description}</div>
                <div><b>price:</b>{item.price}</div>
                {/* <button onClick={()=>{gobj.addCart(item)}} className='bt'> AddCart</button> */}
                {/* <button type="button" className="btn btn-secondary btn-lg" onClick={()=>{gobj.addCart(item)}} >addCart</button> */}
                <button type="button" class="btn btn-outline-danger"  onClick={()=>{gobj.addCart(item)}}>AddCart</button>
                </div>
            )
        })
      }
    </div>
  )

}
export default Home;