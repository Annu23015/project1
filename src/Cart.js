import { useContext } from 'react';
import Gc from './Gc'
import './Cart.css'
let Cart=()=>{
    let gobj=useContext(Gc)

    return(
        <div>
            {
        gobj.cart.map((item,index)=>{
            return(
                <div className='containerC'>
                    <div className='imgC'><b>images:</b>
                      {
                        item.images.map((url)=><img src={url} alt="not found"/>)
                      }
                    </div>
                <div><b>ID:</b>{item.id}</div>
                <div><b>Title:</b>{item.title}</div>
                <div><b>Description:</b>{item.description}</div>
                <div><b>price:</b>{item.price}</div>
                <div><b>quantity:</b> <button type="button" className="btn btn-secondary" onClick={()=>{gobj.inc(index)}}>+</button> <b> {item.qty} </b>    <button type="button" className="btn btn-secondary" onClick={()=>{gobj.dec(index)}}><b>-</b></button> </div>
                <div><b>Total:</b>{item.total}</div>
                {/* <button onClick={()=>{gobj.del(index)}}>delete</button> */}
                <button type="button" class="btn btn-danger" onClick={()=>{gobj.del(index)}}>delete</button>

                
                </div>
            )
        })
      }

       <div className='grandt'>Grand-total-Price:{gobj.gt}</div>     
        </div>
    )
}
export default Cart;