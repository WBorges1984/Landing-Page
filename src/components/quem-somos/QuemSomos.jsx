import React from 'react'
import './quemSomos.css'

function QuemSomos() {
  return (
    <div className="containerQuemSomos">
      
      <div className="conteudoSomos">
        <div className="textsSomos">
          <span>#CONTECOMAGENTE</span>
          <h3>Simples, rápido <br />e do seu jeito.</h3>
          <p>Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação e a chave para <em>conquistar seu cliente.</em></p>
        </div>

        <div className="buttonSomos">
          <button className='btn btn-yellow btn-somos' type="button"> Eu quero!</button>
        </div>
      </div>
    </div>
  )
}

export default QuemSomos