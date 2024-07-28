import React from 'react'
import './footer.css'
import Menu from '../menu/menu'

function Footer() {
  return (
    <div className="containerFooter">
      <div className="menuFotter"><Menu white/></div>  
      <div className="nextlatter">
        <span>Receba as novidades da borges</span>
        <div className="inputButton">
          <input type="email" name="" id="" placeholder='email@email.com.br'/>
          <button className=' btn btn-white' type="button">Inscrever</button>
        </div>
      </div>
      <hr />
      <p className='direitos'>Borges template by @willianborges  on Figma - 2024</p>
    </div>
  )
}

export default Footer