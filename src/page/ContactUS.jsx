import React from 'react'

import { useState } from 'react'

import { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContextProvider'

const ContactUS = () => {


  
const value = useContext(ThemeContext)
const {theme, Toggle} = value
console.log(value)

  return (
    
<div  style={{backgroundColor: theme ? "lightpink" :"Violet", height:"100vh"}}>
  
  
<div><h1>Mandar Hajare</h1></div>
<img src="https://img.stablecog.com/insecure/1024w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNGVjMTVlYTQtMzRhOC00ZTVjLThjYWQtNGU5NzJhYTVhOTcxLmpwZWc.webp" alt="" style={{width:"80%", background:"Green"}}/>

  
    </div>
  )
}

export default ContactUS