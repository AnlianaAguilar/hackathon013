import React from 'react'
import MenuBotton from './MenuBotton'
import Header from './header'
import './Perfil.css'


const Perfil = () => {
  return (

    <div className='Padre'>
      <div className='header'>
        <Header/>
      </div>
      <div className='cuerpo'>
        <div className='MenuBotton'>
          <MenuBotton/>
        </div>
        <div className='PerfilUsuario'>
          Perfil de Usuario
        </div>
      </div>
    </div>

  )
}

export default Perfil

