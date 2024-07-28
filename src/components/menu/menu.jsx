import React from 'react'
import './menu.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

function Menu(props) {
  return (
    <div className={props.white ? "containerMenu fontWhite" : "containerMenu" }>
      <div className="menuHamburguer">
      <RiMenu2Fill />
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
          <div className="linkMenuHamburguer">
            <a href="#beneficios">o que fazemos</a>
            <a href="#ajudamos">como te ajudamos</a>
            <a href="#falaconosco">fale conosco</a>
          </div>
    </div>
  )
}

export default Menu