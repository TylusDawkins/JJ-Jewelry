import './Nav.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
      <div className='nav'>
        <img id="logo" src='https://i.imgur.com/Eyrlsnk.jpeg'/>
        <div className="list">
            <Link to='/shop' className='link'>Shop Here!</Link>
            <Link to='aboutus' className='link'>About Us</Link>
            <Link to='contact' className='link'>Contact us</Link>
            <Link to='additem' className='link'>Add Item</Link>
            </div>
      </div>
    );
  }
  
  export default Nav;