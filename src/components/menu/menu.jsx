import React, { useEffect, useState } from 'react'
import './menu.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

function Menu(props) {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(open){
      
    }
  },[open])

  function openBurguer(){
    setOpen(!open)
  }
  return (<>
    <div className={props.white ? "containerMenu fontWhite" : "containerMenu" }>
      <div className= {open ? "menuHamburguer rotate" : "menuHamburguer" } onClick={openBurguer}>
      <RiMenu2Fill/>
      </div>

      <div className="logoMenu">
        <h4>borges</h4>
      </div>

      <div className="menu">
        <div className="linkMenu">
          <a href="#beneficios">o que fazemos</a>
          <a href="#ajudamos">como te ajudamos</a>
          <a href="#falaconosco">fale conosco</a>
        </div>
          <div className="social">
            <FaInstagram />
            <FaFacebookF />
          </div>
      </div>

    </div>
      <div className="linkMenuHamburguer" style={open ? {display: 'flex'}: {display: 'none'}}>
        <a href="#beneficios">o que fazemos</a>
        <a href="#ajudamos">como te ajudamos</a>
        <a href="#falaconosco">fale conosco</a>
      </div>
      </>
  )
}

export default Menu