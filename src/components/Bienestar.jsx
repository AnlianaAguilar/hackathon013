import React from 'react'
import MenuBotton from './MenuBotton'
import Header from './header'
import './Bienestar.css'

const Bienestar = () => {
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
          Bienestar
        </div>
      </div>
    </div>
  )
}

export default Bienestar
