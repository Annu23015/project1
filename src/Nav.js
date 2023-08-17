import {Link} from 'react-router-dom'
import './Nav.css'
let Nav=()=>{
    return(
        <nav>
            <Link to='/' className="ha">Home <div class='line'></div></Link>
            
            <Link to='/Cart' className="ca">Cart <div class='line'></div> </Link>

        </nav>
    )
}
export default Nav;