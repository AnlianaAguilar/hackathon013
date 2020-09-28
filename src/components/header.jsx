/*
import React from 'react'
import './header.css'
import Isotipo from '../img/Header/Isotipo.png'



const Header = () => {
  return (
    <div className='Padre'>
      <div className='header1'><img alt="" src={Isotipo} /></div>
    </div>
  )
}

export default Header
*/


import React from 'react'
import './header.css'
import Isotipo from '../img/Header/Isotipo.png'
import UsuarioDashboard from '../img/Header/UsuarioDashboard.png'
import Miranking from '../img/Header/Miranking.png'
import CampeónSemanal from '../img/Header/CampeónSemanal.png'
import Chat from '../img/Header/Chat.png'
import Gestion from '../img/Header/Gestion.png'


const Header = () => {
  return (
    <div className='Padre'>
      <div className='header1'><img alt="" src={Isotipo} /></div>
      <div className='header2'><img alt="" src={UsuarioDashboard} /></div>
      <div className='header3'><img alt="" src={Miranking} /></div>
      <div className='header4'><img alt="" src={CampeónSemanal} /></div>
      <div className='header5'><img alt="" src={Chat} /></div>
      <div className='header6'><img alt="" src={Gestion} /></div>
    </div>
  )
}

export default Header

