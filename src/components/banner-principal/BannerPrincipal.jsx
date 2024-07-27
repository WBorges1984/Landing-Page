import React from 'react'
import './bannerPrincipal.css'

function BannerPrincipal() {
  return (
    <div className="containerBanner">
      <div className="textButtons">
        <div className="texts">
          <h1>Um Slogan <br /> chamativo aqui.</h1>
          <p>Um texto sobre o seu produto ou serviço. Explique <em>porque ele é valioso</em> e direcione o usuário ao próximo objetivo.</p>
        </div>
        <div className="buttons">
          <button className='btn btn-yellow' type="button">Eu quero!</button>
          <button className='btn btn-trans' type="button">Conhecer mais</button>
        </div>
      </div>
    </div>
  )
}

export default BannerPrincipal