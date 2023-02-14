import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import "./navbar.scss"
import Cart from '../Cart/Cart';
import {useSelector} from "react-redux";


const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector(state=>state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">

          <Link className="logo" to="/">SHOE STYLE </Link>
          <Link className="link" to="/products/1">Men</Link>
          <Link className="link" to="/products/2">Women</Link>
          <Link className="link" to="/products/3">Kids</Link>
          <Link className="link" to="/products/4">Asscesories</Link>


        </div>

        <div className="right">
          <Link className="link" to="/">Stores </Link>
          <div className="item"> <SearchOutlinedIcon /> </div>
          <div className="item"> <FavoriteBorderOutlinedIcon />  </div>
          <div className="cartIcon"onClick={()=>setOpen(!open)}> <ShoppingBagOutlinedIcon /><span>{products.length}</span></div> 

        </div>

      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar
