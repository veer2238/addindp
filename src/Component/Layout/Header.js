import React from 'react'
import './App.css'
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = (props) => {
  return (
   <>
    <div className='main'>
  <h2>Vx Men Cloth</h2>
    <Link to="/" style={{textDecoration:"none"}}><h3>Home</h3></Link>
    <Link to="/service" style={{textDecoration:"none"}}><h3>Service</h3></Link>
    <Link to="/contact" style={{textDecoration:"none"}}><h3>Contact</h3></Link>
    <Link to="/about" style={{textDecoration:"none"}}><h3>About</h3></Link>
    <Link to="notification"><NotificationsIcon style={{cursor:"pointer"}}/></Link>
    <Link to="cart"><ShoppingCartIcon style={{cursor:"pointer"}}/>
    <sup> {props.count} </sup></Link>
  <Link to="login"><LoginIcon style={{cursor:"pointer"}}/></Link>

   

    </div>
   </>
  )
}

export default Header