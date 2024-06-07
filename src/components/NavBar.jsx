import React, { useContext } from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from './ThemeContextProvider';
import { FcSearch } from "react-icons/fc";
import { BsCartPlusFill } from "react-icons/bs";
// import { ThemeContextProvider } from './ThemeContextProvider';
const NavBar = () => {

  const value = useContext(ThemeContext)
  const {theme, Toggle} = value
console.log(value)
  return (
    <DIV  style={{backgroundColor: theme ? "red" :"orange"}} >
        <div className='left'>
<img src="data:image/jpeg;base64,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" alt="" />
<Link to={"/"}><p><div style={{color:"white"}}><h3>HOME</h3></div></p></Link>



<Link to={"/menu"}><p><div style={{color:"white"}}><h3>MY GARAGE</h3></div></p></Link>
<Link to={"/contactus"}><p><div style={{color:"white"}}><h3>CONTACT US</h3></div></p></Link>
        </div>
        <div className='right'>

    {theme ?  <FaMoon color='Black' size={40} onClick={Toggle}/> : <FaSun size={40} color='MediumPurple' onClick={Toggle}/>}      
        
       
<FcSearch  color='red' size={40} />
<BsCartPlusFill  size={40}  />
<Link to={"/login"}><p><button>Login</button></p></Link>
        </div>
    </DIV>
  )
}

export default NavBar;

const DIV = styled.div`
display:flex;
justify-content:space-between;
padding:20px;



.left{
  display:flex;
  gap:20px;
 
}
.left img{
  width:60px;
  height:60px
}
.right{
  display:flex;
  gap:20px;
}
.right button{
  background-color:green;
  color:white;

}

`