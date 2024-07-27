import React from 'react'
import './sectionContatos.css'
import { MdWhatsapp } from "react-icons/md";

function SectionContatos() {
  return (
    <div className="contatos">
      <img src="assets/images/contatos.png" alt="" srcset="" />
      <h3>Ainda tem dúvidas? Fale conosco!</h3>
      <hr />
      <div className='textForm'>
        <div className="txtContatos">
          <p>Ofereça um meio de comunicação direto. Pode ser um <strong>contato@email.com.br</strong></p>
          <p>Ou crie um formulárioao lado que entrem em contato <em><strong>o mais rápido possível</strong></em></p>
          <div>
            <MdWhatsapp /><span> Hey! Estamos no WhatsApp!</span>
          </div>
        </div>
        <div className="form">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="" placeholder='Nome Sobrenome'/>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="" placeholder='email@email.com.br'/>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name="telefone" id="" placeholder='XX 00000-0000'/>
          <button className='btn btn-yellow' type="button">Enviar!</button>
        </div>
      </div>
    </div>
  )
}

export default SectionContatos