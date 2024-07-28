import React from 'react'
import './sectionBeneficios.css'
import { IoMdAddCircle } from "react-icons/io";

function SectionBeneficios() {
  return (
    <div className='containerBeneficios'>
      
      <div className="tituloBeneficios">
        <h3>Um subtitulo para quem rolou até aqui!</h3>
        <hr />
        <div>
          <p>Aproveite essa seção para destacaros benefícios do seu produto ou serviço.</p>
          <p>Palavras chaves que ajudam no SEO.</p>
        </div>
      </div>
      
      <div className="cards">
        <article className='card'>
          <img src="assets/images/target.png" alt="" />
          <div className="cardTexts">
            <h5>Rápido</h5>
            <p>Aproveite essa seção para destacar os benefícios do seu produto ou serviço.</p>
          </div>
          <div className="btnPlus">
            <button type="button"><IoMdAddCircle size={25}/></button>
          </div>
        </article>
        <article className='card'>
          <img src="assets/images/target.png" alt="" />
          <div className="cardTexts">
            <h5>Rápido</h5>
            <p>Aproveite essa seção para destacar os benefícios do seu produto ou serviço.</p>
          </div>
          <div className="btnPlus">
            <button type="button"><IoMdAddCircle size={25}/></button>
          </div>
        </article>
        <article className='card'>
          <img src="assets/images/target.png" alt="" />
          <div className="cardTexts">
            <h5>Rápido</h5>
            <p>Aproveite essa seção para destacar os benefícios do seu produto ou serviço.</p>
          </div>
          <div className="btnPlus">
            <button type="button"><IoMdAddCircle size={25}/></button>
          </div>
        </article>
        
      </div>
    </div>
  )
}

export default SectionBeneficios