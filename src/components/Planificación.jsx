import React from 'react'
import MenuBotton from './MenuBotton'
import Header from './header'
import './Planificación.css'


const Planificación = () => {
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
          Planificación
        </div>
      </div>
    </div>
  )
}

export default Planificación
