import React from 'react';
import './MenuBotton.css'
import Bienestar from'../img/Bienestar.png'
import Perfil from '../img/Perfil.png'
import planificación from '../img/Tareas.png'


const MenuBotton = () => {
  return (
    <aside className="MenuBotton">
      <div className="MenuBottonChild">
        <a href="/planificación"> <img alt="" src={planificación} /><br/>Planificación </a>
      </div>
      <div className="MenuBottonChild">
        <a href="/bienestar"> <img alt="" src={Bienestar} /><br/>Bienestar  </a>
      </div>
      <div className="MenuBottonChild">
        <a href="/perfil"><img alt="" src={Perfil} /><br/>Colaborador</a>
      </div>
    </aside>
  )
}

export default MenuBotton
