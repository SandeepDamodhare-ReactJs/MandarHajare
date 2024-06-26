import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../components/Home'
import Menu from '../page/Menu'
import ContactUS from '../page/ContactUS'
import Login from '../page/Login'
import PrivateRoutes from '../PrivateRoutes'


const Mainroutes = () => {
  return (
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/menu" element={ <Menu/>  }/>
<Route path="/contactus" element={<PrivateRoutes><ContactUS/></PrivateRoutes>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
)
}

export default Mainroutes