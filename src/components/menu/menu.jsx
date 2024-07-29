import React, { useEffect, useState } from 'react'
import './menu.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

function Menu(props) {
  const [open, setOpen] = useState(false);
  const [showBurguer, setShowBurguer] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adiciona o event listener para o resize
    window.addEventListener('resize', handleResize);
    
    if(windowSize.width < 768){
      setShowBurguer(true)
      console.log(windowSize)
     
    }else{
     
      setShowBurguer(false)
    }
    // Remove o event listener na desmontagem do componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [windowSize]);


  function openBurguer(){
    setOpen(!open)
  }


  return (<>
    <div className={props.white ? "containerMenu fontWhite" : "containerMenu" }>
      
      {showBurguer && (
        <div className= "menuHamburguer " onClick={openBurguer} style={showBurguer ? {display: 'flex'}: {display: 'none'}}>
        <RiMenu2Fill/>
        </div>
      )}

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